
var i = 1;
function signup() {

    localStorage.setItem("i", i);
    var firstname = document.getElementById("firstname").value;
    console.log(firstname);
    localStorage.setItem("firstname" + i, firstname);



    var lastname = document.getElementById("lastname").value;
    console.log(lastname);
    localStorage.setItem("lastname" + i, lastname);



    var gEmail = document.getElementById("email").value;
    console.log(gEmail);
    localStorage.setItem("Email" + i, gEmail);



    var pass = document.getElementById("password").value;


    localStorage.setItem("password" + i, pass);




    var Confirmpass = document.getElementById("confirmpassword").value;

    localStorage.setItem("Confirm-password" + i, Confirmpass);
    i++;
}


// localStorage.clear();

// var lastname = document.getElementById("lastname");
// var lastname = document.getElementById("lastname", lastname.value);

