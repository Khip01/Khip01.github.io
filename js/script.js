/* NAVBAR */
const menuToggle =  document.querySelector('.menu-toggle input');
const navbar = document.querySelector('.navbarSett nav ul');

menuToggle.addEventListener('click', function() {
	navbar.classList.toggle('appear');
});

/* BIO */
const pressTextBio =  document.querySelector('.about .content form input');
const bioText = document.querySelector('#about .about .content #contentBoxBio');

pressTextBio.addEventListener('click', function() {
	bioText.classList.toggle('appear');
});

function navColl() {
  const element = document.getElementById("navChangeId");
  if (element.className == "navbar-top") {
    element.className = "navbar-top-change";
  } else {
    element.className = "navbar-top";
  }
}

/* BIO ANIMATION CLICK */
const firstAnimationActive = document.querySelector('#about .about .content #contentBoxBio .contentGroup .first-text');
const secondAnimationActive = document.querySelector('#about .about .content #contentBoxBio .contentGroup .second-text');
const thirdAnimationActive = document.querySelector('#about .about .content #contentBoxBio .contentGroup .third-text');
const fourthAnimationActive = document.querySelector('#about .about .content #contentBoxBio .contentGroup .fourth-text');
const fifthAnimationActive = document.querySelector('#about .about .content #contentBoxBio .contentGroup .fifth-text');
const sixthAnimationActive = document.querySelector('#about .about .content #contentBoxBio .contentGroup .sixth-text');
const seventhAnimationActive = document.querySelector('#about .about .content #contentBoxBio .contentGroup .seventh-text');
const eighthAnimationActive = document.querySelector('#about .about .content #contentBoxBio .contentGroup .eighth-text');
const ninthAnimationActive = document.querySelector('#about .about .content #contentBoxBio .contentGroup .ninth-text');

pressTextBio.addEventListener('click', function() {
  firstAnimationActive.classList.toggle('active');
  secondAnimationActive.classList.toggle('active');
  thirdAnimationActive.classList.toggle('active');
  fourthAnimationActive.classList.toggle('active');
  fifthAnimationActive.classList.toggle('active');
  sixthAnimationActive.classList.toggle('active');
  seventhAnimationActive.classList.toggle('active');
  eighthAnimationActive.classList.toggle('active');
  ninthAnimationActive.classList.toggle('active');
});


/* PROJECT DISPLAY CHILD CARD */
// By button
function displayContent1() { //contBox 1
  var cardChild1 = document.getElementById("cardChild1");
  var title1 = document.getElementById("title1");
  var cardChild2 = document.getElementById("cardChild2");
  var title2 = document.getElementById("title2");

  if (cardChild1.style.display === "flex") {
    cardChild1.style.display = "none";
    title1.style.display = "none";

    cardChild2.style.display = "none";
    title2.style.display = "none";
  } else {
    cardChild1.style.display = "flex";
    title1.style.display = "block";
    $("a.goto").attr("href", "#title1"); // A class goto GOTO SECTION #title 1
    
    cardChild2.style.display = "none";
    title2.style.display = "none";
  }
}

function displayContent2() { //contBox 2
  var cardChild1 = document.getElementById("cardChild1");
  var title1 = document.getElementById("title1");
  var cardChild2 = document.getElementById("cardChild2");
  var title2 = document.getElementById("title2");

  if (cardChild2.style.display === "flex") {
    cardChild1.style.display = "none";
    title1.style.display = "none";

    cardChild2.style.display = "none";
    title2.style.display = "none";
  } else {
    cardChild1.style.display = "none";
    title1.style.display = "none";
    
    cardChild2.style.display = "flex";
    title2.style.display = "block";
    $("a.goto").attr("href", "#title2"); // A class goto GOTO SECTION #title 2
  }
}

// // By fas fa arrow right
// var cardChild1Btn = document.querySelector('.card.card1 i');

// cardChild1Btn.addEventListener('click', function() { //arrowBox 1
//   if (cardChild1.style.display === "flex") {
//     cardChild1.style.display = "none";
//     title1.style.display = "none";

//     cardChild2.style.display = "none";
//     title2.style.display = "none";
//   } else {
//     cardChild1.style.display = "none";
//     title1.style.display = "none";
    
//     cardChild2.style.display = "flex";
//     title2.style.display = "block";
//   }
// });

// var cardChild2Btn = document.querySelector('.card.card2 i');

// cardChild2Btn.addEventListener('click', function() { //arrowBox 2
//   if (cardChild2.style.display === "flex") {
//     cardChild1.style.display = "none";
//     title1.style.display = "none";

//     cardChild2.style.display = "none";
//     title2.style.display = "none";
//   } else {
//     cardChild1.style.display = "none";
//     title1.style.display = "none";
    
//     cardChild2.style.display = "flex";
//     title2.style.display = "block";
//   }
// });
