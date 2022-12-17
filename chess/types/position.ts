class Position {
  constructor(private _x: number, private _y: number) {
    this._x = _x;
    this._y = _y;
  }

  getDistance(position: Position) {
    return {
      x: Math.abs(this._x - position._x),
      y: Math.abs(this._y - position._y),
    };
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }
}

export default Position;
