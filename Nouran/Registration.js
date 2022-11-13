
function getFname() {
    var firstname = document.getElementById("firstname").value;
    console.log(firstname);
    localStorage.setItem("firstname", firstname);
}

function getLname() {
    var lastname = document.getElementById("lastname").value;
    console.log(lastname);
    localStorage.setItem("lastname", lastname);
}

function getEmail() {
    var gEmail = document.getElementById("email").value;
    console.log(gEmail);
    localStorage.setItem("Email", gEmail);
}

function getpassword() {
    var pass = document.getElementById("password").value;


    localStorage.setItem("password", pass);
}

function ConfirmPsss() {
    var Confirmpass = document.getElementById("confirmpassword").value;

    localStorage.setItem("Confirm-password", Confirmpass);
}


// localStorage.clear();

// var lastname = document.getElementById("lastname");
// var lastname = document.getElementById("lastname", lastname.value);

