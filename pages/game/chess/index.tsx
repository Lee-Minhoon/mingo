import React, { useCallback, useEffect, useRef, useState } from "react";
import { CHESS_LINES, INIT_PIECES } from "../../../chess/constants";
import Piece from "../../../chess/types/piece";
import Canvas from "../../../common/components/Canvas";

const Chess = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const [pieces, setPieces] = useState<Piece[]>(INIT_PIECES);
  const [clicked, setClicked] = useState<Piece>();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const width = canvas.width;
      const height = canvas.height;
      const length = Math.min(width, height) / CHESS_LINES;

      const clickedX = e.pageX - canvas.scrollLeft;
      const clickedY = e.pageY - canvas.scrollTop;

      const x = Math.ceil(clickedX / length);
      const y = Math.ceil(clickedY / length);

      const piece = pieces.find(
        (item) => item.position.y === y && item.position.x === x
      );

      setClicked(piece);
    },
    [pieces]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.drawGrid(CHESS_LINES, CHESS_LINES);
    setContext(context);
  }, []);

  useEffect(() => {
    if (!context) return;
    pieces.forEach((item) => {
      context.drawChessPiece(item, item.id === clicked?.id);
    });
  }, [context, pieces, clicked]);

  return (
    <Canvas ref={canvasRef} onClick={handleClick} width={500} height={500} />
  );
};

export default Chess;
