/**
 * Get the length of one square on the board
 * @param canvas Canvas
 * @param lines Number of lines on the board
 * @param padding Padding value of the canvas
 * @returns Length of one sqaure
 */
export const getSquareLength = (
  canvas: HTMLCanvasElement,
  lines: number,
  padding = 0
) => {
  return Math.min(canvas.length - padding) / (lines - 1);
};

/**
 * Converts the coordinates of the clicked mouse event to board coordinates
 * @param e Mouse event
 * @param canvas Canvas
 * @param lines Number of lines on the board
 * @param padding Padding value of the canvas
 * @returns Coordinates of the board
 */
export const getBoardCoord = (
  e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  canvas: HTMLCanvasElement,
  lines: number,
  padding = 0
): { x: number; y: number } => {
  const length = getSquareLength(canvas, lines, padding);

  const clickedX = e.pageX - canvas.offsetLeft + padding / 2;
  const clickedY = e.pageY - canvas.offsetTop + padding / 2;

  const x = Math.floor(clickedX / length);
  const y = Math.floor(clickedY / length);

  return { x, y };
};
