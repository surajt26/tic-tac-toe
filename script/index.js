/******************** name popup start ********************/
 var errorCount = 0;

var nameContainer = document.getElementById('name-container');
var firstTitle = document.getElementById('first-title-name');
var secondTitle = document.getElementById('second-title-name');

function start() {
  var firstName = document.getElementById('first-name').value.trim();
  var secondName = document.getElementById('second-name').value.trim();
  console.log(firstName.length);
  if(firstName.length > 0 & secondName.length > 0) {
    firstTitle.innerHTML = firstName;
    secondTitle.innerHTML = secondName;
    nameContainer.style.display = "none";
  }
  else {
    if(errorCount == 0) {
      errorCount++;
      document.getElementById('error-message-first').style.display = "block";
    }
    else if (errorCount == 1) {
      errorCount++;
      document.getElementById('error-message-first').style.display = "none";
      document.getElementById('error-message-second').style.display = "block";
    }
    else if (errorCount == 2) {
      errorCount++;
      document.getElementById('error-message-second').style.display = "none";
      document.getElementById('error-message-third').style.display = "block";
    }
    else if (errorCount == 3) {
      errorCount++;
      document.getElementById('error-message-third').style.display = "none";
      document.getElementById('error-message-fourth').style.display = "block";
    }
    else if (errorCount == 4) {
      document.getElementById('bye-bye-container').style.display = "block";
    }
  }
}

function skip() {
  document.getElementById('error-message-first').style.display = "none";
  document.getElementById('error-message-second').style.display = "none";
  document.getElementById('error-message-third').style.display = "none";
  document.getElementById('error-message-fourth').style.display = "none";
  document.getElementById('error-message-fifth').style.display = "none";
}

function checkInput() {
  errorMessage.style.display = "none";
}
/******************** name popup end ********************/

/******************** tic-tac-toe start ********************/
/* fill values for all nine blocks */
var topLeft = 0, topCenter = 0, topRight = 0, centerLeft = 0, center = 0,
centerRight = 0, bottomLeft = 0, bottomCenter = 0, bottomRight = 0;

/* chance count */
var count = 0;

/* for top left block */
var topLeftImgCross = document.getElementById('top-left-img-cross');
var topLeftImgHoverCross = document.getElementById('top-left-img-cross-hover');
var topLeftImgCircle = document.getElementById('top-left-img-circle');
var topLeftImgHoverCircle = document.getElementById('top-left-img-circle-hover');

/* function for top left block over */
function hoverTopLeftOver() {
  if(topLeft == 0) {
    if(count%2 == 0) {
      topLeftImgHoverCross.style.display = "block";
    } else {
      topLeftImgHoverCircle.style.display = "block";
    }
    console.log("hover work");
  }
}

/* function for top left block out */
function hoverTopLeftOut() {
  if(topLeft == 0) {
    topLeftImgHoverCross.style.display = "none";
    topLeftImgHoverCircle.style.display  = "none";
    console.log("hover out work");
  }
}

/* fucntion for top left block fill */
function fillTopLeft() {
  if(topLeft == 0) {
    if(count%2 == 0) {
      topLeftImgCross.style.display = "block";
      topLeftImgHoverCross.style.display = "none";
      topLeft = 1;
    } else {
      topLeftImgCircle.style.display = "block";
      topLeftImgHoverCircle.style.display  = "none";
      topLeft = 2;
    }
    count++;
    combinationCheck();
    console.log("fill work");
  }
}

/* for top center block */
var topCenterImgCross = document.getElementById('top-center-img-cross');
var topCenterImgHoverCross = document.getElementById('top-center-img-cross-hover');
var topCenterImgCircle = document.getElementById('top-center-img-circle');
var topCenterImgHoverCircle = document.getElementById('top-center-img-circle-hover');

/* function for top center block over */
function hoverTopCenterOver() {
  if(topCenter == 0) {
    if(count%2 == 0) {
      topCenterImgHoverCross.style.display = "block";
    } else {
      topCenterImgHoverCircle.style.display = "block";
    }
    console.log("hover work");
  }
}

/* function for top center block out */
function hoverTopCenterOut() {
  if(topCenter == 0) {
    topCenterImgHoverCross.style.display = "none";
    topCenterImgHoverCircle.style.display  = "none";
    console.log("hover out work");
  }
}

