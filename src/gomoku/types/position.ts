import { Nullable } from "./../../common/types/index";

class Position {
  constructor(private _x: number, private _y: number) {
    this._x = _x;
    this._y = _y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  eqaul(position: Nullable<Position>) {
    return this.x === position?.x && this.y === position?.y;
  }
}

export default Position;
