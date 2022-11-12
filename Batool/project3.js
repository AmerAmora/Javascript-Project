
var images = ["images/one.jfif", "images/two.jpg", "images/three.jpg"];

var previous = document.querySelector(".previous");
var next = document.querySelector(".next");
var img = document.getElementById("english-image");
var slidernumber = 1;

next.onclick = function () {
    if(slidernumber==images.length)
    {
        slidernumber=1;
    }
    img.src = images[slidernumber];
    slidernumber++;

}

previous.onclick=function(){
    if(slidernumber<0)
    {
        slidernumber=images.length-1;
    }

    img.setAttribute("src",images[slidernumber]);
    slidernumber--;
}

img.onmouseover=function()
{
    img.src=images[0];
}

img.onmouseleave=function()
{
    img.src=images[1];
}