window.addEventListener('scroll', function () {

    let nav = document.querySelector('header');

    if (window.pageYOffset >= 500) {
        nav.classList.add('sticky');
        document.querySelector(".menuIcon").classList.add('active');
        document.querySelector(".fa-top").classList.add('stick');
    } else {
        nav.classList.remove('sticky');
        document.querySelector(".fa-top").classList.remove('stick');
        document.querySelector(".menuIcon").classList.remove('active');
    }
});
