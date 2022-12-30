import Position from "./position";

abstract class Piece {
  private _alive = true;
  private _moves = 0;

  constructor(
    private _team: boolean,
    private _id: string,
    private _src: string,
    private _position: Position
  ) {
    this._team = _team;
    this._id = _id;
    this._src = _src;
    this._position = _position;
  }

  get alive() {
    return this._alive;
  }

  get team() {
    return this._team;
  }

  get id() {
    return this._id;
  }

  get src() {
    return this._src;
  }

  get position() {
    return this._position;
  }

  moveTo(position: Position) {
    this._position = position;
    this._moves += 1;
  }

  die() {
    this._alive = false;
  }

  isAlly(piece: Piece) {
    return this.team === piece.team;
  }

  isEnemy(piece: Piece) {
    return this.team !== piece.team;
  }

  abstract canMoveTo(position: Position): boolean;
}

export default Piece;