/* fucntion for top center block fill */
function fillTopCenter() {
  if(topCenter == 0) {
    if(count%2 == 0) {
      topCenterImgCross.style.display = "block";
      topCenterImgHoverCross.style.display = "none";
      topCenter = 1;
    } else {
      topCenterImgCircle.style.display = "block";
      topCenterImgHoverCircle.style.display  = "none";
      topCenter = 2;
    }
    count++;
    combinationCheck();
    console.log("fill work");
  }
}

/* for top right block */
var topRightImgCross = document.getElementById('top-right-img-cross');
var topRightImgHoverCross = document.getElementById('top-right-img-cross-hover');
var topRightImgCircle = document.getElementById('top-right-img-circle');
var topRightImgHoverCircle = document.getElementById('top-right-img-circle-hover');

/* function for top right block over */
function hoverTopRightOver() {
  if(topRight == 0) {
    if(count%2 == 0) {
      topRightImgHoverCross.style.display = "block";
    } else {
      topRightImgHoverCircle.style.display = "block";
    }
    console.log("hover work");
  }
}

/* function for top right block out */
function hoverTopRightOut() {
  if(topRight == 0) {
    topRightImgHoverCross.style.display = "none";
    topRightImgHoverCircle.style.display  = "none";
    console.log("hover out work");
  }
}

/* fucntion for top right block fill */
function fillTopRight() {
  if(topRight == 0) {
    if(count%2 == 0) {
      topRightImgCross.style.display = "block";
      topRightImgHoverCross.style.display = "none";
      topRight = 1;
    } else {
      topRightImgCircle.style.display = "block";
      topRightImgHoverCircle.style.display  = "none";
      topRight = 2;
    }
    count++;
    combinationCheck();
    console.log("fill work");
  }
}

/* for center left block */
var centerLeftImgCross = document.getElementById('center-left-img-cross');
var centerLeftImgHoverCross = document.getElementById('center-left-img-cross-hover');
var centerLeftImgCircle = document.getElementById('center-left-img-circle');
var centerLeftImgHoverCircle = document.getElementById('center-left-img-circle-hover');

/* function for center left block over */
function hoverCenterLeftOver() {
  if(centerLeft == 0) {
    if(count%2 == 0) {
      centerLeftImgHoverCross.style.display = "block";
    } else {
      centerLeftImgHoverCircle.style.display = "block";
    }
    console.log("hover work");
  }
}

/* function for center left block out */
function hoverCenterLeftOut() {
  if(centerLeft == 0) {
    centerLeftImgHoverCross.style.display = "none";
    centerLeftImgHoverCircle.style.display  = "none";
    console.log("hover out work");
  }
}

/* fucntion for center left block fill */
function fillCenterLeft() {
  if(centerLeft == 0) {
    if(count%2 == 0) {
      centerLeftImgCross.style.display = "block";
      centerLeftImgHoverCross.style.display = "none";
      centerLeft = 1;
    } else {
      centerLeftImgCircle.style.display = "block";
      centerLeftImgHoverCircle.style.display  = "none";
      centerLeft = 2;
    }
    count++;
    combinationCheck();
    console.log("fill work");
  }
}

/* for center block */
var centerImgCross = document.getElementById('center-img-cross');
var centerImgHoverCross = document.getElementById('center-img-cross-hover');
var centerImgCircle = document.getElementById('center-img-circle');
var centerImgHoverCircle = document.getElementById('center-img-circle-hover');

/* function for center block over */
function hoverCenterOver() {
  if(center == 0) {
    if(count%2 == 0) {
      centerImgHoverCross.style.display = "block";
    } else {
      centerImgHoverCircle.style.display = "block";
    }
    console.log("hover work");
  }
}

/* function for center block out */
function hoverCenterOut() {
  if(center == 0) {
    centerImgHoverCross.style.display = "none";
    centerImgHoverCircle.style.display  = "none";
    console.log("hover out work");
  }
}

/* fucntion for center block fill */
function fillCenter() {
  if(center == 0) {
    if(count%2 == 0) {
      centerImgCross.style.display = "block";
      centerImgHoverCross.style.display = "none";
      center = 1;
    } else {
      centerImgCircle.style.display = "block";
      centerImgHoverCircle.style.display  = "none";
      center = 2;
    }
    count++;
    combinationCheck();
    console.log("fill work");
  }
}

