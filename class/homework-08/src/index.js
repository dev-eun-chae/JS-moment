const clockTitle = document.querySelector('.js-clock');

function getClock() {
  const setDate = new Date('2022-12-25T00:00:00');
  const newDate = new Date();

  const result = setDate.getTime() - newDate.getTime();

  const dd = Math.floor(result / (1000 * 60 * 60 * 24));
  const HH = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const MM = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
  const SS = Math.floor((result % (1000 * 60)) / 1000);

  clockTitle.innerText = `${dd}d ${HH}h ${MM}mm ${SS}s`;
}

getClock(); // 바로 보이게
setInterval(getClock, 1000);
