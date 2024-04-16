var images = ["../../img/overview/booklet2.jpg", "../../img/overview/booklet3.png"];

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 2);
  event.target.src = images[imgState];
});