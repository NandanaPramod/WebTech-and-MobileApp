function validateForm(){

let fname=document.getElementById("fname").value;
let lname=document.getElementById("lname").value;
let pass=document.getElementById("pass").value;
let email=document.getElementById("email").value;
let mobile=document.getElementById("mobile").value;
let addr=document.getElementById("addr").value;

let nameRegex=/^[A-Za-z]{6,}$/;
let emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let mobileRegex=/^[0-9]{10}$/;

if(!nameRegex.test(fname)){
alert("First Name must contain alphabets and minimum 6 characters");
return false;
}

if(pass.length<6){
alert("Password must be at least 6 characters");
return false;
}

if(!emailRegex.test(email)){
alert("Enter valid Email ID");
return false;
}

if(!mobileRegex.test(mobile)){
alert("Mobile must be 10 digits");
return false;
}

if(lname==""){
alert("Last Name should not be empty");
return false;
}

if(addr==""){
alert("Address should not be empty");
return false;
}

alert("Form Validated Successfully!");
return true;
}