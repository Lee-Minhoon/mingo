import { CHESS_LINES } from "../../chess/constants";
import Piece from "../../chess/types/piece";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  CanvasRenderingContext2D.prototype.drawLine = function ({ begin, end }) {
    this.beginPath();
    this.moveTo(begin.x, begin.y);
    this.lineTo(end.x, end.y);
    this.stroke();
  };

  CanvasRenderingContext2D.prototype.drawCircle = function (x, y, radius) {
    this.beginPath();
    this.arc(x, y, radius, 0, Math.PI * 2);
    this.stroke();
  };

  CanvasRenderingContext2D.prototype.drawGrid = function (row, column) {
    const _rows = [];
    const _columns = [];
    const canvas = this.canvas;
    this.lineWidth = 1;
    this.strokeStyle = "black";
    for (let y = 0; y <= canvas.width; y += canvas.width / row) {
      this.drawLine({ begin: { x: 0, y }, end: { x: canvas.width, y } });
      _rows.push(y);
    }
    for (let x = 0; x <= canvas.height; x += canvas.height / column) {
      this.drawLine({ begin: { x, y: 0 }, end: { x, y: canvas.height } });
      _columns.push(x);
    }
    return { _rows, _columns };
  };

  CanvasRenderingContext2D.prototype.drawChessPiece = function (
    piece: Piece,
    clicked: boolean
  ) {
    const color = piece.color;
    const position = piece.position;
    const canvas = this.canvas;
    this.lineWidth = 2;
    this.strokeStyle = clicked ? "black" : color;
    const length = Math.min(canvas.width, canvas.height) / CHESS_LINES;
    const y = position.y * length - length / 2;
    const x = position.x * length - length / 2;
    this.drawCircle(x, y, length / 2);
  };
}
