const clock = document.querySelector('h2#clock');

function getClock() {
  const HH = String(new Date().getHours()).padStart(2, '0');
  const MM = String(new Date().getMinutes()).padStart(2, '0');
  const SS = String(new Date().getSeconds()).padStart(2, '0');

  clock.innerText = `${HH} : ${MM} : ${SS}`;
}

getClock(); // 바로 보이게
setInterval(getClock, 1000);
