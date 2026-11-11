var images = ["img/img_home/home/0.png", "img/img_home/home/1.png", "img/img_home/home/2.png", "img/img_home/home/3.jpg", "img/img_home/home/4.jpg", "img/img_home/home/5.jpg", "img/img_home/home/6.jpg", "img/img_home/home/7.png", "img/img_home/home/8.png", "img/img_home/home/9.png", "img/img_home/home/10.png",
"img/img_home/home/11.png", "img/img_home/home/12.png", "img/img_home/home/13.png", "img/img_home/home/14.png", "img/img_home/home/15.png"];

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 16);
  event.target.src = images[imgState];
});
