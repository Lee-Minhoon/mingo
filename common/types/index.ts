import canvasExtend from "./canvas";

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
    drawGrid: (row: number, column: number) => void;
  }
}

export { canvasExtend };
