function signin() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    for (var i = 0; i < 6; i++) {
        if (username === localStorage.getItem("firstname" + i) && password === localStorage.getItem("password" + i)) {

            location.href = 'project3.html';
        }
    }

}
// function getyourname()
// {
// var x=localstorage.getItem("firstname");
// console.log(x);

// }
