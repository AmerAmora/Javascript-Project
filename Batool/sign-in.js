function signin() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    var check = false;
    for (var i = 0; i < 6; i++) {
        if (username === localStorage.getItem("firstname" + i) && password === localStorage.getItem("password" + i)) {
            if (localStorage.getItem("result" + username) > 0) { location.href = "../Result.html"; check = true; break; }
            else {
                localStorage.setItem("loggeduser", username);
                check = true;
                location.href = 'project3.html';
                console.log(check);
                break;
            }
        }


    }
    if (check == false) { alert("Wrong username or pw"); }

}
// function getyourname()
// {
// var x=localstorage.getItem("firstname");
// console.log(x);

// }

var finish = localStorage.getItem("finish");
if (finish.lenght > 1) {
    location.href = "../Ahmads/html quistion.html"
}