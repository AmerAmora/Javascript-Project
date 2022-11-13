var text1;
var selected;
var result=0;
var ImitateCounter=0;
// Questions will be asked
const Questions = [{
    id: 0,
    q: "We studied the question ______.",
    a: [{ text: "scientific", isCorrect: false },
        { text: "science", isCorrect: false },
        { text: "scientist", isCorrect: false },
        { text: "scientifically", isCorrect: true }
    ]

},
{
    id: 1,
    q: "______ the war, most Italians were farmers.",
    a: [{ text: "From", isCorrect: false },
        { text: "While", isCorrect: false },
        { text: "Before", isCorrect: true },
        { text: "When", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Where were you last night?",
    a: [{ text: "I were at home.", isCorrect: false },
        { text: "I am been to the movies.", isCorrect: false },
        { text: "I was to an Indian restaurant.", isCorrect: false },
        { text: "I was at the museum with Nouran.", isCorrect: true }
    ]

},
{
    id: 3,
    q: "Amer has always ______ things very quickly and efficiently.",
    a: [{ text: "does", isCorrect: false },
        { text: "done", isCorrect: true },
        { text: "did", isCorrect: false},
        { text: "do", isCorrect: false }
    ]

},

{
    id: 4,
    q: "Where are you going?",
    a: [{ text: "I am going to my mother's house.", isCorrect: true },
        { text: "I going at work.", isCorrect: false },
        { text: "I go to the store.", isCorrect: false },
        { text: "I am going to Ahmads house.", isCorrect: false }
    ]

}


]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
// var result = document.getElementsByClassName("result");
// result[0].innerText = "";


// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;
var i=0;

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgreen";
    op2.style.backgroundColor = "red";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "red";
    selected = op1.value;
    text1=Questions[id].a[0].text;

})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "red";
    op2.style.backgroundColor = "lightgreen";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "red";
    selected = op2.value;
    text1=Questions[id].a[1].text;
    

})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "red";
    op2.style.backgroundColor = "red";
    op3.style.backgroundColor = "lightgreen";
    op4.style.backgroundColor = "red";
    selected = op3.value;
    text1=Questions[id].a[2].text;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "red";
    op2.style.backgroundColor = "red";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "lightgreen";
    selected = op4.value;
    text1=Questions[id].a[3].text;
})

// Grabbing the evaluate button
// const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
// evaluate[0].addEventListener("click", () => {
//     if (selected == "true") {
//         result[0].innerHTML = "True";
//         result[0].style.color = "green";
//     } else {
//         result[0].innerHTML = "False";
//         result[0].style.color = "red";
//     }
// })
}

if (start) {
iterate("0");
}
var arr;

// Next button and method
const next = document.getElementsByClassName('next')[0];
const finish=document.getElementById("finish");
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id <5) {
    if(id+1==4){
        document.getElementById("finish").style.display="block";
        document.getElementById("next").style.display="none";}
        localStorage.setItem("Answer"+id,text1);
        //  console.log(localStorage.getItem("Answer"+id));
        if(selected=="true"){ result = result+4; ImitateCounter =ImitateCounter+1;} console.log(result);console.log(ImitateCounter)  ;
        console.log(selected);
        selected="";
        id++;
        iterate(id);
}
localStorage.setItem("ImitateCounter",ImitateCounter);
localStorage.setItem("result",result);
})
finish.addEventListener("click", () => {
    if(selected=="true"){ result = result+4; ImitateCounter =ImitateCounter+1;} console.log(result);console.log(ImitateCounter)  ;

    localStorage.setItem("ImitateCounter",ImitateCounter);
    localStorage.setItem("result",result);

})

//guide Section
let guide = document.querySelector("#guide");

let continueBtn = document.querySelector("#continue");
let panel =document.querySelector(".panel");




//what happen when 'Continue' Button Will Click
continueBtn.addEventListener("click", () => {
    panel.style.display = "block";
    guide.style.display = "none";})