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
