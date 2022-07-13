// // Global Constants
// let p5Canvas, 
//     container, 
//     ppContext, 
//     postProcessLayer,
//     novaMono
// ;

// // Dimension references
// let xCenter, yCenter;
// const fieldSize = 1024;
// const defaultStrokeWeight = 0.25;

// // Contains any spirograph shapes for animation
// const spirographs = [];

// // line Style Types
// const DASHED = [2, 4];
// const SOLID = [0];

// // Chromatic Aberration Properties
// var chromaticAberrationPhase;
// var chromaticAberrationStrength;

// function preload() {
//   novaMono = loadFont('public/fonts/NovaMono-Regular.ttf');
// }

// function setup() {

//   createCanvas(fieldSize, fieldSize);
//   angleMode(DEGREES);
//   ellipseMode(RADIUS);
//   strokeWeight(defaultStrokeWeight);

//   container = document.getElementsByTagName("main")[0];
//   p5Canvas = document.getElementById("defaultCanvas0"); // Automatically assigned by P5js
//   postProcessLayer = document.getElementById("post-processor");
//   ppContext = postProcessLayer.getContext("2d");
//   ppContext.antiAlias = true;

//   drawingContext.powerPreference = "high-performance";

//   chromaticAberrationPhase = 0;
//   chromaticAberrationStrength = 3;

//   xCenter = width / 2;
//   yCenter = height / 2;

//   // Add our post-processing canvas
//   postProcessLayer.width = width;
//   postProcessLayer.height = height;

//   noFill();
//   stroke(255);
//   strokeWeight(3);
// }

// function draw() {

//   push();
//   fill(255);
//   rect(36, 100, 51, height / 2, 50);
//   noStroke();
//   rect(65, 98, 51, 56);
//   textFont(novaMono);
//   textSize(70);
//   textAlign(CENTER, CENTER);
//   fill(255);
//   square(350, 98, 56, 50);
//   fill(0);
//   rect(100, 98, 275, 56);
//   fill(255);
//   text('MUSSCo',240, 115);
//   pop();

//   // Always keep the line below
//   applyPostProcess();
// }
// /* --------------------------------------------------------------------------------------------------------------------------- */