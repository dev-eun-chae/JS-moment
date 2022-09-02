const Body = document.querySelector('body');
const title = document.querySelector('body h1');

title.style.color = 'white';
Body.style.backgroundColor = 'orange';

function Resize() {
  const size = window.innerWidth;
  if (size >= 700) {
    Body.style.backgroundColor = 'orange';
  } else if (size < 700 && size > 400) {
    Body.style.backgroundColor = 'purple';
  } else {
    Body.style.backgroundColor = 'cornflowerblue';
  }
}
window.addEventListener('resize', Resize);
