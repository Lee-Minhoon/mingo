import React, { useCallback, useEffect, useRef, useState } from "react";
import { CHESS_SQUARES, INIT_PIECES } from "../../../chess/constants";
import { Position } from "../../../chess/types";
import Piece from "../../../chess/types/piece";
import Canvas from "../../../common/components/Canvas";
import { getBoardCoord, getSquareLength } from "../../../common/utilities";

const Chess = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const [pieces, setPieces] = useState<Piece[]>(INIT_PIECES);
  const [selected, setSelected] = useState<Piece>();
  const [nextPositions, setNextPositions] = useState<Position[]>([]);
  const [turn, setTurn] = useState(true);

  // Click handler
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const { x, y } = getBoardCoord(e, canvas, CHESS_SQUARES + 1);
      const position = new Position(x, y);

      const findPiece = pieces.find(
        (item) => item.alive && item.position.eqaul(position)
      );

      if (selected) {
        if (nextPositions.some((item) => item.eqaul(position))) {
          selected.moveTo(position);
          if (findPiece?.alive) {
            findPiece.die();
          }
          setSelected(undefined);
          setTurn((prev) => !prev);
        } else {
          if (findPiece && turn === findPiece.team) {
            setSelected(findPiece);
          } else if (!findPiece) {
            setSelected(findPiece);
          }
        }
      } else {
        if (findPiece && turn === findPiece.team) {
          setSelected(findPiece);
        } else if (!findPiece) {
          setSelected(findPiece);
        }
      }
    },
    [pieces, nextPositions, selected, turn]
  );

  // Make initial settings.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.drawChessBoard();
    setContext(context);
  }, []);

  // Draw the board and pieces on the canvas.
  useEffect(() => {
    if (!context) return;
    context.drawChessBoard();
    pieces.forEach((item) => {
      context.drawChessPiece(item, item.id === selected?.id);
    });
    if (selected) {
      const nextPositions = [];
      const length = getSquareLength(context.canvas, CHESS_SQUARES + 1);
      for (let row = 0; row < CHESS_SQUARES; row++) {
        for (let column = 0; column < CHESS_SQUARES; column++) {
          const nextPosition = new Position(column, row);
          const findPiece = pieces.find((item) =>
            item.position.eqaul(nextPosition)
          );
          const existAllyPiece = findPiece?.alive && findPiece.isAlly(selected);
          if (!existAllyPiece && selected?.canMoveTo(nextPosition)) {
            context.fillStyle = "blue";
            context.fillRect(
              column * length + length / 8,
              row * length + length / 8,
              length - (length / 8) * 2,
              length - (length / 8) * 2
            );
            nextPositions.push(nextPosition);
          }
        }
      }
      setNextPositions(nextPositions);
    }
  }, [context, pieces, selected]);

  return (
    <Canvas ref={canvasRef} onClick={handleClick} width={500} height={500} />
  );
};

export default Chess;
