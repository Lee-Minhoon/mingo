import ChessCanvas from "./canvas";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  HTMLCanvasElement.prototype.getChessContext = function () {
    return new ChessCanvas();
  };
}
