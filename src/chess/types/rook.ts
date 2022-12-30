import Piece from "./piece";
import Position from "./position";

class Rook extends Piece {
  canMoveTo(position: Position): boolean {
    return this.position.x === position.x || this.position.y === position.y;
  }
}

export default Rook;
