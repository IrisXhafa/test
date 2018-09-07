var photos = [{"name": "2.jpg"},{"name" : "download.png"},{"name":"3.jpg"},{"name" : "4.jpeg"},{"name":"download.png"},{"name": "download.png"},{"name":"2.jpg"},{"name":"download.png"},{"name" : "3.jpg"},{"name": "download.png"},{"name":"2.jpg"},{"name":"3.jpg"},{"name" : "download.png"},{"name": "4.jpeg"},{"name":"3.jpg"},{"name":"2.jpg"},{"name" : "download.png"},{"name": "2.jpg"},{"name":"3.jpg"},{"name":"3.jpg"},{"name" : "download.png"},{"name": "2.jpg"},{"name":"download.png"},{"name":"3.jpg"},{"name" : "2.jpg"},{"name": "4.jpeg"},{"name":"3.jpg"},{"name":"2.jpg"},{"name" : "4.jpeg"},{"name": "download.png"},{"name":"2.jpg"},{"name":"download.png"}];
var imagesloaded = 0;
window.onload = function () {
  checksize();
  for (var i = 0; i < 8; i++) {
    createimg(i);
  }
  imagesloaded += 8;
  $(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
    loadimg();
   }
});
}
window.onresize = function(){
  checksize();
}
function createimg(i){
  var name = photos[i].name;
  var img = document.createElement("img");
  img.src = name;
  img.className = "scrollimg"
  document.getElementById("scrollableside").appendChild(img);
}
function loadimg(){
  var left = photos.length - imagesloaded;
  if (imagesloaded<= photos.length){
    if(left>8){
      for (var i = 0; i < 8; i++) {
        createimg(i);
      }
    }
      else {
        for (var i = 0; i < photos.length; i++) {
          createimg(i);
    }
  }
  imagesloaded += i;

}
}

function checksize() {
  if (window.innerWidth >= 1200) {
    document.getElementById("fixedside").className = "fixedside col-lg-3";
    document.getElementById("scrollableside").className = "col-md-9 scrollableside"
  }else if (window.innerWidth <= 1200) {
    document.getElementById("fixedside").className = "fixedontop";
    document.getElementById("fixedimg").className = "imgontop";
    document.getElementById("scrollableside").className = "col-md-12"
  }
}
