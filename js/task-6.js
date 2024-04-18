function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector("input")
const createBtn = document.querySelector("[data-create]")
const destroyBtn = document.querySelector("[data-destroy]")
const boxesContainer = document.querySelector("#boxes")
const inputBtnContainer = document.querySelector("#controls")

inputBtnContainer.classList.add("input-Btn-Container")
input.classList.add("input-task-6");
createBtn.classList.add("create-btn-task-6");
destroyBtn.classList.add("destroy-btn-task-6");
boxesContainer.classList.add("boxes-Container")


const createBoxes = (amount) => {
  boxesContainer.innerHTML = "";
  let size = 30;
  if (amount >= 1 && amount <= 100) {
    const elements = [];
    for (let index = 0; index < amount; index++) {
      const div = document.createElement("div")
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      elements.push(div);
      size += 10;
    }
    boxesContainer.append(...elements);
    input.value = "";
  }
}

createBtn.addEventListener("click", () => createBoxes(parseInt(input.value)));

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
}



destroyBtn.addEventListener("click", destroyBoxes)
