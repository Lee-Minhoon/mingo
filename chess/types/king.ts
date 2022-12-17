import Piece from "./piece";
import Position from "./position";

class King extends Piece {
  canMoveTo(position: Position): boolean {
    const distance = this.position.getDistance(position);
    return distance.y < 2 && distance.x < 2;
  }
}

export default King;
