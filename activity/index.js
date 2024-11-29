let dimX = 24;
let dimY = 24;

let pacman = { x: 0, y: 0, hp: 3, label: "pacman" };
let superpower = false;

let ghostEaten = 0;

createBox();
plotter(pacman.x, pacman.y, pacman);
let ghosts = generateGhost();

//sets dimensions
function setBoxDim(height, length) {
  let box = [];
  for (let i = 0; i < height; i++) {
    box[i] = new Array(length);
  }
  return box;
}

//draws the box
function createBox() {
  const box = setBoxDim(dimX, dimY);

  const gamebox = document.getElementById("gameBox");
  for (let i = 0; i < box.length; i++) {
    let row = document.createElement("div");
    row.className = "row";
    gamebox.appendChild(row);
    for (let j = 0; j < box[i].length; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.id = `(${i})(${j})`;
      //   cell.innerHTML = `${j}`;
      row.appendChild(cell);

      // console.log(cell);
    }
  }
}

function randomizer(limit, starting = 0) {
  return Math.floor(Math.random() * (limit - starting) + starting);
}

//plots the ghosts and pacman into the box
function plotter(row, col, who) {
  let cell = document.getElementById(`(${row})(${col})`);
  //   console.log(who);
  if (who.label == "pacman") {
    if (superpower == true) {
      cell.innerHTML = `<span class="hp">${who.hp}HP</span><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 14 14"><g fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round"><path d="M12.215 3.786L7 7l5.215 3.214a6.125 6.125 0 1 1 0-6.428"/><path d="M5.5 4a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"/></g></svg>`;
      cell.classList.add("pac");
    } else {
      cell.innerHTML = `<span class="hp">${who.hp}HP</span><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 14 14"><g fill="none" stroke="#ffff00" stroke-linecap="round" stroke-linejoin="round"><path d="M12.215 3.786L7 7l5.215 3.214a6.125 6.125 0 1 1 0-6.428"/><path d="M5.5 4a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"/></g></svg>`;
      cell.classList.add("pac");
    }
  } else {
    cell.innerHTML = `<span class="hp">${who.hp}HP</span><?xml version="1.0" encoding="iso-8859-1"?>
                  <svg fill="${who.color}" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512" xml:space="preserve">
                  <g>
                      <g>
                          <path d="M262.468,0H251.85C153.818,0,72.902,79.089,72.902,177.126v324.407c0,4.026,2.884,7.684,6.511,9.431
                              c3.617,1.747,8.214,1.257,11.354-1.257l45.149-36.007l35.303,35.23c4.087,4.087,10.744,4.087,14.831,0l34.471-34.454
                              l34.462,34.454c4.087,4.087,10.713,4.087,14.8,0l34.456-34.454l34.454,34.454c4.087,4.087,10.709,4.087,14.796,0l34.454-34.454
                              l34.453,34.454c2.003,2.003,4.675,3.065,7.398,3.065c1.349,0,2.129-0.255,3.427-0.797c3.908-1.614,5.878-5.436,5.878-9.666
                              V177.126C439.098,79.089,360.499,0,262.468,0z M418.173,476.275l-23.411-23.991c-4.087-4.087-10.418-4.087-14.505,0
                              l-34.309,34.454l-34.381-34.454c-2.044-2.043-4.685-3.065-7.362-3.065c-2.677,0-5.336,1.022-7.38,3.065l-34.444,34.454
                              l-34.449-34.454c-4.087-4.087-10.705-4.087-14.792,0l-34.454,34.454l-34.452-34.454c-3.77-3.77-10.357-4.107-14.51-0.777
                              l-35.897,28.252V177.126c0-86.502,71.527-156.201,158.023-156.201h10.617c86.495,0,155.705,69.699,155.705,156.201V476.275z"/>
                      </g>
                  </g>
                  <g>
                      <g>
                          <path d="M194.383,156.262c-14.423,0-26.157,11.73-26.157,26.157c0,14.427,11.733,26.157,26.157,26.157
                              c14.421,0,26.156-11.73,26.156-26.157C220.539,167.992,208.804,156.262,194.383,156.262z M194.383,187.65
                              c-2.888,0-5.231-2.35-5.231-5.231c0-2.881,2.344-5.231,5.231-5.231c2.885,0,5.231,2.35,5.231,5.231
                              C199.615,185.3,197.268,187.65,194.383,187.65z"/>
                      </g>
                  </g>
                  <g>
                      <g>
                          <path d="M319.935,156.262c-14.422,0-26.157,11.73-26.157,26.157c0,14.427,11.735,26.157,26.157,26.157
                              c14.422,0,26.157-11.73,26.157-26.157C346.092,167.992,334.357,156.262,319.935,156.262z M319.935,187.65
                              c-2.886,0-5.231-2.35-5.231-5.231c0-2.881,2.345-5.231,5.231-5.231s5.231,2.35,5.231,5.231
                              C325.166,185.3,322.821,187.65,319.935,187.65z"/>
                      </g>
                  </g>
                  </svg>`;
    cell.classList.add("ghost");
  }
}

