var images = ["../../img/overview/flyer2.jpg", "../../img/overview/flyer1.jpg"];

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 2);
  event.target.src = images[imgState];
});