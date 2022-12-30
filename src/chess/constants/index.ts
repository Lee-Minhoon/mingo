import { King, Queen, Bishop, Knight, Rook, Pawn } from "../types";
import Position from "../types/position";

export const CHESS_LINES = 8;

export const INIT_PIECES = [
  new King(true, "B-KING-1", "&#9818", new Position(4, 7)),
  new Queen(true, "B-QUEEN-1", "&#9819", new Position(3, 7)),
  new Bishop(true, "B-BISHOP-1", "&#9820", new Position(2, 7)),
  new Bishop(true, "B-BISHOP-2", "&#9820", new Position(5, 7)),
  new Knight(true, "B-KNIGHT-1", "&#9821", new Position(1, 7)),
  new Knight(true, "B-KNIGHT-2", "&#9821", new Position(6, 7)),
  new Rook(true, "B-ROOK-1", "&#9822", new Position(0, 7)),
  new Rook(true, "B-ROOK-2", "&#9822", new Position(7, 7)),
  new Pawn(true, "B-PAWN-1", "&#9823", new Position(0, 6)),
  new Pawn(true, "B-PAWN-2", "&#9823", new Position(1, 6)),
  new Pawn(true, "B-PAWN-3", "&#9823", new Position(2, 6)),
  new Pawn(true, "B-PAWN-4", "&#9823", new Position(3, 6)),
  new Pawn(true, "B-PAWN-5", "&#9823", new Position(4, 6)),
  new Pawn(true, "B-PAWN-6", "&#9823", new Position(5, 6)),
  new Pawn(true, "B-PAWN-7", "&#9823", new Position(6, 6)),
  new Pawn(true, "B-PAWN-8", "&#9823", new Position(7, 6)),

  new King(false, "W-KING-1", "&#9812", new Position(4, 0)),
  new Queen(false, "W-QUEEN-1", "&#9813", new Position(3, 0)),
  new Bishop(false, "W-BISHOP-1", "&#9814", new Position(2, 0)),
  new Bishop(false, "W-BISHOP-2", "&#9814", new Position(5, 0)),
  new Knight(false, "W-KNIGHT-1", "&#9815", new Position(1, 0)),
  new Knight(false, "W-KNIGHT-2", "&#9815", new Position(6, 0)),
  new Rook(false, "W-ROOK-1", "&#9816", new Position(0, 0)),
  new Rook(false, "W-ROOK-2", "&#9816", new Position(7, 0)),
  new Pawn(false, "W-PAWN-1", "&#9817", new Position(0, 1)),
  new Pawn(false, "W-PAWN-2", "&#9817", new Position(1, 1)),
  new Pawn(false, "W-PAWN-3", "&#9817", new Position(2, 1)),
  new Pawn(false, "W-PAWN-4", "&#9817", new Position(3, 1)),
  new Pawn(false, "W-PAWN-5", "&#9817", new Position(4, 1)),
  new Pawn(false, "W-PAWN-6", "&#9817", new Position(5, 1)),
  new Pawn(false, "W-PAWN-7", "&#9817", new Position(6, 1)),
  new Pawn(false, "W-PAWN-8", "&#9817", new Position(7, 1)),
];
