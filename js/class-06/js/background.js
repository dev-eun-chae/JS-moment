const images = ['1.jpg', '2.jpg', '3.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.src = `/class-06/img/${chosenImage}`;

document.body.appendChild(bgImage);
