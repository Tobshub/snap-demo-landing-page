let close_nav_button = document.getElementById('close-menu');
let side_nav = document.getElementById('nav-bar');
let open_nav_button = document.getElementById('open-menu');


close_nav_button.addEventListener('click', ()=>{
  side_nav.style.width = '0';
  side_nav.style.height = '0';
  side_nav.style.marginLeft = '100%';
})

open_nav_button.addEventListener('click',()=>{
  side_nav.style.width = '100%';
  side_nav.style.height = '100%';
  side_nav.style.marginLeft = '0';
})

let nav_items = document.querySelectorAll('.nav-item');
let nav_arrows = document.querySelectorAll('.dropdown-arrow');
let dropdowns = document.querySelectorAll('.dropdown');

let features_nav = document.getElementById('features-nav');
let features_arrow = nav_arrows[0];
let features_dropdown = dropdowns[0];

features_nav.addEventListener('click', ()=>{
  if(window.getComputedStyle(features_dropdown).height=='0px'){
    features_dropdown.style.height = '150px';
    features_dropdown.style.padding = '1rem';
    features_arrow.src = './images/icon-arrow-up.svg';
  } else {
    features_dropdown.style.height = '0';
    features_dropdown.style.padding = '0';
    features_arrow.src = './images/icon-arrow-down.svg';
  }
})

let company_nav = document.getElementById('company-nav');
let company_arrow = nav_arrows[1];
let company_dropdown = dropdowns[1];

company_nav.addEventListener('click', ()=>{
  if(window.getComputedStyle(company_dropdown).height=='0px'){
    company_dropdown.style.height = '120px';
    company_dropdown.style.padding = '1rem';
    company_arrow.src = './images/icon-arrow-up.svg';
  } else {
    company_dropdown.style.height = '0';
    company_dropdown.style.padding = '0';
    company_arrow.src = './images/icon-arrow-down.svg';
  }
})