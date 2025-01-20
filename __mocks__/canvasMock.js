const createCanvas = require('canvas');

HTMLCanvasElement.prototype.getContext = function () {
  return createCanvas(200, 200).getContext("2d");
};