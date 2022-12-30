import { CHESS_LINES } from "../../chess/constants";
import Piece from "../../chess/types/piece";
import { getSquareLength } from "../utilities";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  /**
   * Draw a line
   */
  CanvasRenderingContext2D.prototype.drawLine = function ({ begin, end }) {
    this.beginPath();
    this.moveTo(begin.x, begin.y);
    this.lineTo(end.x, end.y);
    this.stroke();
  };

  /**
   * Draw a circle
   */
  CanvasRenderingContext2D.prototype.drawCircle = function (x, y, radius) {
    this.beginPath();
    this.arc(x, y, radius, 0, Math.PI * 2);
    this.stroke();
  };

  /**
   * Draw a grid
   */
  CanvasRenderingContext2D.prototype.drawGrid = function (row, column) {
    const canvas = this.canvas;
    this.lineWidth = 1;
    this.strokeStyle = "black";
    for (let y = 0; y <= canvas.height; y += canvas.height / row) {
      this.drawLine({ begin: { x: 0, y }, end: { x: canvas.width, y } });
    }
    for (let x = 0; x <= canvas.width; x += canvas.width / column) {
      this.drawLine({ begin: { x, y: 0 }, end: { x, y: canvas.height } });
    }
  };

  /**
   * Draw a chess board.
   */
  CanvasRenderingContext2D.prototype.drawChessBoard = function () {
    const canvas = this.canvas;
    const length = getSquareLength(canvas, CHESS_LINES);
    for (let row = 0; row < CHESS_LINES; row++) {
      for (let column = 0; column < CHESS_LINES; column++) {
        if ((row + column) % 2 === 0) {
          this.fillStyle = "white";
        } else {
          this.fillStyle = "black";
        }
        this.fillRect(column * length, row * length, length, length);
      }
    }
  };

  /**
   * Draw a chess piece.
   */
  CanvasRenderingContext2D.prototype.drawChessPiece = function (
    piece: Piece,
    clicked: boolean
  ) {
    if (piece.alive) {
      const position = piece.position;
      const canvas = this.canvas;
      this.lineWidth = 2;
      this.strokeStyle = clicked ? "blue" : piece.team ? "red" : "green";
      const length = Math.min(canvas.width, canvas.height) / CHESS_LINES;
      const y = (position.y + 1) * length - length / 2;
      const x = (position.x + 1) * length - length / 2;
      this.drawCircle(x, y, length / 2);
    }
  };
}
