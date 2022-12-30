import React, { useCallback, useEffect, useRef, useState } from "react";
import { CHESS_LINES, INIT_PIECES } from "../../../chess/constants";
import { Position } from "../../../chess/types";
import Piece from "../../../chess/types/piece";
import Canvas from "../../../common/components/Canvas";
import { getBoardCoord, getSquareLength } from "../../../common/utilities";

const Gomoku = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const [pieces, setPieces] = useState<Piece[]>(INIT_PIECES);
  const [selected, setSelected] = useState<Piece>();
  const [nextPositions, setNextPositions] = useState<Position[]>([]);
  const [turn, setTurn] = useState(true);

  // Make initial settings.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    context?.drawCheckerBoard();
    setContext(context);
  }, []);

  return <Canvas ref={canvasRef} width={500} height={500} />;
};

export default Gomoku;
