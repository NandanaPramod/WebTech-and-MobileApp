let employees=[
{id:1,name:"Alex",role:"Developer",salary:30000},
{id:2,name:"Sara",role:"Designer",salary:25000},
{id:3,name:"John",role:"Writer",salary:20000}
];

function display(){
let output="";
employees.forEach(e=>{
output+=e.id+" "+e.name+" "+e.role+" ₹"+e.salary+"<br>";
});
document.getElementById("out").innerHTML=output;
}

function total(){
let sum=0;
employees.forEach(e=> sum+=e.salary);
document.getElementById("out").innerHTML="Total Salary: ₹"+sum;
}