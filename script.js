
window.addEventListener('scroll', function(){
    const parallax = document.querySelector('.img');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY('+ scrollPosition * 0.5 + 'px)';
})