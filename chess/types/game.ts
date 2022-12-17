import { CHESS_LINES } from "../constants";
import King from "./king";
import Piece from "./piece";
import Position from "./position";

class Game {
  private static _clicked: Piece;
  private static _canvas: HTMLCanvasElement;
  private static _pieces = Game.setGame();
  private static setGame() {
    return [
      new King("red", new Position(5, 8)),
      new King("red", new Position(5, 1)),
    ];
  }

  static setCanvas(_canvas: HTMLCanvasElement) {
    this._canvas = _canvas;
  }

  get pieces() {
    return Game._pieces;
  }

  get clicked() {
    return Game._clicked;
  }

  findPiece(e: MouseEvent) {
    const width = Game._canvas.width;
    const height = Game._canvas.height;
    const length = Math.min(width, height) / CHESS_LINES;

    const clickedX = e.pageX - Game._canvas.scrollLeft;
    const clickedY = e.pageY - Game._canvas.scrollTop;

    const x = Math.ceil(clickedX / length);
    const y = Math.ceil(clickedY / length);

    return Game._pieces.find(
      (item) => item.position.y === y && item.position.x === x
    );
  }

  clickPiece(e: MouseEvent) {
    const piece = this.findPiece(e);
    if (piece) {
      Game._clicked = piece;
    }
  }
}

export default Game;
