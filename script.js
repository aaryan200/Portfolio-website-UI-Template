var swiper = new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});

const menuBtn = document.querySelector("#menu-btn"),
    closeBtn = document.querySelector("#close-btn"),
    menu = document.querySelector("nav .container ul");

// show menu
menuBtn.addEventListener("click", () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

// hide menu
closeBtn.addEventListener("click", () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})

const navItems = menu.querySelectorAll("li");
const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove("active");
    })
}
navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener("click", () => {
        changeActiveItem();
        link.classList.add('active');
    })
});

// read more about
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');
    if (readMoreContent.classList.contains('show-content')) {
        readMoreBtn.textContent = 'Show less';
    }
    else {
        readMoreBtn.textContent = 'Show more';
    }
});

// show or hide skill items
const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items')
    });
});

// add box shadow on scroll
/*
window.scrollY represents the vertical scroll position of the web page.
When window.scrollY is greater than 0, meaning the page is scrolled vertically, the class 'show-box-shadow' will be added to the <nav> element.
When window.scrollY is 0, indicating that the page is scrolled to the top, the class 'show-box-shadow' will be removed from the <nav> element.
*/
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0);
});