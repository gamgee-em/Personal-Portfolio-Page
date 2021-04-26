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

$(document).ready(() => {
    greetUser.html('Hello I\'m Sam Sweigart');
    welcomeUser.html('Welcome to my Portfolio');
    aboutNav.html('About');
    resumeNav.html('Resume');
    portfolioNav.html('Portfolio');
    contactNav.first().append($('<a>').attr('href', 'mailto: samuel.sweigart@gmail.com').html('Contact Me'));
})

const mainRender = ()=> {
    welcomeContain.fadeOut(1000, ()=> {
        // TODO: try using the jquery method .hide('speed value') instead 
        welcomeContain.attr('class', 'hide');
    }).empty();

    // adds background bg-img to MAIN container when heart icon is clicked
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
    sideNav.children().hide();
    socialIcons.hide(1000);
    // show elements
    fileIcons.show(1000);
    closeNav.show(1000);
    aboutImg.attr({
        src: './assets/images/sam-nrg-thunderstruck.JPG',
        alt: 'Sam Sweigart on a rock climbing route named \'Thunder Struck\' in the New River Gorge, WV' 
    });

    aboutHeader.html('About Me');
    aboutP1.html('Hi There! Welcome to my portfolio page. My name is Sam Sweigart. I currently identify as a Front-End Web Developer and am in the pursuit of my Full-Stack identity. For most of my life, I have held a passion for high-level performance and the finer details in what it takes to get there.');
    aboutP2.html('In my journey for a new path, I began exploring html and css. Living life as someone who has a near insatiable curiousity for information and problem solving, I quickly knew that Web Development is something I wanted to explore and with time, become proficient in. Thank you for stopping by my page and taking the time to get to know me a bit better. This space will continue to be a work in progress as I polish my current skills and expand my scope into other aspects of Web Development. Please check in regularly and I would love to hear any feedback you may have to offer.');
    
    appCard0.attr('src', './assets/images/project-1-ss.png');
    appCard1.attr('src', './assets/images/day-planner-ss.png');
    appCard2.attr('src', './assets/images/js-quiz-ss.png');
};

const closeNavRender = () => {
    closeNav.hide(1000);
    portCardsContainer.fadeOut(500);
    icons.show(1000);
    resumeIcon.hide(1000);
    socialIcons.show(1000);
    fileIcons.hide(1000);
    aboutContain.fadeOut(500);
    // show ul li elements
    sideNav.children().show(1000);
    sideNav.css('width', '20vw');
    icons.css('width', '25vw');
}

getGitData();