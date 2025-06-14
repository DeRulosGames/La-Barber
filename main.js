const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#77c9d4";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#000";
ctx.font = "30px Arial";
ctx.fillText("Demo jugable de La Barber 💈", 200, 300);
