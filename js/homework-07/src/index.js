const GameForm = document.querySelector('#GameForm');
const rangeInput = document.querySelector('#rangeInput');
const Play = document.querySelector('#play');
const chooseInput = document.querySelector('#chooseInput');
const ChooseIandM = document.querySelector('#paint');

function handlerRangeInput() {
  const rangeNum = rangeInput.value;
  chooseInput.setAttribute('max', rangeNum);
}

GameForm.addEventListener('input', handlerRangeInput);

function handlerSubmit(event) {
  event.preventDefault();

  console.log(event);
  // const rangeNum = rangeInput.value;
  // const chooseNum = chooseInput.value;
  // const randomNum = Math.floor(Math.random() * rangeNum + 1);
  // paintResult(chooseNum, randomNum);
}

Play.addEventListener('submit', handlerSubmit);

function paintResult(chooseNum, randomNum) {
  if (parseInt(chooseNum) > randomNum) {
    ChooseIandM.innerText = `You chose: ${chooseNum}, the machine chose: ${randomNum}\nYou Won!`;
  } else if (parseInt(chooseNum) < randomNum) {
    ChooseIandM.innerText = `You chose: ${chooseNum}, the machine chose: ${randomNum}\nYou lost!`;
  } else if (parseInt(chooseNum) === randomNum) {
    ChooseIandM.innerText = `You chose: ${chooseNum}, the machine chose: ${randomNum}\nYou Won!`;
  }
}
