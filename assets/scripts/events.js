    /* CLICK EVENTS */

// heart icon on CLICK fades out welcome page... 
heart.on('click', ()=> {
    fileIcons.hide();
    mainRender();
})

    /*  ABOUT */
aboutNav.on('click',() => {
    aboutContain.fadeIn(1000);
    aboutP1.html('Hi There! Welcome to my portfolio page. My name is Sam Sweigart. I currently identify as a Front-End Web Developer and am in the pursuit of my Full-Stack identity. For most of my life, I have held a passion for high-level performance and the finer details in what it takes to get there.');
    aboutP2.html('In my journey for a new path, I began exploring html and css. Living life as someone who has a near insatiable curiousity for information and problem solving, I quickly knew that Web Development is something I wanted to explore and with time, become proficient in. Thank you for stopping by my page and taking the time to get to know me a bit better. This space will continue to be a work in progress as I polish my current skills and expand my scope into other aspects of Web Development. Please check in regularly and I would love to hear any feedback you may have to offer.')
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
