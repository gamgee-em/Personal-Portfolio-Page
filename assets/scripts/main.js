console.log('Welcome to my portfolio page. Stop back soon for an update!');
// try moving global variables to seperate variable file...
// then require/export?
const welcomeContain = $('#welcome-container');
const greetUser = $('#greet-user');
const welcomeUser = $('#welcome-user');
const heart = $('#welcome-heart');
const mainContain = $('#main-container');
const navContain = $('.nav-container');
const closeNav = $('#close-nav');
const sideNav = $('#side-nav');
const aboutNav = $('#about-nav');
const resumeNav = $('#resume-nav');
const portfolioNav = $('#portfolio-nav');
const contactNav = $('#contact-nav');
const portCardsContainer = $('#portfolio-cards-container');
const icons = $('#icons');
const socialIcons = $('#social-icons');
const fileIcons = $('#file-icons');
const aboutContain = $('#about-container')
const resumeIcon = $('#resume-icon');
// on LOAD page 'fades out' instantly to create...
// fadeIn effect / look into a smoother way to start?
welcomeContain.fadeOut(500);
welcomeContain.fadeIn(1000);
closeNav.hide();
portCardsContainer.hide();
icons.hide();
resumeIcon.hide();
aboutContain.hide();

    /* API CALLS */

// TODO: try to use github api to retrieve repo links - not necessary but fun
// love this function name - albeit not a good one 🤣
const getGitData = async () => {
    const gitApiRequest = `https://api.github.com/users/gamgee-em/repos`;
    // combine awa
    const gitData = await (await fetch(gitApiRequest)).json();
    const projectObj = gitData[9];
    console.log(projectObj)
    return gitData;
  }
  getGitData();

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

    /* CLICK EVENTS */

// heart icon on CLICK fades out welcome page... 
heart.on('click', ()=> {
    fileIcons.hide();
    mainRender();
})

    /*  ABOUT */
aboutNav.on('click',() => {
    aboutContain.fadeIn(1000);
    slideNavRender();
});

    /* RESUME */
resumeNav.on('click',() => {
    resumeIcon.show(1000);
    slideNavRender();
});

    /* PORTFOLIO */
portfolioNav.on('click',() => {
    portCardsContainer.fadeIn(1000);
    slideNavRender();
});

    /* CONTACT */
// TODO: add form contact in page instead of email pop out. 
contactNav.on()

    /* CLOSE SLIDERS */
// return to main page when clicked
closeNav.on('click', () => {
    closeNavRender();
})