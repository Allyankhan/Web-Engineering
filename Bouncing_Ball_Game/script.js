const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let dx = 3;
let dy = -3; 
let ballRadius = 10;
let score = 0;

let paddleWidth = 100;
let paddleHeight = 10;
let paddleX = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", (e) => {
    if(e.key === "Right" || e.key === "ArrowRight") rightPressed = true;
    if(e.key === "Left" || e.key === "ArrowLeft") leftPressed = true;
});
document.addEventListener("keyup", (e) => {
    if(e.key === "Right" || e.key === "ArrowRight") rightPressed = false;
    if(e.key === "Left" || e.key === "ArrowLeft") leftPressed = false;
});

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText(`Score: ${score}`, 8, 20);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD"; // Give the ball some color
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawScore();

    
    if (ballX + dx > canvas.width - ballRadius || ballX + dx < ballRadius) {
        dx = -dx;
    }


    if (ballY + dy < ballRadius) {
        dy = -dy;
    } 
   
    else if (ballY + dy > canvas.height - ballRadius) {
        if (ballX > paddleX && ballX < paddleX + paddleWidth) {
            dy = -dy;
            score++;
            
            dx *= 1.05;
            dy *= 1.05;
        } else {
            alert("GAME OVER! Final Score: " + score);
            document.location.reload();
            return; 
        }
    }

    
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    ballX += dx;
    ballY += dy;
    requestAnimationFrame(draw);
}

draw();