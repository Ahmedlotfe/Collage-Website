let menuBtn = document.getElementById('menu-btn')
let navList = document.getElementById('nav-list')


menuBtn.onclick = function () {
    if (navList.style.display == 'none') {
        navList.style.display = 'block'
    } else {
        navList.style.display = 'none'
    }
}