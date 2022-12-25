import Piece from "../../chess/types/piece";
import canvasExtend from "./prototype";

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

declare global {
  interface CanvasRenderingContext2D {
    drawLine: ({ begin, end }: DrawLineParams) => void;
    drawCircle: (y: number, x: number, radius: number) => void;
    drawGrid: (
      row: number,
      column: number
    ) => { _rows: number[]; _columns: number[] };
    drawChessPiece: (piece: Piece, clicked: boolean) => void;
  }
}

export { canvasExtend };
