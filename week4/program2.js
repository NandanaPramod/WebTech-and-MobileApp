function loadServices(){

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){

if(this.readyState == 4 && this.status == 200){

let services = this.responseText.split("\n");
let output = "";

services.forEach(s => {
if(s.trim() !== ""){
output += `<div class="service">${s}</div>`;
}
});

document.getElementById("demo").innerHTML = output;

}

};

xhttp.open("GET", "services.txt", true);
xhttp.send();

}