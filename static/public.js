window.onload = function(e){
	document.querySelector(".app").style.backgroundColor = localStorage.getItem("background-color");
}


document.querySelector("[option='dark']").addEventListener("click",(e)=>{
	localStorage.setItem("background-color","#222");
	window.open("./main.html",target="_self");
});
document.querySelector("[option='light']").addEventListener("click",(e)=>{
	localStorage.setItem("background-color","#FFF");
	window.open("./main.html",target="_self");
});



// document.querySelector(".tool1").addEventListener("mouseover",(e)=>{
// 	document.querySelector(".font").style.display = 'block';
// });
// document.querySelector(".tool1").addEventListener("mouseout",(e)=>{
// 	document.querySelector(".font").style.display = "none";
// });
document.querySelector(".tool2").addEventListener("mouseover",(e)=>{
	document.querySelector(".theme").style.display = 'block';
});
document.querySelector(".tool2").addEventListener("mouseout",(e)=>{
	document.querySelector(".theme").style.display = "none";
});