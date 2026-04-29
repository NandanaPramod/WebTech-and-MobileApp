function mouseOver(){
let box=document.getElementById("box");
box.style.background = "#091235";
box.style.color = "white";
box.innerHTML="Mouse Over";
}

function mouseOut(){
let box=document.getElementById("box");
box.style.background="#ccc";
box.innerHTML="Hover Me";
}

function mouseClick(){
alert("Mouse Click Event Triggered");
}