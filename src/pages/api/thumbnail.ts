import { NextApiRequest, NextApiResponse } from "next";
import { createCanvas } from "canvas";

const width = 1200;
const height = 630;

export default (req: NextApiRequest, res: NextApiResponse) => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#ff0000";
  ctx.fillRect(0, 0, width / 2, height / 2);
  ctx.fillStyle = "#00ff00";
  ctx.fillRect(width / 2, height / 2, width, height);

  ctx.font = `32px serief`;
  ctx.textAlign = "left";
  ctx.strokeText(Date.now().toString(), 32, 32);

  const buffer = canvas.toBuffer();

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
    "Cache-Control": "no-cache",
  });
  res.end(buffer, "binary");
};
