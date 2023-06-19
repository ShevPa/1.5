var showButton = document.querySelector('.brends__button-open');
var brends = document.querySelector('.brends__list');

var swiper = new Swiper(".brends__list-swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

showButton.addEventListener('click',function(){
    
    if(showButton.textContent == "Показать все"){
        showButton.textContent = "Скрыть";
        showButton.classList.add('brends__button-open--active');
        brends.style.height = 'auto';
    }   
    else{
        showButton.textContent = "Показать все";
        showButton.classList.remove('brends__button-open--active');
        brends.style.height = '200px';
    }
     
});


