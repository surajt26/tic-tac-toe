/* fill values for all nine blocks */
var topLeft = 0, topCenter = 0, topRight = 0, centerLeft = 0, centerCenter = 0,
centerRight = 0, bottomLeft = 0, bottomCenter = 0, bottomRight = 0;

/* chance value */
var chance = 0;

/* chance count */
var count = 0;

/* for top left block */
var topLeftImgCross = document.getElementById('top-left-img-cross');
var topLeftImgHoverCross = document.getElementById('top-left-img-cross-hover');
var topLeftImgCircle = document.getElementById('top-left-img-circle');
var topLeftImgHoverCircle = document.getElementById('top-left-img-circle-hover');

/* function for block over */
function hoverTopLeftOver() {
  if(topLeft == 0) {
    if(chance == 0) {
      topLeftImgHoverCross.style.display = "block";
    } else {
      topLeftImgHoverCircle.style.display = "block";
    }
    console.log("hover work");
  }
}

/* function for block out */
function hoverTopLeftOut() {
  if(topLeft == 0) {
    topLeftImgHoverCross.style.display = "none";
    topLeftImgHoverCircle.style.display  = "none";
    console.log("hover out work");
  }
}

/* fucntion for block fill */
function fillTopLeft() {
  if(topLeft == 0) {
    if(chance == 0) {
      topLeftImgCross.style.display = "block";
      topLeftImgHoverCross.style.display = "none";
      topLeft = 1;
    } else {
      topLeftImgCircle.style.display = "block";
      topLeftImgHoverCircle.style.display  = "none";
      topLeft = 2;
    }
    chance = 1;
    count++;
    console.log("fill work");
  }
}