import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Area, CoordinateSystem2DProps, Vector } from ".";

const AxisColor = "#0456d1";

export default function Canvas({ axes, coordinateArea, formulas }: CoordinateSystem2DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const renderCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    canvas.height = canvas.clientHeight;
    canvas.width = canvas.clientWidth;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("ctx is not enabled:" + ctx);
    }

    const painter = new CanvasPainter(ctx, coordinateArea);
    painter.clear();

    if (axes.enabled) {
      // x
      if (coordinateArea.from.x <= 0 && 0 <= coordinateArea.to.x) {
        const d = Math.pow(10, Math.floor(Math.log10(coordinateArea.to.x - coordinateArea.from.x)));
        const s = (coordinateArea.to.y - coordinateArea.from.y) / 150;
        if (axes.scales) {
          const drawScale = (x: number) => {
            painter.drawLine({ x, y: -s }, { x, y: s }, 1, AxisColor);
            painter.drawString({ x, y: -s * 8 }, x.toString(), 12);
          };
          for (let i = d; i <= coordinateArea.to.x; i += d) {
            drawScale(i);
          }
          for (let i = -d; coordinateArea.from.x <= i; i -= d) {
            drawScale(i);
          }
        }
        painter.drawLine({ x: coordinateArea.from.x, y: 0 }, { x: coordinateArea.to.x, y: 0 }, 1, AxisColor);
      }
      // y
      if (coordinateArea.from.y <= 0 && 0 <= coordinateArea.to.y) {
        const d = Math.pow(10, Math.floor(Math.log10(coordinateArea.to.y - coordinateArea.from.y)));
        const s = (coordinateArea.to.x - coordinateArea.from.x) / 150;
        if (axes.scales) {
          const drawScale = (y: number) => {
            painter.drawLine({ x: -s, y }, { x: s, y }, 1, AxisColor);
            painter.drawString({ x: -s * 4, y }, y.toString(), 12, "right");
          };
          for (let i = d; i <= coordinateArea.to.y; i += d) {
            drawScale(i);
          }
          for (let i = -d; coordinateArea.from.y <= i; i -= d) {
            drawScale(i);
          }
        }
        painter.drawLine({ x: 0, y: coordinateArea.from.y }, { x: 0, y: coordinateArea.to.y }, 1, AxisColor);
      }
    }

    formulas.forEach((f) => {
      if (f.type === "function") {
        painter.drawFunction(f.data.x, f.data.y, f.data.range, 0.01, 2, f.data.color);
      } else if (f.type === "point") {
        painter.drawPoint({ x: f.data.x, y: f.data.y }, f.data.color);
      }
    });
  };

  useEffect(() => {
    renderCanvas();
    // re-render when resized
    window.addEventListener("resize", renderCanvas);
    return () => window.removeEventListener("resize", renderCanvas);
  });

  return <Container ref={canvasRef} />;
}

const Container = styled.canvas`
  height: 100%;
  width: 100%;
  pointer-events: none;
`;

class CanvasPainter {
  readonly ctx: CanvasRenderingContext2D;
  readonly coordinateArea: Area;

  get canvas() {
    return this.ctx.canvas;
  }

  constructor(ctx: CanvasRenderingContext2D, coordinateArea: Area) {
    this.ctx = ctx;
    this.coordinateArea = coordinateArea;
  }

  private isInsideCoordinate(v: Vector) {
    return (
      this.coordinateArea.from.x <= v.x &&
      v.x < this.coordinateArea.to.x &&
      this.coordinateArea.from.y <= v.y &&
      v.y < this.coordinateArea.to.y
    );
  }

  // 描画する直交座標系から canvas の座標系へ変換
  private coordinate2canvas(v: Vector) {
    return {
      x:
        this.canvas.width *
        ((v.x - this.coordinateArea.from.x) / (this.coordinateArea.to.x - this.coordinateArea.from.x)),
      y:
        this.canvas.height *
        (1 - (v.y - this.coordinateArea.from.y) / (this.coordinateArea.to.y - this.coordinateArea.from.y)),
    };
  }

  private prepare() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#000000";
    this.ctx.strokeStyle = "#000000";
    this.ctx.lineWidth = 1;
  }

  clear() {
    this.prepare();

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawRect(from: Vector, to: Vector, color: string) {
    this.prepare();

    const u = this.coordinate2canvas(from);
    const v = this.coordinate2canvas(to);
    this.ctx.fillStyle = color;
    this.ctx.fillRect(Math.min(u.x, v.x), Math.min(u.y, v.y), Math.abs(v.x - u.x), Math.abs(v.y - u.y));
  }

  drawLine(from: Vector, to: Vector, width: number, color: string) {
    this.prepare();

    const u = this.coordinate2canvas(from);
    const v = this.coordinate2canvas(to);
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = width;
    this.ctx.moveTo(u.x, u.y);
    this.ctx.lineTo(v.x, v.y);
    this.ctx.stroke();
  }

  drawPoint(v: Vector, color: string) {
    this.prepare();

    const u = this.coordinate2canvas(v);
    this.ctx.fillStyle = color;
    this.ctx.arc(u.x, u.y, 4, 0, 2 * Math.PI, true);
    this.ctx.fill();
  }

  drawString(pos: Vector, value: string, fontSize: number, align: CanvasTextAlign = "center") {
    this.prepare();

    const u = this.coordinate2canvas(pos);
    u.y += fontSize / 3;
    this.ctx.font = `${fontSize}px serief`;
    this.ctx.textAlign = align;
    this.ctx.strokeText(value, u.x, u.y);
  }

  drawFunction(
    x: (t: number) => number,
    y: (t: number) => number,
    rangeT: { from: number; to: number },
    step: number,
    width: number,
    color: string
  ) {
    this.prepare();

    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = width;

    let u = this.coordinate2canvas({ x: x(rangeT.from), y: y(rangeT.from) });
    for (let t = rangeT.from + step; t < rangeT.to; t += step) {
      this.ctx.moveTo(u.x, u.y);
      let v = this.coordinate2canvas({ x: x(t), y: y(t) });
      this.ctx.lineTo(v.x, v.y);
      u = v;
    }

    this.ctx.stroke();
  }
}
