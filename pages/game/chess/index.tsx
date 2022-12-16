import { useEffect, useRef } from "react";
import Canvas from "../../../common/components/Canvas";

const Chess = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.drawGrid(8, 8);
  }, []);

  return <Canvas ref={canvasRef} width={500} height={500} />;
};

export default Chess;
