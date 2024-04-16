var images = ["img/boilerroom/home/1.jpg", "img/boilerroom/home/2.jpg", "img/boilerroom/home/4.jpg", "img/boilerroom/home/5.jpg", "img/boilerroom/home/6.jpg", "img/boilerroom/home/7.jpg", "img/boilerroom/home/10.jpg", "img/boilerroom/home/11.jpg", "img/boilerroom/home/16.jpg", "img/boilerroom/home/17.jpg", "img/boilerroom/home/18.jpg",
"img/boilerroom/home/22.jpg", "img/boilerroom/home/23.jpg", "img/boilerroom/home/24.jpg"];

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 14);
  event.target.src = images[imgState];
});
