 //Script popap 
const button = document.querySelector('.js-open-modal')
const modalElem = document.querySelector('.modal');
const overlay = document.querySelector('.js-overlay-modal');
const closeButton = document.querySelector('.modal__cross');
const input = document.querySelector('.checkbox');
const buttonToSend = document.querySelector('.button__to-send');
// buttonToSend.setAttribute("disabled", "true")
button.addEventListener('click', function(e) {
modalElem.classList.add('active');
     overlay.classList.add('active');
});
closeButton.addEventListener('click', function(e) {
modalElem.classList.remove('active');
    overlay.classList.remove('active');
  });
overlay.addEventListener('click', function() {
    document.querySelector('.modal.active').classList.remove('active');
     overlay.classList.remove('active');
});
 input.addEventListener('change', () => {
             if(input.checked) {
               buttonToSend.disabled = false        
            } 
     })   

 <!-- //BURGER MENU -->

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
menuBtn.classList.toggle('active');
menu.classList.toggle('active');
})