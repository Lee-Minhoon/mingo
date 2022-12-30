import { Position } from "../../chess/types";
import Piece from "../../chess/types/piece";
import canvasExtend from "./canvas";

declare global {
  interface CanvasRenderingContext2D {
    drawLine: ({ begin, end }: DrawLineParams) => void;
    drawCircle: (y: number, x: number, radius: number) => void;
    drawGrid: (row: number, column: number) => void;
    drawChessBoard: (nextPositions: Position[]) => void;
    drawChessPiece: (piece: Piece, clicked: boolean) => void;
  }
}

export { canvasExtend };

export interface DrawLineParams {
  begin: {
    x: number;
    y: number;
  };
  end: {
    x: number;
    y: number;
  };
}

export type Nullable<T> = T | null | undefined;
