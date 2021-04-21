console.log('Welcome to my portfolio page. Stop back soon for an update!');
const welcomeContain = $('#welcome-container');
const greetUser = $('#greet-user');
const welcomeUser = $('#welcome-user');
const heart = $('#welcome-heart');
const mainContain = $('#main-container');

// on LOAD page 'fades out' instantly to create...
// fadeIn effect / look into a smoother way to start?
$(document).ready(function() {
    welcomeContain.fadeOut().fadeIn(2000);

})

// heart icon on CLICK fades out welcome page... 
// and displays main page
heart.on('click', function() {
    welcomeContain.fadeOut(3000, function() {
        welcomeContain.attr({
            style: 'background-color: white',
            class: 'hide'
        });

    }).empty();

    // TODO STARTING POINT 4/21/21 AM 
    // adds background bg-image to MAIN container when...
    // heart is clicked
    mainContain.css('background', 'url(https://www.w3schools.com/howto/img_parallax.jpg) no-repeat center');

    

})
