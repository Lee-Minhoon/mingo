import Position from "./position";

abstract class Piece {
  constructor(
    private _id: string,
    private _src: string,
    private _color: string | CanvasGradient | CanvasPattern,
    private _position: Position
  ) {
    this._id = _id;
    this._color = _color;
    this._position = _position;
  }

  get id() {
    return this._id;
  }

  get src() {
    return this._src;
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
