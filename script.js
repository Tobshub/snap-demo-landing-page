const menu_burger = document.getElementById('menu-button');
const menu = document.querySelector('.menu');
const menu_close = document.getElementById('menu-close');

menu_burger.addEventListener('click', ()=>{
  menu.style.width = '100vw';
  menu.style['margin-left'] = '0';
})

menu_close.addEventListener('click', ()=>{
  menu.style.width = '0';
  menu.style['margin-left'] = '100vw';
})

let dropdowns = document.querySelectorAll('.dropdown-selector');
let dropdown_content = document.querySelectorAll('.menu-dropdown');

for(let i in dropdowns){
    dropdowns[i].addEventListener('click',()=>{
      if(!dropdowns[i].classList.contains('dropdown-selector-after-click')){
        dropdown_content[i].style.height = 'fit-content';
        dropdowns[i].classList.remove('dropdown-selector');
        dropdowns[i].classList.add('dropdown-selector-after-click');
       }
       else if(dropdowns[i].classList.contains('dropdown-selector-after-click')){
        dropdown_content[i].style.height = '0';
        dropdowns[i].classList.remove('dropdown-selector-after-click');
        dropdowns[i].classList.add('dropdown-selector');
       }
    })
};


