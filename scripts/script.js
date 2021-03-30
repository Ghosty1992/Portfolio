// Image Slider
const images = document.querySelectorAll('.slideImg');

let i = 0;

function imgSlider() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  if (i === images.length) {
    i = 0;
  }
  images[i].style.display = 'block';
  i++;
}

setInterval(imgSlider, 2500);

//Toggle Menu

const toggler = document.querySelector('#toggler');
const navBar = document.querySelector('.navigation');

toggler.addEventListener('click', () => {
  navBar.classList.toggle('show');
});
