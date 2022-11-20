// JQuery
$.noConflict()
jQuery(document).ready(function($) {
    
})

// JavaScript
//Timer
const tempcode_btn = document.querySelector('.tempcode_btn');
const countdown = document.querySelector('#timer');
//Starter time
const startingMinutes = 2;
let time = startingMinutes * 60;
//Function starts by click
total = () => {
    tempcode_btn.style.display = 'none';
    countdown.style.display = 'inline-block';
    //Countdown start
    let counting = setInterval(updateCountdown, 1000);
    function updateCountdown() {
        //Minute / Second calculation
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        //Display zero numbers
        seconds = seconds < 10 ? '0' + seconds : seconds;
        //Display minute & second on page
        countdown.innerHTML = `${minutes}:${seconds}`;
        time--;
        //Avoid negative time
        if (time < 0) {
            clearInterval(counting);
        }
    }
}

// Inputs eye toggle
//Current pass show/hide button
current_pass = () => {
    let pass = document.getElementById('currentpass');
    if (pass.type === 'password') {
        pass.type = 'text';
    } else {
        pass.type = 'password';
    }
}
//New pass show/hide button
new_pass = () => {
    let pass = document.getElementById('newpass');
    if (pass.type === 'password') {
        pass.type = 'text';
    } else {
        pass.type = 'password';
    }
}
//New pass confirmation show/hide button
confirm_pass = () => {
    let pass = document.getElementById('newpass_confirm');
    if (pass.type === 'password') {
        pass.type = 'text';
    } else {
        pass.type = 'password';
    }
}
//Temporary code show/hide button
temp_code = () => {
    let pass = document.getElementById('timed_code');
    if (pass.type === 'password') {
        pass.type = 'text';
    } else {
        pass.type = 'password';
    }
}