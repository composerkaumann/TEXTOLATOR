"use strict";

function generateDivs() {
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  const calc = document.createElement("div");
  calc.setAttribute("id", "calc");
  container.appendChild(calc);
  document.body.appendChild(container);
  for (let y = 0; y < 500; y++) {
    const cell = document.createElement("div");
    cell.setAttribute("id", `${y}`);
    cell.setAttribute("class", "cell");
    document.getElementById("calc").appendChild(cell);
  }
}
generateDivs();

function whiteSpace2Empty() {
  const emptyCell = document.getElementsByClassName("cell");
  for (let i = 0; i < emptyCell.length; i++) {
    emptyCell[i].textContent = "\u00A0";
  }
}
whiteSpace2Empty();

function makeBoxes() {
  const verticalLine = [];
  const horLowLine = [];
  const horHiLine = [];

  for (let i = 25; i < 475; ) {
    verticalLine.push(i);
    i = i + 24;
    verticalLine.push(i);
    i = i + 1;
  }

  for (let i = 52; i < 73; i++) {
    verticalLine.push(i);
    i = i + 1;
  }
  verticalLine.push(127, 131, 132, 136);

  const vertAdd = [202, 206, 207, 211, 212, 216, 218, 222];
  for (let i = 0; i < 4; i++) {
    verticalLine.push(...vertAdd.map((v) => v + 75 * i));
  }

  for (let i = 1; i < 24; i++) {
    horLowLine.push(i);
  }
  for (let i = 28; i < 47; i++) {
    horLowLine.push(i);
  }

  horLowLine.push(103, 104, 105, 108, 109, 110);
  const horLoAdd = [178, 179, 180, 183, 184, 185, 188, 189, 190, 194, 195, 196];
  for (let i = 0; i < 4; i++) {
    horLowLine.push(...horLoAdd.map((v) => v + 75 * i));
  }

  for (let i = 78; i < 97; i++) {
    horHiLine.push(i);
  }

  for (let i = 476; i < 499; i++) {
    horHiLine.push(i);
  }

  horHiLine.push(153, 154, 155, 158, 159, 160);
  const horHiAdd = [228, 229, 230, 233, 234, 235, 238, 239, 240, 244, 245, 246];
  for (let i = 0; i < 4; i++) {
    horHiLine.push(...horHiAdd.map((v) => v + 75 * i));
  }

  const vertElements = verticalLine.map((id) => document.getElementById(id));
  vertElements.forEach((occurrence) => {
    occurrence.textContent = "\u007C";
    occurrence.setAttribute("class", "vert");
  });

  const horLowElements = horLowLine.map((id) => document.getElementById(id));
  horLowElements.forEach((occurrence) => {
    occurrence.textContent = "\u005F";
  });

  const horHiElements = horHiLine.map((id) => document.getElementById(id));
  horHiElements.forEach((occurrence) => {
    occurrence.textContent = "\u203E";
  });
}

makeBoxes();