/* for center right block */
var centerRightImgCross = document.getElementById('center-right-img-cross');
var centerRightImgHoverCross = document.getElementById('center-right-img-cross-hover');
var centerRightImgCircle = document.getElementById('center-right-img-circle');
var centerRightImgHoverCircle = document.getElementById('center-right-img-circle-hover');

/* function for center right block over */
function hoverCenterRightOver() {
  if(centerRight == 0) {
    if(count%2 == 0) {
      centerRightImgHoverCross.style.display = "block";
    } else {
      centerRightImgHoverCircle.style.display = "block";
    }
    console.log("hover work");
  }
}

/* function for center right block out */
function hoverCenterRightOut() {
  if(centerRight == 0) {
    centerRightImgHoverCross.style.display = "none";
    centerRightImgHoverCircle.style.display  = "none";
    console.log("hover out work");
  }
}

/* fucntion for center right block fill */
function fillCenterRight() {
  if(centerRight == 0) {
    if(count%2 == 0) {
      centerRightImgCross.style.display = "block";
      centerRightImgHoverCross.style.display = "none";
      centerRight = 1;
    } else {
      centerRightImgCircle.style.display = "block";
      centerRightImgHoverCircle.style.display  = "none";
      centerRight = 2;
    }
    count++;
    combinationCheck();
    console.log("fill work");
  }
}

/* for bottom left block */
var bottomLeftImgCross = document.getElementById('bottom-left-img-cross');
var bottomLeftImgHoverCross = document.getElementById('bottom-left-img-cross-hover');
var bottomLeftImgCircle = document.getElementById('bottom-left-img-circle');
var bottomLeftImgHoverCircle = document.getElementById('bottom-left-img-circle-hover');

/* function for bottom left block over */
function hoverBottomLeftOver() {
  if(bottomLeft == 0) {
    if(count%2 == 0) {
      bottomLeftImgHoverCross.style.display = "block";
    } else {
      bottomLeftImgHoverCircle.style.display = "block";
    }
    console.log("hover work");
  }
}

/* function for bottom left block out */
function hoverBottomLeftOut() {
  if(bottomLeft == 0) {
    bottomLeftImgHoverCross.style.display = "none";
    bottomLeftImgHoverCircle.style.display  = "none";
    console.log("hover out work");
  }
}

/* fucntion for bottom left block fill */
function fillBottomLeft() {
  if(bottomLeft == 0) {
    if(count%2 == 0) {
      bottomLeftImgCross.style.display = "block";
      bottomLeftImgHoverCross.style.display = "none";
      bottomLeft = 1;
    } else {
      bottomLeftImgCircle.style.display = "block";
      bottomLeftImgHoverCircle.style.display  = "none";
      bottomLeft = 2;
    }
    count++;
    combinationCheck();
    console.log("fill work");
  }
}

/* for bottom center block */
var bottomCenterImgCross = document.getElementById('bottom-center-img-cross');
var bottomCenterImgHoverCross = document.getElementById('bottom-center-img-cross-hover');
var bottomCenterImgCircle = document.getElementById('bottom-center-img-circle');
var bottomCenterImgHoverCircle = document.getElementById('bottom-center-img-circle-hover');

/* function for bottom center block over */
function hoverBottomCenterOver() {
  if(bottomCenter == 0) {
    if(count%2 == 0) {
      bottomCenterImgHoverCross.style.display = "block";
    } else {
      bottomCenterImgHoverCircle.style.display = "block";
    }
    console.log("hover work");
  }
}

/* function for bottom center block out */
function hoverBottomCenterOut() {
  if(bottomCenter == 0) {
    bottomCenterImgHoverCross.style.display = "none";
    bottomCenterImgHoverCircle.style.display  = "none";
    console.log("hover out work");
  }
}

/* fucntion for bottom center block fill */
function fillBottomCenter() {
  if(bottomCenter == 0) {
    if(count%2 == 0) {
      bottomCenterImgCross.style.display = "block";
      bottomCenterImgHoverCross.style.display = "none";
      bottomCenter = 1;
    } else {
      bottomCenterImgCircle.style.display = "block";
      bottomCenterImgHoverCircle.style.display  = "none";
      bottomCenter = 2;
    }
    count++;
    combinationCheck();
    console.log("fill work");
  }
}

