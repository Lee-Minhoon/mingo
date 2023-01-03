import Piece from "../../chess/types/piece";
import canvasExtend from "./canvas";

declare global {
  interface HTMLCanvasElement {
    length: number;
  }
  interface CanvasRenderingContext2D {
    drawLine: ({ begin, end }: DrawLineParams) => void;
    drawCircle: (x: number, y: number, radius: number, fill?: boolean) => void;
    drawGrid: (lines: number, padding?: number) => void;
    drawCheckerBoard: () => void;
    drawGoStone: (x: number, y: number) => void;
    drawChessBoard: () => void;
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
