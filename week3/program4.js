function convert(){

let num=document.getElementById("num").value;

if(!/^[0-9]{1,3}$/.test(num)){
alert("Enter number between 0-999");
return;
}

let ones=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
let teens=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
let tens=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];

num=parseInt(num);
let word="";

if(num>=100){
word+=ones[Math.floor(num/100)]+" Hundred ";
num%=100;
}

if(num>=10 && num<20){
word+=teens[num-10];
}
else{
word+=tens[Math.floor(num/10)]+" "+ones[num%10];
}

document.getElementById("res").innerHTML=word;
}