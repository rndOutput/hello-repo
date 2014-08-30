var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.font = "38pt Arial";
context.fillStyle = "cornflowerblue";
context.stroke = "blue";

context.fillText("Hello Canvas World", canvas.width/2 - 250, canvas.height/2 + 15);
context.strokeText("Hello Canvas World", canvas.width/2 - 250, canvas.height/2 + 15);