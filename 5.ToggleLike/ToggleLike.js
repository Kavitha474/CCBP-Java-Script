let puppyImageElement = document.getElementById("puppyImage");
let likeIconElement = document.getElementById("likeIcon");
let likeButtonElement = document.getElementById("likeButton");
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeButtonElement.style.backgroundColor = "#0967d2";
        likeButtonElement.style.color = "#ffffff";
        likeIconElement.style.color = "#0967d2";
        isImageLiked = true;
    } else {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeButtonElement.style.backgroundColor = "#cbd2d9";
        likeButtonElement.style.color = "#9aa5b1";
        likeIconElement.style.color = "#9aa5b1";
        isImageLiked = false;
    }
}