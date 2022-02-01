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

  for (let i = 25; i < 475; i) {
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
  verticalLine.push(202, 206, 207, 211, 212, 216, 217, 221);
  for (let i = 1; i < 24; i++) {
    horLowLine.push(i);
  }
  for (let i = 28; i < 47; i++) {
    horLowLine.push(i);
  }

  for (let i = 78; i < 97; i++) {
    horHiLine.push(i);
  }

  for (let i = 476; i < 499; i++) {
    horHiLine.push(i);
  }
  const vertElements = verticalLine.map((id) => document.getElementById(id));
  vertElements.forEach((occurrence) => {
    occurrence.textContent = "\u007C";
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
