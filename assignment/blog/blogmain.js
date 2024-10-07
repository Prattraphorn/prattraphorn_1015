window.onload = pageload1 ;

var post_order =1 ;

function pageload1(){
    alert("Wellcome to the Forum");
    let welcome = document.getElementById("top");
    welcome.innerHTML = "Welcome to the Forum";
    console.log(welcome);
}

function postFunction(){
var post1 = document.getElementById("topic");
var post2 = document.getElementById("reply1");
var post3 = document.getElementById("reply2");

let msg = document.getElementById("message").value;
 
 if (post_order == 1) {
    post1 =  document.getElementById("topic").innerHTML =msg;
    document.getElementById("message").innerHTML = "";
 }
 else if (post_order ==2){
    post2 =  document.getElementById("reply1").innerHTML =msg;
    document.getElementById("message").innerHTML = "";
 }else if (post_order ==3){
    post3 =  document.getElementById("reply2").innerHTML =msg;
    document.getElementById("message").innerHTML = "";
 }
post_order ++;
document.getElementById("message").value = "";

}

function clearFunction(){
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    post_order = 1;
}


document.addEventListener("DOMContentLoaded", function() {
    const topHeader = document.getElementById("top");
    const topicDiv = document.getElementById("topic");
    const reply1Div = document.getElementById("reply1");
    const reply2Div = document.getElementById("reply2");
    const messageArea = document.getElementById("message");
    const buttons = document.querySelectorAll("button");
 
    topHeader.textContent = "Welcome to My Blog!";
    topHeader.style.transition = "color 1s ease";
    topHeader.style.color = "#fdd835"; 
 
    setTimeout(() => {
        topHeader.style.color = "#e53935";
    }, 2000);
 
    messageArea.addEventListener("focus", function() {
        messageArea.style.transition = "box-shadow 0.5s ease";
        messageArea.style.boxShadow = "0 0 10px #e53935"; 
    });
 
    messageArea.addEventListener("blur", function() {
        messageArea.style.boxShadow = "none"; 
    });
 
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.transform = "scale(1.1)"; 
        });
 
        button.addEventListener("mouseout", function() {
            button.style.transform = "scale(1)"; 
        });
    });
 
    let clickCount = 0;
 
    document.querySelector("button[onclick='postFunction()']").addEventListener("click", function() {
        clickCount++; 
 
        if (clickCount === 1) {
            applyEffect(topicDiv); 
        } else if (clickCount === 2) {
            applyEffect(reply1Div); 
        } else if (clickCount === 3) {
            applyEffect(reply2Div); 
            clickCount = 0; 
        }
    });
 
    function applyEffect(element) {
        element.style.transition = "background-color 0.5s, transform 0.5s";
        element.style.backgroundColor = "#e53935"; 
        element.style.transform = "scale(1.05)"; 
 
        setTimeout(() => {
            element.style.backgroundColor = "#333"; 
            element.style.transform = "scale(1)";
        }, 1000);
    }

    document.querySelector("button[onclick='clearFunction()']").addEventListener("click", function() {
        reply1Div.style.transition = "opacity 0.5s ease";
        reply2Div.style.transition = "opacity 0.5s ease";
        reply1Div.style.opacity = "0"; 
        reply2Div.style.opacity = "0";
        setTimeout(() => {
            reply1Div.style.opacity = "1"; 
            reply2Div.style.opacity = "1";
        }, 1000);
    });
 });
 