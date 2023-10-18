

window.addEventListener('scroll', () =>{
    const header = document.getElementById('header');
    // if scroll y is greader than 50 view port than add scroll header class
    this.scrollY >= 2 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header');
})