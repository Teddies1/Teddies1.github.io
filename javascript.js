var images = ["../images/street.jpg", "../images/avatar.jpg"]


var i = 0;
setInterval(function(){
    document.body.style.backgroundImage = "url(" + images[i] + ")";
    console.log("test");
    i = i + 1 % 2;
}, 5000);