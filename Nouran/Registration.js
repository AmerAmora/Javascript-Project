
// function getname() {
//     var firstname = document.getElementById("firstname").value;
//     console.log(firstname);
//     localStorage.setItem("firstname",firstname);
// }

// localStorage.clear();
var first=document.getElementById("firstname");
first.onchange=function(){
localStorage("firsname",first.value);
console.log(first)

}
// var lastname = document.getElementById("lastname");
// var lastname = document.getElementById("lastname", lastname.value);

