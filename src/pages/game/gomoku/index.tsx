import { CHECKER_BOARD_LINES } from "common/constants";
import Stone from "gomoku/types/stone";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { CHESS_SQUARES, INIT_PIECES } from "../../../chess/constants";
import Piece from "../../../chess/types/piece";
import Canvas from "../../../common/components/Canvas";
import { getBoardCoord, getSquareLength } from "../../../common/utilities";
import Position from "gomoku/types/position";

const Gomoku = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const [stones, setStones] = useState<Stone[]>([]);
  const [selected, setSelected] = useState<Piece>();
  const [nextPositions, setNextPositions] = useState<Position[]>([]);
  const [turn, setTurn] = useState(true);

  // Move handler
  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const { x, y } = getBoardCoord(e, canvas, CHECKER_BOARD_LINES + 1);
      const position = new Position(x, y);
      if (!stones.some((item) => item.position.eqaul(position))) {
        context?.drawGoStone(x, y);
      }
    },
    [context, stones]
  );

  // Click handler
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const { x, y } = getBoardCoord(e, canvas, CHECKER_BOARD_LINES + 1);
      const position = new Position(x, y);
      if (!stones.some((item) => item.position.eqaul(position))) {
        setStones((prev) => [...prev, new Stone(new Position(x, y))]);
      }
    },
    [stones]
  );

  // Make initial settings.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.drawCheckerBoard();
    setContext(context);
  }, []);

  // Draw the board and pieces on the canvas.
  useEffect(() => {
    if (!context) return;
    context.drawCheckerBoard();
    stones.forEach((item) => {
      context.drawGoStone(item.position.x, item.position.y);
    });
  }, [context, stones]);

  return (
    <Canvas
      ref={canvasRef}
      onMouseMove={handleMove}
      onClick={handleClick}
      width={500}
      height={500}
    />
  );
};

export default Gomoku;
