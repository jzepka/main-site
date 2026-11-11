var images = ["img/img_home/0.png", "img/img_home/1.png", "img/img_home/2.png", "img/img_home/3.jpg", "img/img_home/4.jpg", "img/img_home/5.jpg", "img/img_home/6.jpg", "img/img_home/7.png", "img/img_home/8.png", "img/img_home/9.png", "img/img_home/10.png",
"img/img_home/11.png", "img/img_home/12.png", "img/img_home/13.png", "img/img_home/14.png", "img/img_home/15.png"];

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 16);
  event.target.src = images[imgState];
});
