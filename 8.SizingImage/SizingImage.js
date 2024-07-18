let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

let originalImageWidth = 200;
let imageMaxWidth = 300;
let imageMinWidth = 100;
let maxWidthWarningMessage = "Too big. Decrease the size of the Image.";
let minWidthWarningMessage = "Can't Visible. Increase the size of the Image.";
imageElement.style.width = originalImageWidth + "px";  
imageWidthElement.textContent = originalImageWidth + "px"; 


function onDecrement() {
  if (originalImageWidth <= imageMinWidth) {
    warningMessageElement.textContent = minWidthWarningMessage;
  }
  else {
    originalImageWidth = originalImageWidth - 5;
    let updatedImageWidth = originalImageWidth + "px";
    
    warningMessageElement.textContent = "";
    imageElement.style.width = updatedImageWidth;
    imageWidthElement.textContent = updatedImageWidth;
  }
}

function onIncrement() {
  if (originalImageWidth >= imageMaxWidth) {
    warningMessageElement.textContent = maxWidthWarningMessage;
  }
  else {
    originalImageWidth = originalImageWidth + 5;
    let updatedImageWidth = originalImageWidth + "px";
    
    warningMessageElement.textContent = "";
    imageElement.style.width = updatedImageWidth;
    imageWidthElement.textContent = updatedImageWidth;
  }
}