 let result = prompt("enter result",0);
 let totalcorrect=prompt("Enter the total of the correct answers",0);
 let totalwrong=prompt("Enter the total of the wrong answers",0);

if(result<50)
{
     document.getElementsByClassName("mainContainer")[0].style.backgroundColor = "#FC7676";
     document.getElementsByClassName("mainText")[0].innerHTML="Better Luck Next Time!";
     document.getElementsByClassName("secondaryText")[0].innerHTML="Unfortunately you weren't lucky this time";
     document.getElementsByClassName("mainImage")[0].src="Media/Failed.png";
    
}
document.getElementsByClassName("resultsecondaryText")[0].innerHTML=result+"/100";
document.getElementById("correctanswers").innerHTML="You Answered " + totalcorrect +" out of 20 Questions correctly";
document.getElementById("wronganswers").innerHTML="You Answered " + totalwrong +" out of 20 Questions incorrectly";
document.getElementById("transposeLevel").innerHTML="3/10";
document.getElementById("transposeLevel").style.width=3/10*100+"%" ;
document.getElementById("adaptLevel").innerHTML="3/5"
document.getElementById("adaptLevel").style.width=3/5*100+"%" ;
document.getElementById("imitateLevel").innerHTML="3/5"
document.getElementById("imitateLevel").style.width=3/5*100+"%" ;
document.getElementsByClassName("endMain")[0].innerHTML="Better luck next time !"
document.getElementsByClassName("endSecondary")[0].innerHTML="You Might wanna :"