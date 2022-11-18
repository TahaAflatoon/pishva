// JQuery
$.noConflict()
jQuery(document).ready(function($) {
    
})

// JavaScript
// Error modal close button
const error_btn = document.querySelector('.error_btn');
const error_container = document.querySelector('.error_container');

error_btn.addEventListener('click', () => {
    error_container.style.display = 'none';
});