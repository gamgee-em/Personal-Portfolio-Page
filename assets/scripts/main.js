console.log('Welcome to my portfolio page. Stop back soon for an update!');
const welcomeContain = $('#welcome-container');
const greetUser = $('#greet-user');
const welcomeUser = $('#welcome-user');
const heart = $('#welcome-heart');
const mainContain = $('#main-container');
const sideNav = $('#side-nav');
// on LOAD page 'fades out' instantly to create...
// fadeIn effect / look into a smoother way to start?
$(document).ready(function() {
    welcomeContain.fadeOut().fadeIn(2000);

})

// heart icon on CLICK fades out welcome page... 
// & adds hide class to then display main page bg-img
heart.on('click', function() {
    welcomeContain.fadeOut(3000, function() {
        welcomeContain.attr({
            style: 'background-color: white',
            class: 'hide'
        });
    }).empty();

    // TODO STARTING POINT 4/21/21 AM 
    // adds background bg-img to MAIN container when...
    // heart is clicked
    // TODO switch for local img do not rely on external links if poss
    mainContain.css('background', 'url(https://www.w3schools.com/howto/img_parallax.jpg) no-repeat center');
    sideNav.css({
        color: 'black',
        background: 'gray',
        height: '100%',
        width: '20vw'
    })
})
