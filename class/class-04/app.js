// const loginButton = document.querySelector('#loginForm button');

// function handleLoginBtnClick() {
//   console.log(loginInput.value);
// }

// loginButton.addEventListener('click', handleLoginBtnClick);

// function onLoginSubmit(event) {
// const username = loginInput.value;
//   event.preventDefault();
// }

// loginForm.addEventListener('submit', onLoginSubmit);

// ----

// function handelLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
// }
// const link = document.querySelector('a');
// link.addEventListener('click', handelLinkClick);

// ----

const loginForm = document.querySelector('#loginForm');
const loginInput = document.querySelector('#loginForm input');
const greeting = document.querySelector('#greeting');
const HIDDEN_NAME = 'hidden';
const USER_NAME_KEY = 'username';

function handelLinkClick(event) {
  event.preventDefault();

  localStorage.setItem(USER_NAME_KEY, loginInput.value);
  loginForm.classList.add(HIDDEN_NAME);

  paintGreeting();
}

function paintGreeting() {
  const username = localStorage.getItem(USER_NAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_NAME);
}

const savedUsername = localStorage.getItem(USER_NAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_NAME);
  loginForm.addEventListener('submit', handelLinkClick);
} else {
  // show the greetings
  paintGreeting();
}
