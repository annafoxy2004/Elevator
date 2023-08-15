let elevator = document.querySelector(".elevator");
let btnDown = document.querySelector("#btnDown");
let btnUp = document.querySelector("#btnUp");
let goButton = document.getElementById("go-btn");

let five = document.getElementById("five");
let four = document.getElementById("four");
let three = document.getElementById("three");
let two = document.getElementById("two");
let one = document.getElementById("one");

let buildingHeight = 1000;
let floorHeight = buildingHeight / 5;
let currentFloor = 1;

btnDown.addEventListener("click", () => {
  console.log(elevator.style.marginTop);
  if (elevator.style.marginTop === "") {
    elevator.style.marginTop = "204px";

    five.style.backgroundColor = "rgb(58, 91, 152)";
    four.style.backgroundColor = "yellow";
    three.style.backgroundColor = "rgb(58, 91, 152)";
    two.style.backgroundColor = "rgb(58, 91, 152)";
    one.style.backgroundColor = "rgb(58, 91, 152)";

    five.style.boxShadow = "0 0 0 0";
    four.style.boxShadow = "7px 3px 30px yellow";
    three.style.boxShadow = "0 0 0 0";
    two.style.boxShadow = "0 0 0 0";
    one.style.boxShadow = "0 0 0 0";
  } else if (elevator.style.marginTop === "204px") {
    elevator.style.marginTop = "408px";

    five.style.backgroundColor = "rgb(58, 91, 152)";
    four.style.backgroundColor = "rgb(58, 91, 152)";
    three.style.backgroundColor = "yellow";
    two.style.backgroundColor = "rgb(58, 91, 152)";
    one.style.backgroundColor = "rgb(58, 91, 152)";

    five.style.boxShadow = "0 0 0 0";
    four.style.boxShadow = "0 0 0 0";
    three.style.boxShadow = "7px 3px 30px yellow";
    two.style.boxShadow = "0 0 0 0";
    one.style.boxShadow = "0 0 0 0";
  } else if (elevator.style.marginTop === "408px") {
    elevator.style.marginTop = "612px";

    five.style.backgroundColor = "rgb(58, 91, 152)";
    four.style.backgroundColor = "rgb(58, 91, 152)";
    three.style.backgroundColor = "rgb(58, 91, 152)";
    two.style.backgroundColor = "yellow";
    one.style.backgroundColor = "rgb(58, 91, 152)";

    five.style.boxShadow = "0 0 0 0";
    four.style.boxShadow = "0 0 0 0";
    three.style.boxShadow = "0 0 0 0";
    two.style.boxShadow = "7px 3px 30px yellow";
    one.style.boxShadow = "0 0 0 0";
  } else if (elevator.style.marginTop === "612px") {
    elevator.style.marginTop = "816px";

    five.style.backgroundColor = "rgb(58, 91, 152)";
    four.style.backgroundColor = "rgb(58, 91, 152)";
    three.style.backgroundColor = "rgb(58, 91, 152)";
    two.style.backgroundColor = "rgb(58, 91, 152)";
    one.style.backgroundColor = "yellow";

    five.style.boxShadow = "0 0 0 0";
    four.style.boxShadow = "0 0 0 0";
    three.style.boxShadow = "0 0 0 0";
    two.style.boxShadow = "0 0 0 0";
    one.style.boxShadow = "7px 3px 30px yellow";
  }
});

btnUp.addEventListener("click", () => {
  console.log(elevator.style.marginBottom);
  if (elevator.style.marginTop === "816px") {
    elevator.style.marginTop = "612px";

    five.style.backgroundColor = "rgb(58, 91, 152)";
    four.style.backgroundColor = "rgb(58, 91, 152)";
    three.style.backgroundColor = "rgb(58, 91, 152)";
    two.style.backgroundColor = "yellow";
    one.style.backgroundColor = "rgb(58, 91, 152)";

    five.style.boxShadow = "0 0 0 0";
    four.style.boxShadow = "0 0 0 0";
    three.style.boxShadow = "0 0 0 0";
    two.style.boxShadow = "7px 3px 30px yellow";
    one.style.boxShadow = "0 0 0 0";
  } else if (elevator.style.marginTop === "612px") {
    elevator.style.marginTop = "408px";

    five.style.backgroundColor = "rgb(58, 91, 152)";
    four.style.backgroundColor = "rgb(58, 91, 152)";
    three.style.backgroundColor = "yellow";
    two.style.backgroundColor = "rgb(58, 91, 152)";
    one.style.backgroundColor = "rgb(58, 91, 152)";

    five.style.boxShadow = "0 0 0 0";
    four.style.boxShadow = "0 0 0 0";
    three.style.boxShadow = "7px 3px 30px yellow";
    two.style.boxShadow = "0 0 0 0";
    one.style.boxShadow = "0 0 0 0";
  } else if (elevator.style.marginTop === "408px") {
    elevator.style.marginTop = "204px";

    five.style.backgroundColor = "rgb(58, 91, 152)";
    four.style.backgroundColor = "yellow";
    three.style.backgroundColor = "rgb(58, 91, 152)";
    two.style.backgroundColor = "rgb(58, 91, 152)";
    one.style.backgroundColor = "rgb(58, 91, 152)";

    five.style.boxShadow = "0 0 0 0";
    four.style.boxShadow = "7px 3px 30px yellow";
    three.style.boxShadow = "0 0 0 0";
    two.style.boxShadow = "0 0 0 0";
    one.style.boxShadow = "0 0 0 0";
  } else if (elevator.style.marginTop === "204px") {
    elevator.style.marginTop = "0px";

    five.style.backgroundColor = "yellow";
    four.style.backgroundColor = "rgb(58, 91, 152)";
    three.style.backgroundColor = "rgb(58, 91, 152)";
    two.style.backgroundColor = "rgb(58, 91, 152)";
    one.style.backgroundColor = "rgb(58, 91, 152)";

    five.style.boxShadow = "7px 3px 30px yellow";
    four.style.boxShadow = "0 0 0 0";
    three.style.boxShadow = "0 0 0 0";
    two.style.boxShadow = "0 0 0 0";
    one.style.boxShadow = "0 0 0 0";
  }
});

