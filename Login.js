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

// Inputs eye toggle
username_toggle = () => {
    let pass = document.getElementById('username');
    if (pass.type === 'password') {
        pass.type = 'text';
    } else {
        pass.type = 'password';
    }
}
password_toggle = () => {
    let pass = document.getElementById('psw');
    if (pass.type === 'password') {
        pass.type = 'text';
    } else {
        pass.type = 'password';
    }
}