//settings

//size
let gridSize = 20;
let gridWidth = 60;
let gridHeight = 60;
let overlap = 0;

//colour
let colorR = 0;
let colorG = 0;
let colorB = 0;

//random
let maxRandom = 50;

/*
modes are:
- triangles = T
- rectangles = R
- pixels = P
- dots = D
*/
let mode = 'T';

//global vars
let x = 0;
let y = 0;
let canvasWidth = 0;
let canvasHeight = 0;
let numberOfPixels = 0;
let gridWidthLoop = 0;
let gridHeightLoop = 0;

function setup() {

  canvasWidth = gridSize * gridWidth;
  canvasHeight = gridSize * gridHeight;
  numberOfPixels = canvasWidth * canvasHeight;

  createCanvas(canvasWidth, canvasHeight);

  background(200);

  let pxDensity = pixelDensity();

  console.log(pxDensity)

  loadImage('../img/luc-van-soest.jpg', img => {

    for (let x = 1; x < canvasWidth; x +=  gridSize) {

      for (let y = 0; y < canvasHeight; y +=  gridSize) {

        let currentPixel = img.get(x, y)

        let alphaValue = brightness(currentPixel);
        
        colorR = red(currentPixel);
        colorG = green(currentPixel);
        colorB = blue(currentPixel);

        //console.log(x, y);

        if (alphaValue <= maxRandom)
        {
          alphaValue = maxRandom;
        }
        
        alphaValue = 255 - alphaValue;

        noStroke();

        let xPos = x;
        let yPos = y;
        let size = gridSize;

        fill(colorR, colorG, colorB, random(alphaValue)); 
        triangle(xPos, yPos, xPos + size, yPos, xPos, yPos + size);
        fill(colorR, colorG, colorB, random(alphaValue)); 
        triangle(xPos, yPos + size, xPos + size, yPos, xPos + size, yPos + size);
      }
    }  
  });
}
