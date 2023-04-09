import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.open-popup');
let popupCloseButton = document.querySelector('.close-popup');


popupOpenButton.addEventListener('click',  function openPopup() {
  popup.classList.add('active');
  popupBg.classList.add('active');
})

document.addEventListener('click', (e) => {
  if(e.target === popupBg || e.target === popupCloseButton) {
    popup.classList.remove('active');
    popupBg.classList.remove('active');
  }

})

