/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    // Iterate through taglines
    var taglineRandomizer = function() {
        let taglines = [
            'Unlock Your Hair\'s True Potential at M Styling Studio'
            ,'Unlock Your Hair\'s True Potential with M Styling: Where Artistry Meets Style!'
            ,'Unlock Your Hair\'s True Potential at M Styling Studio: Where Style Meets Confidence!'
            ];
        var el = document.getElementById('tagline');

        var typewriter = new Typewriter(el, {
            loop: true,
            delay: 25,
        });

        typewriter
        .pauseFor(2500)
        .typeString('Unlock Your Hair\'s True Potential at M Styling Studio')
        .pauseFor(300)
        .deleteChars(7)
        .typeString(': Where Artistry Meets Style!')
        //.typeString(Math.floor(Math.random() * 3))
        .deleteChars(28)
        .typeString(' Where Style Meets Confidence!')
        //.typeString(Math.floor(Math.random() * 3))
        .pauseFor(1000)
        .start();
    }
    taglineRandomizer();

});
