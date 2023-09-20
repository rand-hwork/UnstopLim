const selection__select = document.querySelector('.selection__select');
const screens = document.getElementById('screens');
const values = screens.querySelectorAll('li');
values[0].classList.add('show');


selection__select.addEventListener('change', (event) => {
  const selectedOptionIndex = event.target.selectedIndex;
  console.log(`El usuario seleccionó la opción en la posición ${selectedOptionIndex}`);
  for (elem of values){
    elem.classList.remove('show');
  }
  values[selectedOptionIndex].classList.add('show');
});
