import Position from "./position";

class Stone {
  constructor(private _position: Position) {
    this._position = _position;
  }

  get position() {
    return this._position;
  }
}

export default Stone;
