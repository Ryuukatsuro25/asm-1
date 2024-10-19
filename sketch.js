// Variable to store the canvas
let canvas;
let canvasHeight;
let canvasWidth;

// Update with the correct URL from CodeSandbox for the video
const URL_VIDEO = "/Img/video.webm";

// Update with the correct URL from CodeSandbox for the image
const URL_IMAGEN_FILTRO = "/  Img/Imagen.png";

let videoConejo;
let imagenFiltro;
let filtro;

function preload() {
  // Load video and image from the correct URLs
  videoConejo = createVideo(URL_VIDEO);
  imagenFiltro = loadImage(URL_IMAGEN_FILTRO);
}

function setup() {
  canvasHeight = windowHeight - 155;
  canvasWidth = windowWidth;
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvas-container");

  // Hide the video element and loop it
  videoConejo.hide();
  videoConejo.loop();

  // Initial value for the filter (no filter)
  filtro = 8;
}

function draw() {
  // Display the video frame on the canvas
  image(videoConejo, 0, 0, 640, 360);

  // Apply filter based on the value of filtro
  switch (filtro) {
    case 0:
      filter(THRESHOLD);
      break;
    case 1:
      filter(GRAY);
      break;
    case 2:
      filter(OPAQUE);
      break;
    case 3:
      filter(INVERT);
      break;
    case 4:
      filter(POSTERIZE, 3);
      break;
    case 5:
      filter(DILATE);
      break;
    case 6:
      filter(BLUR, 3);
      break;
    case 7:
      filter(ERODE, 3);
      break;
    default:
      break;
  }

  // Display the filter icon (image) on the canvas
  image(imagenFiltro, 10, 10, 32, 32);
}

// Change filter when mouse is clicked
function mouseClicked() {
  // Check if the click happened on the filter icon, change the filter
  if (mouseX > 10 && mouseX < 42 && mouseY > 10 && mouseY < 42) {
    filtro = Math.round(random(0, 7)); // Random filter
  }
}