function moveContainer(targetContainer) {
  let targetPosition = (targetContainer - 1) * floorHeight;
  elevator.style.transition = "bottom 2s";
  elevator.style.bottom = targetPosition + "px";
  currentContainer = targetContainer;
}
console.log(goButton);
goButton.addEventListener("click", () => {
  let inputFloor = prompt("Enter the desired floor (1 to 5):");
  let desiredFloor = parseInt(inputFloor);

  if (desiredFloor == 5) {
    elevator.style.marginTop = "0px";

    five.style.backgroundColor = "yellow";

    four.style.backgroundColor = "rgb(58, 91, 152)";
    three.style.backgroundColor = "rgb(58, 91, 152)";
    two.style.backgroundColor = "rgb(58, 91, 152)";
    one.style.backgroundColor = "rgb(58, 91, 152)";
    five.style.boxShadow = "7px 3px 30px yellow";

    four.style.boxShadow = "0 0 0 0";
    three.style.boxShadow = "0 0 0 0";
    two.style.boxShadow = "0 0 0 0";
    one.style.boxShadow = "0 0 0 0";
  } else if (desiredFloor == 4) {
    elevator.style.marginTop = "204px";

    five.style.backgroundColor = "rgb(58, 91, 152)";
    four.style.backgroundColor = "yellow";
    three.style.backgroundColor = "rgb(58, 91, 152)";
    two.style.backgroundColor = "rgb(58, 91, 152)";
    one.style.backgroundColor = "rgb(58, 91, 152)";

    five.style.boxShadow = "0 0 0 0";
    four.style.boxShadow = "7px 3px 30px yellow";
    three.style.boxShadow = "0 0 0 0";
    two.style.boxShadow = "0 0 0 0";
    one.style.boxShadow = "0 0 0 0";
  } else if (desiredFloor == 3) {
    elevator.style.marginTop = "408px";

    five.style.backgroundColor = "rgb(58, 91, 152)";
    four.style.backgroundColor = "rgb(58, 91, 152)";
    three.style.backgroundColor = "yellow";
    two.style.backgroundColor = "rgb(58, 91, 152)";
    one.style.backgroundColor = "rgb(58, 91, 152)";

    five.style.boxShadow = "0 0 0 0";
    four.style.boxShadow = "0 0 0 0";
    three.style.boxShadow = "7px 3px 30px yellow";
    two.style.boxShadow = "0 0 0 0";
    one.style.boxShadow = "0 0 0 0";
  } else if (desiredFloor == 2) {
    elevator.style.marginTop = "612px";

    five.style.backgroundColor = "rgb(58, 91, 152)";
    four.style.backgroundColor = "rgb(58, 91, 152)";
    three.style.backgroundColor = "rgb(58, 91, 152)";
    two.style.backgroundColor = "yellow";
    one.style.backgroundColor = "rgb(58, 91, 152)";

    five.style.boxShadow = "0 0 0 0";
    four.style.boxShadow = "0 0 0 0";
    three.style.boxShadow = "0 0 0 0";
    two.style.boxShadow = "7px 3px 30px yellow";
    one.style.boxShadow = "0 0 0 0";
  } else if (desiredFloor == 1) {
    elevator.style.marginTop = "816px";

    five.style.backgroundColor = "rgb(58, 91, 152)";
    four.style.backgroundColor = "rgb(58, 91, 152)";
    three.style.backgroundColor = "rgb(58, 91, 152)";
    two.style.backgroundColor = "rgb(58, 91, 152)";
    one.style.backgroundColor = "yellow";

    five.style.boxShadow = "0 0 0 0";
    four.style.boxShadow = "0 0 0 0";
    three.style.boxShadow = "0 0 0 0";
    two.style.boxShadow = "0 0 0 0";
    one.style.boxShadow = "7px 3px 30px yellow";
  } else {
    five.style.backgroundColor = "rgb(58, 91, 152)";
    four.style.backgroundColor = "rgb(58, 91, 152)";
    three.style.backgroundColor = "rgb(58, 91, 152)";
    two.style.backgroundColor = "rgb(58, 91, 152)";
    one.style.backgroundColor = "rgb(58, 91, 152)";

    five.style.boxShadow = "0 0 0 0";
    four.style.boxShadow = "0 0 0 0";
    three.style.boxShadow = "0 0 0 0";
    two.style.boxShadow = "0 0 0 0";
    one.style.boxShadow = "0 0 0 0";

    alert("Нет такого этажа");
  }
});

function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = "./images/elevator.mp3"; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

function soundClick1() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = "./images/ding.mp3"; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
