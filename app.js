/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 3 Global Variables with fragment to be continer 
*/
 
let sections = Array.from(document.querySelectorAll('section'));
const list = document.getElementById('navbar__list') ;
const fragment = document.createDocumentFragment() ;


/**
 * End Global Variables
 * Start Helper Functions
 * Function to make nav bar visible
*/
function createListItem() {
for (let section of sections) {
    listItem = document.createElement('li') ;
    secName = section.dataset.nav ;
    secLink = section.getAttribute('id')
    listItem.innerHTML = `<a class='menu__link' href= '#${secLink}'> ${secName} </a>` 
    fragment.appendChild(listItem) ;
}
list.appendChild(fragment)
}
createListItem() ;

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

