const menu_burger = document.getElementById('menu-button');
const menu = document.querySelector('.menu');
const menu_close = document.getElementById('menu-close');

menu_burger.addEventListener('click', ()=>{
  menu.style.width = '100vw';
  menu.style['margin-left'] = '0';
});

menu_close.addEventListener('click', ()=>{
  menu.style.width = '0';
  menu.style['margin-left'] = '100vw';
});


let hover_menu = document.querySelectorAll('.dropdown');
let hover_menu_items = document.querySelectorAll('.dropdown-items');


    hover_menu[0].addEventListener('mouseover',()=>{
        hover_menu[0].style.height = '150px';
        hover_menu_items[0].style.height = 'max-content';
        hover_menu_items[0].style.padding = '10px';
        hover_menu[0].classList.remove('dropdown');
        hover_menu[0].classList.add('dropup');

    })
    hover_menu[0].addEventListener('mouseout',()=>{
      hover_menu[0].style.height = 'max-content';
        hover_menu_items[0].style.height = '0';
        hover_menu_items[0].style.padding = '0';
        hover_menu[0].classList.remove('dropup');
        hover_menu[0].classList.add('dropdown');
    })

    hover_menu[1].addEventListener('mouseover',()=>{
      hover_menu[1].style.height = '115px';
        hover_menu_items[1].style.height = 'max-content';
        hover_menu_items[1].style.padding = '10px';
        hover_menu[1].classList.remove('dropdown');
        hover_menu[1].classList.add('dropup');
       
    })
    hover_menu[1].addEventListener('mouseout',()=>{
      hover_menu[1].style.height = 'max-content';
      hover_menu_items[1].style.height = '0';
        hover_menu_items[1].style.padding = '0';
        hover_menu[1].classList.remove('dropup');
        hover_menu[1].classList.add('dropdown');
    })



let dropdowns = document.querySelectorAll('.dropdown-selector');
let dropdown_content = document.querySelectorAll('.menu-dropdown');


    dropdowns[0].addEventListener('click',()=>{
      if(!dropdowns[0].classList.contains('dropdown-selector-after-click')){
        dropdown_content[0].style.height = 'fit-content';
        dropdowns[0].classList.remove('dropdown-selector');
        dropdowns[0].classList.add('dropdown-selector-after-click');
       }
       else if(dropdowns[0].classList.contains('dropdown-selector-after-click')){
        dropdown_content[0].style.height = '0';
        dropdowns[0].classList.remove('dropdown-selector-after-click');
        dropdowns[0].classList.add('dropdown-selector');
       }
    })


    dropdowns[1].addEventListener('click',()=>{
      if(!dropdowns[1].classList.contains('dropdown-selector-after-click')){
        dropdown_content[1].style.height = 'fit-content';
        dropdowns[1].classList.remove('dropdown-selector');
        dropdowns[1].classList.add('dropdown-selector-after-click');
       }
       else if(dropdowns[1].classList.contains('dropdown-selector-after-click')){
        dropdown_content[1].style.height = '0';
        dropdowns[1].classList.remove('dropdown-selector-after-click');
        dropdowns[1].classList.add('dropdown-selector');
       }
    })





