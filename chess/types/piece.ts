import Position from "./position";

abstract class Piece {
  constructor(
    private _color: string | CanvasGradient | CanvasPattern,
    private _position: Position
  ) {
    this._color = _color;
    this._position = _position;
  }

  set color(color: string | CanvasGradient | CanvasPattern) {
    this._color = color;
  }

  get color() {
    return this._color;
  }

  get position() {
    return this._position;
  }

  moveTo(position: Position) {
    this._position = position;
  }

  abstract canMoveTo(position: Position): boolean;
}

export default Piece;
