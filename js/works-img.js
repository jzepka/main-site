var images = ["img/boilerroom/home/1.JPG", "img/boilerroom/home/2.JPG", "img/boilerroom/home/4.JPG", "img/boilerroom/home/5.JPG", "img/boilerroom/home/6.JPG", "img/boilerroom/home/7.jpg", "img/boilerroom/home/10.JPG", "img/boilerroom/home/11.JPG", "img/boilerroom/home/16.JPG", "img/boilerroom/home/17.JPG", "img/boilerroom/home/18.JPG",
"img/boilerroom/home/22.JPG", "img/boilerroom/home/23.JPG", "img/boilerroom/home/24.JPG"];

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 14);
  event.target.src = images[imgState];
});