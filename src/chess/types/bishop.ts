import Piece from "./piece";
import Position from "./position";

class Bishop extends Piece {
  canMoveTo(position: Position): boolean {
    return (
      Math.abs(this.position.x - position.x) ===
      Math.abs(this.position.y - position.y)
    );
  }
}

export default Bishop;
