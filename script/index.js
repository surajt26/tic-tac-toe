var topLeft = 0, topCenter = 0, topRight = 0, centerLeft = 0, centerCenter = 0,
centerRight = 0, bottomLeft = 0, bottomCenter = 0, bottomRight = 0;

var chance = 0;

var topLeftImgHoverCircle = document.getElementById('top-left-img-circle-hover');
var topLeftImgHoverCross = document.getElementById('top-left-img-cross-hover');

function hoverTopLeftOver() {
  if(topLeft == 0) {
    if(chance == 0) {
      topLeftImgHoverCross.style.display = "block";
    } else {
      topLeftImgHoverCircle.style.display = "block";
    }
  }
}

function hoverTopLeftOut() {
  topLeftImgHoverCross.style.display = "none";
  topLeftImgHoverCircle.style.display  = "none";
}