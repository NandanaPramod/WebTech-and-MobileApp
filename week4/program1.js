function loadFreelancers(){

fetch("freelancers.json")
.then(res => res.json())
.then(data => {

let output = "<div class='grid'>";

data.freelancers.forEach(f => {

output += `
<div class="freelancer">
<h3>${f.name}</h3>
<p class="badge">${f.skill}</p>
<p>Starting at ₹${f.rate}</p>
</div>
`;

});

output += "</div>";

document.getElementById("output").innerHTML = output;

});

}