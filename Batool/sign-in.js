function signin()
{

    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if (username === "Amer" && password === 'Amer'){
       
        location.href = 'project3.html';
    } else{
        alert('Wrong username or password');
        return true;
    }

}

function getyourname()
{
var x=localstorage.getItem("firstname");
console.log(x);

}