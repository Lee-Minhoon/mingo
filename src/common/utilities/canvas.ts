/**
 * Get the length of one square on the board
 * @param canvas Canvas
 * @param lines Number of lines on the board
 * @returns Length of one sqaure
 */
export const getSquareLength = (canvas: HTMLCanvasElement, lines: number) => {
  return Math.min(canvas.width, canvas.height) / lines;
};

/**
 * Converts the coordinates of the clicked mouse event to board coordinates
 * @param e Mouse event
 * @param canvas Canvas
 * @param lines Number of lines on the board
 * @returns Coordinates of the board
 */
export const getBoardCoord = (
  e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  canvas: HTMLCanvasElement,
  lines: number
): { x: number; y: number } => {
  const length = getSquareLength(canvas, lines);

  const clickedX = e.pageX - canvas.offsetLeft;
  const clickedY = e.pageY - canvas.offsetTop;

  const x = Math.floor(clickedX / length);
  const y = Math.floor(clickedY / length);

  return { x, y };
};
