setTimeout(() => {

document.getElementById(
"splash"
).style.display="none";

document.getElementById(
"loginPage"
).style.display="flex";

},2500);

function loginUser(){

let mobile=document.getElementById(
"mobileInput"
).value;

if(mobile.length<10){

alert("Enter valid mobile number");

return;

}

document.getElementById(
"loginPage"
).style.display="none";

document.getElementById(
"mainApp"
).style.display="block";

document.getElementById(
"customerMobile"
).innerHTML="+91 "+mobile;

}

function bookService(name,price){

document.getElementById(
"bookingPage"
).style.display="block";

document.getElementById(
"serviceName"
).innerHTML=name;

document.getElementById(
"servicePrice"
).innerHTML="₹"+price;

window.scrollTo({
top:800,
behavior:'smooth'
});

}

function completeWork(){

document.getElementById(
"ratingPage"
).style.display="block";

}

function cancelBooking(){

document.getElementById(
"bookingPage"
).style.display="none";

}

function toggleProfile(){

let panel=document.getElementById(
"profilePanel"
);

if(panel.style.right=="0px"){

panel.style.right="-100%";

}else{

panel.style.right="0";

}

}

function logoutUser(){

location.reload();

}
