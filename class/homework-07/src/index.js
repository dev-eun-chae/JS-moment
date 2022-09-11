const GameForm = document.querySelector('#GameForm');
const rangeInput = document.querySelector('#rangeInput');
const chooseInput = document.querySelector('#chooseInput');
const ChooseIandM = document.querySelector('#paint');

function handlerRangeInput() {
  const rangeNum = rangeInput.value;
  chooseInput.setAttribute('max', rangeNum);
}

rangeInput.addEventListener('input', handlerRangeInput);

function handlerSubmit(event) {
  event.preventDefault();

  if (rangeInput.value === '' && chooseInput === '') {
    return;
  }

  //입력이 제출되며 브라우저가 초기화되는 고유 동작을 막기 위한 코드입니다.
  const rangeNum = rangeInput.value;
  const chooseNum = chooseInput.value;
  // const chooseNum = parseInt(guessInput.value, 10);
  // 위 코드는 문자열 형태의 입력 값을 숫자 비교를 하기 위해 정수 형태로 바꿔주는 코드입니다.
  // parseInt()함수는 문자열을 정수 형태로 바꿔주는 함수입니다. 맨 마지막의 10은 10진수로 변경하라는 의미입니다.

  const randomNum = Math.floor(Math.random() * rangeNum + 1);
  // const randomNum = Math.ceil(Math.random() * max);
  //   Math.random()함수로 랜덤으로 숫자를 생성합니다. 이때 Math.random()은 0에서 1보다 작은 숫자를 생성하므로 숫자가 생성되는 범위는 max를 넘지 못합니다.
  // 필요한 값은 정수 형태의 숫자이기 때문에 Math.ceil()함수를 통해 값을 올림하고 소수점 이하를 없애 줍니다.
  // 여기서 버림이 아닌 올림을 하는 이유는 올림을 함으로써 max까지의 수를 얻을 수 있기 때문입니다.
  paintResult(chooseNum, randomNum);
}

GameForm.addEventListener('submit', handlerSubmit);

function paintResult(chooseNum, randomNum) {
  if (parseInt(chooseNum) >= randomNum) {
    ChooseIandM.innerText = `You chose: ${chooseNum}, the machine chose: ${randomNum}\nYou Won!`;
  } else if (parseInt(chooseNum) < randomNum) {
    ChooseIandM.innerText = `You chose: ${chooseNum}, the machine chose: ${randomNum}\nYou lost!`;
  }
}
