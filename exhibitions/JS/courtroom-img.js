var images = ["../../img/gardens/sandberg-2.png", "../../img/gardens/sandberg-1.png"];

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 2);
  event.target.src = images[imgState];
});