/* for bottom right block */
var bottomRightImgCross = document.getElementById('bottom-right-img-cross');
var bottomRightImgHoverCross = document.getElementById('bottom-right-img-cross-hover');
var bottomRightImgCircle = document.getElementById('bottom-right-img-circle');
var bottomRightImgHoverCircle = document.getElementById('bottom-right-img-circle-hover');

/* function for bottom right block over */
function hoverBottomRightOver() {
  if(bottomRight == 0) {
    if(count%2 == 0) {
      bottomRightImgHoverCross.style.display = "block";
    } else {
      bottomRightImgHoverCircle.style.display = "block";
    }
    console.log("hover work");
  }
}

/* function for bottom right block out */
function hoverBottomRightOut() {
  if(bottomRight == 0) {
    bottomRightImgHoverCross.style.display = "none";
    bottomRightImgHoverCircle.style.display  = "none";
    console.log("hover out work");
  }
}

/* fucntion for bottom right block fill */
function fillBottomRight() {
  if(bottomRight == 0) {
    if(count%2 == 0) {
      bottomRightImgCross.style.display = "block";
      bottomRightImgHoverCross.style.display = "none";
      bottomRight = 1;
    } else {
      bottomRightImgCircle.style.display = "block";
      bottomRightImgHoverCircle.style.display  = "none";
      bottomRight = 2;
    }
    count++;
    combinationCheck();
    console.log("fill work");
  }
}

/* function for combination */
function combinationCheck() {
  if(count > 4) {
    if((topLeft == 1 & topCenter == 1 & topRight == 1) ||
    (centerLeft == 1 & center == 1 & centerRight == 1) ||
    (bottomLeft == 1 & bottomCenter == 1 & bottomRight == 1) ||
    (topLeft == 1 & centerLeft == 1 & bottomLeft == 1) ||
    (topCenter == 1 & center == 1 & bottomCenter == 1) ||
    (topRight == 1 & centerRight == 1 & bottomRight == 1) ||
    (topLeft == 1 & center == 1 & bottomRight == 1) ||
    (topRight == 1 & center == 1 & bottomLeft == 1)) {
      resetAll();
      alert("Winer is Cross !!");
    } else if ((topLeft == 2 & topCenter == 2 & topRight == 2) ||
    (centerLeft == 2 & center == 2 & centerRight == 2) ||
    (bottomLeft == 2 & bottomCenter == 2 & bottomRight == 2) ||
    (topLeft == 2 & centerLeft == 2 & bottomLeft == 2) ||
    (topCenter == 2 & center == 2 & bottomCenter == 2) ||
    (topRight == 2 & centerRight == 2 & bottomRight == 2) ||
    (topLeft == 2 & center == 2 & bottomRight == 2) ||
    (topRight == 2 & center == 2 & bottomLeft == 2)) {
      resetAll();
      alert("Winer is Circle !!");
    } else if (count == 9) {
      resetAll();
      alert("Match Draw");
    }
  }
}

/* function for reset all */
function resetAll() {
  topLeft = 0; topCenter = 0; topRight = 0; centerLeft = 0; center = 0;
  centerRight = 0; bottomLeft = 0; bottomCenter = 0; bottomRight = 0;
  count = 0;
  topLeftImgCross.style.display = "none";
  topLeftImgHoverCross.style.display = "none";
  topLeftImgCircle.style.display = "none";
  topLeftImgHoverCircle.style.display = "none";

  topCenterImgCross.style.display = "none";
  topCenterImgCircle.style.display = "none";
  topRightImgCross.style.display = "none";
  topRightImgCircle.style.display = "none";
  centerLeftImgCross.style.display = "none";
  centerLeftImgCircle.style.display = "none";
  centerImgCross.style.display = "none";
  centerImgCircle.style.display = "none";
  centerRightImgCross.style.display = "none";
  centerRightImgCircle.style.display = "none";
  bottomLeftImgCross.style.display = "none";
  bottomLeftImgCircle.style.display = "none";
  bottomCenterImgCross.style.display = "none";
  bottomCenterImgCircle.style.display = "none";
  bottomRightImgCross.style.display = "none";
  bottomRightImgCircle.style.display = "none";
}
/******************** tic-tac-toe end ********************/