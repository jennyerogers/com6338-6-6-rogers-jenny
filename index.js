//set vars from html
var hamburgerBtn = document.querySelector('.hamburger-btn') //fixed issue with using btn instead of button because of html
var hamburgerMenu = document.querySelector('.hamburger-menu')

// run openmenu function when clicked
hamburgerBtn.onclick = openMenu 

//create open menu function
function openMenu(e) {
//get event to stop bubbling
    e.stopPropagation() 
    hamburgerBtn.focus()
    hamburgerMenu.classList.toggle('show-menu') //toggling the `show-menu` class on the `.hamburger-menu` element should show/hide the menu.
    hamburgerBtn.setAttribute('aria-expanded', true)
// set the aria-expanded to true when menu is open
if (hamburgerMenu.classList.contains('show-menu')) {
        hamburgerBtn.setAttribute('aria-expanded', true)
    } else {
// set the aria-expanded to false when menu is closed
        hamburgerBtn.setAttribute('aria-expanded', false)
    }
}
//create close menu function
function closeMenu(e) {
//get event to stop bubbling
    e.stopPropagation() 
    hamburgerBtn.focus()
//remove class from menu to hide from list
    hamburgerMenu.classList.remove('show-menu') 
// set the aria-expanded to false when menu is closed
    hamburgerBtn.setAttribute('aria-expanded', false)
}
//Pressing the Escape key when the menu is open should close the menu and focus `button.hamburger-btn`.
document.onkeyup = function(e) {
    if (e.key === 'Escape') {
        closeMenu(e) 
    } 
}
//close menu when clicking elsewhere
document.body.addEventListener('click', function (e) {
    if (!hamburgerMenu.contains(e.target)) {
        closeMenu(e);
    }
});


//1. When the `button.hamburger-btn` element is clicked on smaller screens, the hamburger menu should open/close. Again, toggling the `show-menu` class on the `.hamburger-menu` element should show/hide the menu.
//1. Clicking outside of `.hamburger-menu` should close the menu if it is open.
//1. Clicking inside of `.hamburger-menu` should NOT close the menu.
//1. Pressing the Escape key when the menu is open should close the menu and focus `button.hamburger-btn`.
//1. Under all circumstances, when the menu is open, `aria-expanded` should be set to `true` on `button.hamburger-btn`, and set to `false` when the menu is closed.