import { King, Queen, Bishop, Knight, Rook, Pawn } from "../types";
import Position from "../types/position";

export const CHESS_LINES = 8;

export const INIT_PIECES = [
  new King("B-KING-1", "&#9818", "red", new Position(5, 8)),
  new Queen("B-QUEEN-1", "&#9819", "red", new Position(4, 8)),
  new Bishop("B-BISHOP-1", "&#9820", "red", new Position(3, 8)),
  new Bishop("B-BISHOP-2", "&#9820", "red", new Position(6, 8)),
  new Knight("B-KNIGHT-1", "&#9821", "red", new Position(2, 8)),
  new Knight("B-KNIGHT-2", "&#9821", "red", new Position(7, 8)),
  new Rook("B-ROOK-1", "&#9822", "red", new Position(1, 8)),
  new Rook("B-ROOK-2", "&#9822", "red", new Position(8, 8)),
  new Pawn("B-PAWN-1", "&#9823", "red", new Position(1, 7)),
  new Pawn("B-PAWN-2", "&#9823", "red", new Position(2, 7)),
  new Pawn("B-PAWN-3", "&#9823", "red", new Position(3, 7)),
  new Pawn("B-PAWN-4", "&#9823", "red", new Position(4, 7)),
  new Pawn("B-PAWN-5", "&#9823", "red", new Position(5, 7)),
  new Pawn("B-PAWN-6", "&#9823", "red", new Position(6, 7)),
  new Pawn("B-PAWN-7", "&#9823", "red", new Position(7, 7)),
  new Pawn("B-PAWN-8", "&#9823", "red", new Position(8, 7)),

  new King("W-KING-1", "&#9812", "red", new Position(5, 1)),
  new Queen("W-QUEEN-1", "&#9813", "red", new Position(4, 1)),
  new Bishop("W-BISHOP-1", "&#9814", "red", new Position(3, 1)),
  new Bishop("W-BISHOP-2", "&#9814", "red", new Position(6, 1)),
  new Knight("W-KNIGHT-1", "&#9815", "red", new Position(2, 1)),
  new Knight("W-KNIGHT-2", "&#9815", "red", new Position(7, 1)),
  new Rook("W-ROOK-1", "&#9816", "red", new Position(1, 1)),
  new Rook("W-ROOK-2", "&#9816", "red", new Position(8, 1)),
  new Pawn("W-PAWN-1", "&#9817", "red", new Position(1, 2)),
  new Pawn("W-PAWN-2", "&#9817", "red", new Position(2, 2)),
  new Pawn("W-PAWN-3", "&#9817", "red", new Position(3, 2)),
  new Pawn("W-PAWN-4", "&#9817", "red", new Position(4, 2)),
  new Pawn("W-PAWN-5", "&#9817", "red", new Position(5, 2)),
  new Pawn("W-PAWN-6", "&#9817", "red", new Position(6, 2)),
  new Pawn("W-PAWN-7", "&#9817", "red", new Position(7, 2)),
  new Pawn("W-PAWN-8", "&#9817", "red", new Position(8, 2)),
];
