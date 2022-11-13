console.log('working');

document.getElementsByClassName("yourAnswer")[0].innerHTML+=" "+localStorage.getItem("Answer0");

if(localStorage.getItem("Answer0")!="scientifically"){
    document.getElementsByClassName("yourAnswer")[0].style.backgroundColor="#FFD2D3";
}
else{
    document.getElementsByClassName("yourAnswer")[0].style.backgroundColor="#D3FBE8";
}

document.getElementsByClassName("yourAnswer")[1].innerHTML+=" "+localStorage.getItem("Answer1");

