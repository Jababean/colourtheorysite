function move() {
 var y = document.getElementById("body-text");
 var x = y.getElementsByTagName("div");
 for (var i = 0; i < x.length; i++) {
 x[i].style.marginTop = "0px";
 x[i].style.opacity = "1";
 }
}