// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  CanvasRenderingContext2D.prototype.drawLine = function ({ begin, end }) {
    this.beginPath();
    this.moveTo(begin.x, begin.y);
    this.lineTo(end.x, end.y);
    this.stroke();
  };

  CanvasRenderingContext2D.prototype.drawGrid = function (row, column) {
    const canvas = this.canvas;
    for (let y = 0; y <= canvas.width; y += canvas.width / row) {
      this.drawLine({ begin: { x: 0, y }, end: { x: canvas.width, y } });
    }
    for (let x = 0; x <= canvas.height; x += canvas.height / column) {
      this.drawLine({ begin: { x, y: 0 }, end: { x, y: canvas.height } });
    }
  };
}
