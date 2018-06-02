
'use strict';

var slideDOM, currentHero, navDOM, menuDOM, overlayDOM;

/*--------------------------------------------------------------------*/
/* SLIDESHOW */
/*--------------------------------------------------------------------*/

slideDOM = document.querySelector('.slide').children;
currentHero = 3;

function nextSlide() {
    if (currentHero < 3) {
        slideDOM[currentHero].removeAttribute('id');
        slideDOM[currentHero + 1].setAttribute('id', 'active');
        currentHero++;
    } else {
        slideDOM[currentHero].removeAttribute('id');
        slideDOM[0].setAttribute('id', 'active');
        currentHero = 0;
    }
}

setTimeout(function () {
    nextSlide();
    setInterval(nextSlide, 6000);
}, 4500);

/*--------------------------------------------------------------------*/
/* STICKY NAVIGATION */
/*--------------------------------------------------------------------*/

navDOM = document.querySelector('.sticky');

function stickyNav () {
    if (window.pageYOffset >= 60) {
        navDOM.style.background = '#fff';    
        navDOM.style.boxShadow = '0px 5px 10px';    
    } else {
        navDOM.style.background = 'transparent';
        navDOM.style.boxShadow = 'none';
    }
     
}

window.addEventListener('scroll', stickyNav);

/*--------------------------------------------------------------------*/
/* MENU BUTTON */
/*--------------------------------------------------------------------*/

menuDOM = document.getElementById('menu');
overlayDOM = document.getElementById('overlay');

function openMenu () {
    menuDOM.style.visibility = 'visible';
    menuDOM.classList.add('navslide');
    menuDOM.classList.remove('withdrawn');
    menuDOM.classList.add('open');
    overlay.classList.add('shadow');
    overlay.style.zIndex = '1';
    
    setTimeout(function(){
        document.querySelector('.btn-menu').classList.toggle('show');
        document.querySelector('.btn-close').classList.toggle('show');
    }, 300);
}

function closeMenu () {
    menuDOM.classList.remove('open');
    menuDOM.classList.add('withdrawn');
    overlay.classList.remove('shadow');
    overlay.style.zIndex = '-100';
    
    setTimeout(function() {
        document.querySelector('.btn-menu').classList.toggle('show');
        document.querySelector('.btn-close').classList.toggle('show');
    }, 300);
    
    setTimeout(function() {
        menuDOM.classList.remove('navslide');   
    }, 500);
    
}

document.querySelector('.btn-menu').addEventListener('click', openMenu);
document.querySelector('.btn-close').addEventListener('click', closeMenu);