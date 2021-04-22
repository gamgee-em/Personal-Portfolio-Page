"use strict";

console.log('Welcome to my portfolio page. Stop back soon for an update!'); // try moving global variables to seperate variable file...
// then require/export?

var welcomeContain = $('#welcome-container');
var greetUser = $('#greet-user');
var welcomeUser = $('#welcome-user');
var heart = $('#welcome-heart');
var mainContain = $('#main-container');
var navContain = $('.nav-container');
var closeNav = $('.close-nav');
var sideNav = $('#side-nav');
var aboutNav = $('#about-nav');
var resumeNav = $('#resume-nav');
var portfolioNav = $('#portfolio-nav');
var contactNav = $('#contact-nav'); // on LOAD page 'fades out' instantly to create...
// fadeIn effect / look into a smoother way to start?

welcomeContain.fadeOut().fadeIn(2000);
closeNav.hide(); // may not need this 

$(document).ready(function () {}); // love this function name - albeit not a good one 🤣 

var getGitData = function getGitData() {
  var tmResponse, dates;
  return regeneratorRuntime.async(function getGitData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          gitReposRequest = "https://api.github.com/users/timmywheels/repos";
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(tmApiRequest));

        case 3:
          tmResponse = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(tmResponse.json());

        case 6:
          tmData = _context.sent;
          tmEmbeddedKey = tmData._embedded; // events object

          tmEvents = tmEmbeddedKey.events; // gets date for event

          dates = tmEvents[0].dates.start.localDate;
          console.log(tmData);
          renderHtml();
          return _context.abrupt("return", tmData);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}; // heart icon on CLICK fades out welcome page... 
// & adds hide class to then display main page bg-img


heart.on('click', function () {
  welcomeContain.fadeOut(3000, function () {
    // TODO try using the jquery method .hide('speed value') instead 
    welcomeContain.attr({
      style: 'background-color: white',
      "class": 'hide'
    });
  }).empty(); // adds background bg-img to MAIN container when...
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
}); // nav links click events cover page and display content

var slideNavRender = function slideNavRender() {
  sideNav.css('width', '100vw');
  closeNav.show();
  sideNav.children().hide(); // return to main page when clicked

  closeNav.on('click', function () {
    closeNav.hide();
    sideNav.children().show();
    sideNav.css('width', '20vw');
  });
};

aboutNav.on('click', function () {
  slideNavRender();
}); // add screenshot of resume & clickable/downloadable pdf

resumeNav.on('click', function () {
  slideNavRender();
});
portfolioNav.on('click', function () {
  slideNavRender();
}); // TODO add form contact in page instead of email pop out. 

contactNav.on();