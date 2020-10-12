//settings

//size
let gridSize = 20;
let gridWidth = 60;
let gridHeight = 60;

//colour
let colorR = 0;
let colorG = 0;
let colorB = 0;

//random
let maxRandom = 50;

//global vars
let x = 0;
let y = 0;
let canvasWidth = 0;
let canvasHeight = 0;

function setup() {

  canvasWidth = gridSize * gridWidth;
  canvasHeight = gridSize * gridHeight;

  createCanvas(canvasWidth, canvasHeight);
  background(0);

  loadImage('../img/luc-van-soest.jpg', img => {

    for (let x = 1; x < canvasWidth; x +=  gridSize) {

      for (let y = 0; y < canvasHeight; y +=  gridSize) {

        let currentPixel = img.get(x, y)

        let alphaValue = brightness(currentPixel);
        
        colorR = red(currentPixel);
        colorG = green(currentPixel);
        colorB = blue(currentPixel);

        if (alphaValue <= maxRandom)
        {
          alphaValue = maxRandom;
        }
        
        alphaValue = 255 - alphaValue;

        noStroke();

        fill(colorR, colorG, colorB, random(alphaValue)); 
        triangle(x, y, x + gridSize, y, x, y + gridSize);
        fill(colorR, colorG, colorB, random(alphaValue)); 
        triangle(x, y + gridSize, x + gridSize, y, x + gridSize, y + gridSize);
      }
    }  
  });
}
