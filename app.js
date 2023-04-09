"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const btnMinus = document.getElementById("decrease");
const btnPlus = document.getElementById("increase");
const btnClear = document.getElementById("clear");
const inputSize = document.getElementById("size");
const inputColor = document.getElementById("color");

let size = 10;
let isPressed = false;
let color = "black";
let x;
let y;

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
};

// x1, y1 where the line will start and x2, y2 where the line will end
const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

// ADD EVENTS LISTENERS
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

//

btnMinus.addEventListener("click", () => {
  if (size === 0) size = 0;
  if (size != 0) {
    inputSize.textContent = size - 1;
    size--;
  }
});

btnPlus.addEventListener("click", () => {
  if (size === 30) size = 30;
  if (size != 30) {
    inputSize.textContent = size + 1;
    size++;
  }
});

inputColor.addEventListener("change", () => {
  color = inputColor.value;
});

btnClear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
