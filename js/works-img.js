var images = ["img/0.png", "img/1.png", "img/2.png", "img/4.png", "img/5.png"];

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 14);
  event.target.src = images[imgState];
});
