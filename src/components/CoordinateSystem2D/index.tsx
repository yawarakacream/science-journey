import styled from "styled-components";
import Board from "./Board";
import Canvas from "./Canvas";

export interface Vector {
  x: number;
  y: number;
}

export interface Area {
  from: Vector;
  to: Vector;
}

export interface MathFunction {
  label: string;
  x: (t: number) => number;
  y: (t: number) => number;
  range: { from: number; to: number };
  color: string;
}

export interface MathPoint extends Vector {
  label?: string;
  color: string;
}

export type Formula =
  | {
      type: "function";
      data: MathFunction;
    }
  | { type: "point"; data: MathPoint };

export interface CoordinateSystem2DProps {
  // x, y 軸
  axes: {
    enabled: boolean;
    scales: boolean;
  };
  // 幅に対する高さの比率 [W, H]
  ratio: [number, number];
  // 表示する区画
  coordinateArea: Area;
  // 表示する式
  formulas: Formula[];
}

/**
 * 2 次元直交座標系
 */
export default function CoordinateSystem2D(props: CoordinateSystem2DProps) {
  return (
    <Container>
      <CanvasCell ratio={props.ratio}>
        <CanvasWrapper>
          <Canvas {...props} />
        </CanvasWrapper>
      </CanvasCell>
      <BoardCell>
        <Board formulas={props.formulas} />
      </BoardCell>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: grid;
  margin: 32px 0;
  border: 2px lightgray solid;
  border-radius: 16px;

  grid-template-areas: "board canvas";
  grid-template-rows: none;
  grid-template-columns: 35% 65%;

  @media (max-width: 600px) {
    grid-template-areas: "canvas" "board";
    grid-template-rows: auto 1fr;
    grid-template-columns: none;
  }
`;

const CanvasCell = styled.div<{ ratio: [number, number] }>`
  grid-area: canvas;
  position: relative;

  &:before {
    display: block;
    padding-top: ${({ ratio }) => (100 * ratio[1]) / ratio[0]}%;
    content: "";
  }
`;

const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const BoardCell = styled.div`
  grid-area: board;
  position: relative;
  padding: 0 8px;
  border-right: 2px lightgray solid;

  @media (max-width: 600px) {
    border-right: none;
    border-top: 2px lightgray solid;
  }
`;
