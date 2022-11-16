// JQuery
$.noConflict()
jQuery(document).ready(function($) {
    // Smooth scroll
    $('.welcome_list a, .header_title').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
                },50
            );
        }
    });
});

// JavaScript
// Circular Progress
let progressbar = document.querySelector('.circular-progress');
let progress_value = document.querySelector('.contain-value');

let progress_start = 0;
let progress_end = 100;
let progress_speed = 25;

let progress = setInterval(() => {
    progress_start++;
    progress_value.textContent = `${progress_start}%`;
    progressbar.style.background = `conic-gradient(
        #4d5bf9 ${progress_start * 3.6}deg,
        #cadcff ${progress_start * 3.6}deg
    )`;
    if (progress_start == progress_end) {
        clearInterval(progress);
    }
}, progress_speed);