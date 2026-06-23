document.getElementById("startBtn").onclick = function(){

document.getElementById("homeScreen").style.display = "none";

document.getElementById("timer").style.display = "block";

};

document.getElementById("breakBtn").onclick = function(){

document.getElementById("timer").style.display = "none";

document.getElementById("breakScreen").style.display = "block";

};
document.getElementById("completeBtn").onclick = function(){

document.getElementById("breakScreen").style.display = "none";

document.getElementById("completeScreen").style.display = "block";

};