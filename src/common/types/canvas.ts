import { CHESS_SQUARES } from "../../chess/constants";
import Piece from "../../chess/types/piece";
import { CHECKER_BOARD_LINES } from "../constants";
import { getSquareLength } from "../utilities";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  Object.defineProperty(HTMLCanvasElement.prototype, "length", {
    configurable: true,
    get: function length() {
      return Math.min(this.width, this.height);
    },
  });
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
  CanvasRenderingContext2D.prototype.drawCircle = function (
    x,
    y,
    radius,
    fill = false
  ) {
    this.beginPath();
    this.arc(x, y, radius, 0, Math.PI * 2);
    this.stroke();
    if (fill) {
      this.fillStyle = "black";
      this.fill();
    }
  };

  /**
   * Draw a grid
   */
  CanvasRenderingContext2D.prototype.drawGrid = function (lines, padding = 0) {
    const canvas = this.canvas;
    const length = getSquareLength(canvas, lines, padding);
    const half = padding / 2;
    this.lineWidth = 1;
    this.strokeStyle = "black";
    for (let row = 0; row < lines; row++) {
      this.drawLine({
        begin: { x: 0 + half, y: row * length + half },
        end: { x: canvas.width - half, y: row * length + half },
      });
    }
    for (let column = 0; column < lines; column++) {
      this.drawLine({
        begin: { x: column * length + half, y: 0 + half },
        end: { x: column * length + half, y: canvas.height - half },
      });
    }
  };

  /**
   * Draw a checker board.
   */
  CanvasRenderingContext2D.prototype.drawCheckerBoard = function () {
    const canvas = this.canvas;
    // fill background
    this.fillStyle = "#eba823";
    this.fillRect(0, 0, canvas.width, canvas.height);
    // draw grid
    const padding = canvas.length / CHECKER_BOARD_LINES;
    this.drawGrid(CHECKER_BOARD_LINES, padding);
    // draw flower points
    const length = getSquareLength(canvas, CHECKER_BOARD_LINES, padding);
    for (let row = 1; row <= 3; row++) {
      for (let column = 1; column <= 3; column++) {
        const x = length * (column * 6 - 3) + padding / 2;
        const y = length * (row * 6 - 3) + padding / 2;
        this.drawCircle(x, y, 2, true);
      }
    }
  };

  CanvasRenderingContext2D.prototype.drawGoStone = function (x, y) {
    const canvas = this.canvas;
    const length = getSquareLength(canvas, CHECKER_BOARD_LINES + 1);
    this.drawCircle(x * length + length / 2, y * length + length / 2, 5);
  };

  /**
   * Draw a chess board.
   */
  CanvasRenderingContext2D.prototype.drawChessBoard = function () {
    const canvas = this.canvas;
    const length = getSquareLength(canvas, CHESS_SQUARES + 1);
    for (let row = 0; row < CHESS_SQUARES; row++) {
      for (let column = 0; column < CHESS_SQUARES; column++) {
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
      const length = canvas.length / CHESS_SQUARES;
      const y = (position.y + 1) * length - length / 2;
      const x = (position.x + 1) * length - length / 2;
      this.drawCircle(x, y, length / 2);
    }
  };
}
