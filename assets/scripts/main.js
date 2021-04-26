// on LOAD page 'fades out' instantly to create...
// fadeIn effect / look into a smoother way to start?
welcomeContain.fadeOut(500);
welcomeContain.fadeIn(1000);
closeNav.hide();
portCardsContainer.hide();
icons.hide();
resumeIcon.hide();
aboutContain.hide();
heart.effect('pulsate',{times: 25}, 30000);

  /* RENDER HTML FUNCTIONS */

// & adds hide class to then display main page bg-img
const mainRender = ()=> {
    welcomeContain.fadeOut(1000, ()=> {
        // TODO: try using the jquery method .hide('speed value') instead 
        welcomeContain.attr('class', 'hide');
    }).empty();

    // adds background bg-img to MAIN container when...
    // heart is clicked
    // TODO: switch for local img do not rely on external links if poss
    mainContain.css({
        'background': 'url(https://www.w3schools.com/howto/img_parallax.jpg)',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        'background-position': 'center',
        'font-size': '1.5vw'
    });

    sideNav.css({
        color: 'black',
        background: 'linear-gradient(135deg,rgb(176, 187, 199) 40%,rgb(128, 128, 128) 40%)',
        height: '100vh',
        width: '20vw',
        padding: '5% 0 15% 0'
    }).show(1000);
    
    icons.fadeIn(1000);
}

// nav link tags click event covers page and display content
const slideNavRender = () => {
    sideNav.css('width', '100vw');
    icons.css('width', '99vw');

    // hide elements
    sideNav.children().hide()
    socialIcons.hide(1000)
    // show elements
    fileIcons.show(1000);
    closeNav.show(1000);
};

const closeNavRender = () => {
    closeNav.hide(1000);
    portCardsContainer.fadeOut(500);
    icons.show(1000)
    resumeIcon.hide(1000)
    socialIcons.show(1000)
    fileIcons.hide(1000)
    aboutContain.fadeOut(500);
    // show ul li elements
    sideNav.children().show(1000)
    sideNav.css('width', '20vw')
    icons.css('width', '25vw');
}


getGitData();