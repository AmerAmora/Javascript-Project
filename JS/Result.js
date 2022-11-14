 let result = localStorage.getItem("result");


if(result<50)
{
     document.getElementsByClassName("mainContainer")[0].style.backgroundColor = "#FC7676";
     document.getElementsByClassName("mainText")[0].innerHTML="Better Luck Next Time!";
     document.getElementsByClassName("secondaryText")[0].innerHTML="Unfortunately you weren't lucky this time";
     document.getElementsByClassName("mainImage")[0].src="fail.png";
     document.getElementsByClassName("endMain")[0].innerHTML="Better luck next time !"
document.getElementsByClassName("endSecondary")[0].innerHTML="You Might wanna :"
    
}
document.getElementsByClassName("resultsecondaryText")[0].innerHTML=result+"/100";
document.getElementById("correctanswers").innerHTML="You Answered " + totalcorrect +" out of 20 Questions correctly";
document.getElementById("wronganswers").innerHTML="You Answered " + totalwrong +" out of 20 Questions incorrectly";
document.getElementById("transposeLevel").innerHTML="10/10";
document.getElementById("transposeLevel").style.width=10/10*100+"%" ;
document.getElementById("adaptLevel").innerHTML="3/5"
document.getElementById("adaptLevel").style.width=3/5*100+"%" ;
document.getElementById("imitateLevel").innerHTML="3/5"
document.getElementById("imitateLevel").style.width=3/5*100+"%" ;
