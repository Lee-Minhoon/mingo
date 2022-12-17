import React, { useCallback, useEffect, useRef, useState } from "react";
import { CHESS_LINES } from "../../../chess/constants";
import { Game } from "../../../chess/types";
import Canvas from "../../../common/components/Canvas";

const Chess = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [re, setRe] = useState(false);
  const [game, setGame] = useState<Game>(new Game());
  const [context, setContext] = useState<CanvasRenderingContext2D>();

  const pieceClick = useCallback(
    (e: MouseEvent) => {
      game.clickPiece(e);
      setRe(true);
    },
    [game]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    Game.setCanvas(canvas);
    canvas.addEventListener("mousedown", pieceClick);
    const context = canvas.getContext("2d");
    if (!context) return;
    context.drawGrid(CHESS_LINES, CHESS_LINES);
    setContext(context);
    return () => canvas.removeEventListener("mousedown", pieceClick);
  }, [pieceClick]);

  useEffect(() => {
    if (!context) return;
    game.pieces.forEach((item) => {
      context.drawChessPiece(game, item);
    });
    setRe(false);
  }, [re, game, context, game.pieces]);

  return <Canvas ref={canvasRef} width={500} height={500} />;
};

export default Chess;
