console.log('Welcome to my portfolio page. Stop back soon for an update!');
// try moving global variables to seperate variable file...
// then require/export?
const welcomeContain = $('#welcome-container');
const greetUser = $('#greet-user');
const welcomeUser = $('#welcome-user');
const heart = $('#welcome-heart');
const mainContain = $('#main-container');
const navContain = $('.nav-container');
const closeNav = $('.close-nav');
const sideNav = $('#side-nav');
const aboutNav = $('#about-nav');
const resumeNav = $('#resume-nav');
const portfolioNav = $('#portfolio-nav');
const contactNav = $('#contact-nav');

// on LOAD page 'fades out' instantly to create...
// fadeIn effect / look into a smoother way to start?
welcomeContain.fadeOut().fadeIn(2000);
closeNav.hide();
$(document).ready(function() {
    
    
});

// heart icon on CLICK fades out welcome page... 
// & adds hide class to then display main page bg-img
heart.on('click', function() {
    welcomeContain.fadeOut(3000, function() {
        // TODO try using the jquery method .hide('speed value') instead 
        welcomeContain.attr({
            style: 'background-color: white',
            class: 'hide'
        });
    }).empty();

    // adds background bg-img to MAIN container when...
    // heart is clicked
    // TODO switch for local img do not rely on external links if poss
    mainContain.css('background', 'url(https://www.w3schools.com/howto/img_parallax.jpg) 100% no-repeat');
    sideNav.css({
        color: 'black',
        background: 'gray',
        height: '100vh',
        width: '20vw',
        padding: '5% 0 25% 0'
    }).addClass('show');
})

// nav links click events cover page and display content

let slideNavRender = () => {
    sideNav.css('width', '100vw');
    closeNav.show();
    sideNav.children().hide()
    // return to main page when clicked
    closeNav.on('click', () => {
        closeNav.hide();
        sideNav.children().show()
        sideNav.css('width', '20vw')
    })
}

aboutNav.on('click',() => {
    slideNavRender();

});

// add screenshot of resume & clickable/downloadable pdf
resumeNav.on('click',() => {
    slideNavRender();

});

portfolioNav.on('click',() => {
    slideNavRender();
});

// TODO add form contact in page instead of email pop out. 
contactNav.on()
