// const h1 = document.getElementById('h1');

// h1.innerText = 'Got you!!';
// console.dir(h1);

// const hellos = document.getElementsByClassName('hello');
// console.log(hellos);

// const h1 = document.getElementsByTagName('h1');
// console.log(h1);

// const h1 = document.querySelector('.hello h1');
// console.log(h1);

// const h1 = document.querySelectorAll('.hello h1');
// console.log(h1);

// const h1 = document.querySelector('div.hello:first-child h1');

// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;

//   if (currentColor === 'blue') {
//     newColor = 'tomato';
//   } else {
//     newColor = 'blue';
//   }

//   h1.style.color = newColor;
// }

// h1.addEventListener('click', handleTitleClick);

// function handleMouseEnter() {
//   h1.innerText = 'Mouse is here!';
// }

// function handleMouseLeave() {
//   h1.innerText = 'Mouse is gone!';
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = 'tomato';
// }

// function handleWindowCopy() {
//   alert('copier!');
// }

// function handleWindowOffline() {
//   alert('Sos no WIFI');
// }

// h1.addEventListener('click', handleTitleClick);
// h1.addEventListener('mouseenter', handleMouseEnter);
// h1.addEventListener('mouseleave', handleMouseLeave);

// h1.onClick = handleh1Click;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;

// window.addEventListener('resize', handleWindowResize);
// window.addEventListener('copy', handleWindowCopy);
// window.addEventListener('offline', handleWindowOffline);

const h1 = document.querySelector('div.hello:first-child h1');

// function handleTitleClick() {
//   const Active = 'active';
//   if (h1.className === Active) {
//     h1.className = '';
//   } else {
//     h1.className = Active;
//   }
// }

function handleTitleClick() {
  // const Active = 'active';
  // if (h1.classList.contains(Active)) {
  //   h1.classList.remove(Active);
  // } else {
  //   h1.classList.add(Active);
  // }

  h1.classList.toggle('active');
}

h1.addEventListener('click', handleTitleClick);