//generates ghosts that appear randomly
function generateGhost() {
  const colors = ["red", "pink", "cyan", "orange"];
  const ghost = [];
  const occupiedPositions = new Set();

  for (let i = 0; i < dimX / 4; i++) {
    let row, col, position;

    do {
      row = randomizer(dimX);
      col = randomizer(dimY);
      position = `${row},${col}`;
    } while (
      (row === pacman.x && col === pacman.y) ||
      occupiedPositions.has(position)
    );

    occupiedPositions.add(position);
    // ghost[i] =
    //   i === 0
    //     ? {
    //         x: row,
    //         y: col,
    //         color: colors[i],
    //         hp: randomizer(4, 1),
    //         label: "ghost",
    //       }
    //     : {
    //         x: row,
    //         y: col,
    //         color: colors[i],
    //         hp: randomizer(7, 1) * 2,
    //         label: "ghost",
    //       };
    ghost[i] = {
      x: row,
      y: col,
      color: colors[randomizer(0, 4)],
      hp: pacman.hp + i,
      label: "ghost",
    };
    plotter(row, col, ghost[i]);
  }
  return ghost;
  //   console.log(ghost);
}

//clears cell
function clearCell(row, col) {
  let cell = document.getElementById(`(${row})(${col})`);
  cell.innerHTML = "";
  cell.classList.remove("pac");
}

//checks if arrow keys are pressed then moves pacman
function move(e) {
  if (e.code === "ArrowRight") {
    clearCell(pacman.x, pacman.y);
    // pacman.y += pacman.y + 1 > 15 ? 0 : 1;
    pacman.y += 1;
    if (pacman.y > dimY - 1) {
      plotter(pacman.x, 0, pacman);
      pacman.y = 0;
    } else {
      plotter(pacman.x, pacman.y, pacman);
    }
    checkForGhost(pacman.x, pacman.y);
  } else if (e.code === "ArrowLeft") {
    clearCell(pacman.x, pacman.y);
    // pacman.y -= pacman.y - 1 < 0 ? 0 : 1;
    pacman.y -= 1;
    if (pacman.y < 0) {
      plotter(pacman.x, dimY - 1, pacman);
      pacman.y = dimY - 1;
    } else {
      plotter(pacman.x, pacman.y, pacman);
    }
    checkForGhost(pacman.x, pacman.y);
    plotter(pacman.x, pacman.y, pacman);
  } else if (e.code === "ArrowDown") {
    clearCell(pacman.x, pacman.y);
    // pacman.x += pacman.x + 1 > 15 ? 0 : 1;
    pacman.x += 1;
    if (pacman.x > dimX - 1) {
      plotter(0, pacman.y, pacman);
      pacman.x = 0;
    } else {
      plotter(pacman.x, pacman.y, pacman);
    }
    checkForGhost(pacman.x, pacman.y);
    plotter(pacman.x, pacman.y, pacman);
  } else if (e.code === "ArrowUp") {
    clearCell(pacman.x, pacman.y);
    // pacman.x -= pacman.x - 1 < 0 ? 0 : 1;
    pacman.x -= 1;
    if (pacman.x < 0) {
      plotter(dimX - 1, pacman.y, pacman);
      pacman.x = dimX - 1;
    } else {
      plotter(pacman.x, pacman.y, pacman);
    }
    checkForGhost(pacman.x, pacman.y);
    plotter(pacman.x, pacman.y, pacman);
  }
}

//gets called when checkForGhost() finds a ghost in the cell then +1 hp to pacman
function eatGhost(ghost) {
  let cell = document.getElementById(`(${ghost.x})(${ghost.y})`);
  if (ghost.hp < pacman.hp || superpower === true) {
    if (superpower === true) {
      superpower = false;
    }

    pacman.hp += 1;
    cell.classList.remove("ghost");
  } else if (ghost.hp == pacman.hp) {
    // pacman.hp += ghost.hp;
    pacman.hp += 1;
    cell.classList.remove("ghost");
  } else {
    alert("You lose");
    window.location.reload();
  }
  ghostEaten += 1;
  const eatedText = document.getElementById("eaten");
  eatedText.innerHTML = `Ghosts Eaten: ${ghostEaten}`;
}

//counts ghost for ultimate
function countGhost() {
  let count = 0;
  for (let i = 0; i < ghosts.length; i++) {
    if (ghosts[i]) {
      count++;
    }
  }

  if (count < 1) {
    superpower = true;
    let cell = document.getElementById(`(${pacman.x})(${pacman.y})`);
    cell.classList.add("superpower");
  } else {
    superpower = false;
    let cell = document.getElementById(`(${pacman.x})(${pacman.y})`);
    cell.classList.remove("superpower");
  }
  return count;
}

//checks if cell has ghost after every movement
function checkForGhost(row, col) {
  let cell = document.getElementById(`(${row})(${col})`);
  //   console.log(ghosts.length);
  if (cell.classList.contains("ghost")) {
    let ghost;
    //Find Ghost
    for (let i = 0; i < ghosts.length; i++) {
      if (ghosts[i] && ghosts[i].x === row && ghosts[i].y === col) {
        ghost = ghosts[i];
        delete ghosts[i];
        break;
      }
    }

    eatGhost(ghost);
    // console.log(countGhost());
    if (countGhost() < 1) {
      alert("You win! Generating new ghosts...");
      //generate new ghost after winning
      setTimeout(() => {
        ghosts = generateGhost();
      }, 500);
    }
  }
}

//event for keyboard press
document.addEventListener("keydown", function (e) {
  move(e);
});
