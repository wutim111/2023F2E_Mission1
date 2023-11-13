let navbar=document.querySelector('nav');
let navbar_collapse_btn = document.querySelector('.navbar-toggler');
let navbar_menuopen_img = document.querySelector('#menu-open-img');
var myCollapse = document.querySelector('#navbarSupportedContent')
var bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false
})
navbar_collapse_btn.addEventListener('click',function(){
    navbar.classList.toggle('menu-open');
});
navbar_menuopen_img.addEventListener('click',function(){
    let bsCollapse = new bootstrap.Collapse(myCollapse, {
        hide: true
    })
    navbar.classList.toggle('menu-open');
});