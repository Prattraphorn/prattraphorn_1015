window.onload = function() {
	document.getElementById("start").onclick = startGame;
};

function startGame(){
   
    if(document.getElementById("numbox").value == ""){
        alert("Required number to start.");
        return false; 
    }

    alert("Ready"); 
    addBox(); 
    timeStart(); 
}

function timeStart(){
    var TIMER_TICK = 1000; 
    var timer = null;
    var min = 0.5; 
    var second = min * 60; 
    var x = document.getElementById('clock'); 

    timer = setInterval(timeCount, TIMER_TICK);
    
    function timeCount(){
        var allbox = document.querySelectorAll("#layer div"); 
 
        if(allbox.length <= 0) {
            alert("You Win!");
            clearInterval(timer); 
            timer = null; 
            clearScreen(); 
        }

       
        if(second <= 0) {
            alert("Game Over!");
            clearInterval(timer); 
            timer = null; 
            clearScreen(); 
        }
        
        x.innerHTML = second; 
        second--; 
    }
}

function addBox(){
  
    var numbox = document.getElementById("numbox").value; 
    var gameLayer = document.getElementById("layer"); 
    var colorDrop = document.getElementById("color").value; 
    
    for (var i = 0; i < numbox; i++){
        var tempbox = document.createElement("div"); 
        tempbox.className = "square "+ colorDrop ; 
        tempbox.id = "box" + i; 
        tempbox.style.left = Math.random() * (500 - 25) + "px"; 
        tempbox.style.top = Math.random() * (500 - 25) + "px"; 

        gameLayer.appendChild(tempbox); 
        bindBox(tempbox); 
    }
}

function bindBox(box){

    box.onclick = function(){
        box.parentNode.removeChild(box); 
    }
}

function  clearScreen(){
  
    var allbox = document.querySelectorAll("#layer div"); 
    clearInterval(timer);
   
    for (var i = 0; i < allbox.length; i++){
        allbox[i].parentNode.removeChild(allbox[i]); 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");
    const startButton = document.getElementById("start");
    const fieldset = document.querySelector("fieldset");
    const squares = document.querySelectorAll(".square");

    startButton.addEventListener("mouseover", function() {
        startButton.style.backgroundColor = "#e53935"; 
        startButton.style.transform = "scale(1.1)"; 
    });

    startButton.addEventListener("mouseout", function() {
        startButton.style.backgroundColor = "#fdd835"; 
        startButton.style.transform = "scale(1)"; 
    });

    startButton.addEventListener("click", function() {
        fieldset.style.transition = "0.5s ease";
        fieldset.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.7)"; 
    });

    function animateSquares() {
        const squares = document.querySelectorAll(".square");
        squares.forEach(square => {
            square.style.transition = "transform 0.3s, background-color 0.3s";
            square.addEventListener("mouseover", function() {
                square.style.transform = "rotate(45deg)"; 
                square.style.backgroundColor = "#ffffff"; 
            });
            square.addEventListener("mouseout", function() {
                square.style.transform = "rotate(0deg)"; 
                square.style.backgroundColor = ""; 
            });
        });
    }

    document.getElementById("start").addEventListener("click", function() {
        setTimeout(animateSquares, 500); 
    });
});
