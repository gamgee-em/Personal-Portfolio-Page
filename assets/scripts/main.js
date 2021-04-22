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
// on LOAD page 'fades out' instantly to create...
// fadeIn effect / look into a smoother way to start?
// TODO: for loop over welcome string and fade in each index (letter)
welcomeContain.fadeOut().fadeIn(1000);
closeNav.hide();
portCardsContainer.hide();
icons.hide();

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
        welcomeContain.attr({
            style: 'background-color: white',
            class: 'hide'
        });
    }).empty();

    // adds background bg-img to MAIN container when...
    // heart is clicked
    // TODO: switch for local img do not rely on external links if poss
    mainContain.css('background', 'url(https://www.w3schools.com/howto/img_parallax.jpg) 100% no-repeat');
    sideNav.css({
        color: 'black',
        background: 'gray',
        height: '100vh',
        width: '20vw',
        padding: '5% 0 25% 0'
    }).show(1000);
    
    icons.fadeIn(1000);

}

// nav link tags click event covers page and display content
const slideNavRender = () => {
    sideNav.css('width', '100vw');
    // hide ul li elements
    closeNav.show();
    sideNav.children().hide()
    icons.hide('slow')
};

    /* CLICK EVENTS */

// heart icon on CLICK fades out welcome page... 
heart.on('click', ()=> {
    mainRender();
})


aboutNav.on('click',() => {
    slideNavRender();

});

// TODO: add screenshot of resume & clickable/downloadable pdf
resumeNav.on('click',() => {
    slideNavRender();

});

portfolioNav.on('click',() => {
    portCardsContainer.show(2000);
    slideNavRender();
});

// TODO: add form contact in page instead of email pop out. 
contactNav.on()

// return to main page when clicked
closeNav.on('click', () => {
    closeNav.hide(1000);
    portCardsContainer.hide(1000);
    // show ul li elements
    sideNav.children().show(1000)
    sideNav.css('width', '20vw')
})