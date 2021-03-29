// load font  to be used later 
var witches_font = new FontFace('Witches', 'url(assets/fonts/the-witches-font/TheWitches-mLo59.ttf)');
witches_font.load().then(function (loaded_face) {
  document.fonts.add(loaded_face);
}).catch(function (error) {
  // error occurred
});

// quote text change 
function changeText1(x) {
  x.innerHTML = "“One child a week is fifty-two a year. Squish them and squiggle them and make them disappear”";
}

function changeTextBack1(x) {
  x.innerHTML = "“One child a week is fifty-two a year. Love them and feed them and make them live fair”";
}

// text change in post 
function changeTextPost(x) {
  x.innerHTML = "The other day a witch reported to us that she failed to catch one of the children in her neighborhood. Below we have the full exchange of what she tried, and we will use it as a learning opportunity. She began by saying, “Come down out of that tree, little boy, and...";
}

function changeTextBackPost(x) {
  x.innerHTML = "Kindness can be described as the value of being polite, compassionate, and thoughtful.Unconditional love, tenderness, comfort, concern, and support are words associated with skindness. These are the ways to speak to those beloved, small ...";
}

// flower image change 
function changeImage(x) {
  x.setAttribute('src', 'assets/images/dead-flower.png');
  x.style.marginTop = "3em"
  x.style.height = "6em";
  x.style.width = "5em";
}

function changeImageBack(x) {
  x.setAttribute('src', 'assets/images/flower.png');
  x.style.height = "10em";
  x.style.marginTop = "0em"
}

// text change 2 
function changeText2(x) {
  x.innerHTML = "those sneaky little *%$&!@*";
}

function changeTextBack2(x) {
  x.innerHTML = "they’re always happy to help";
}

// girl image change 
function changeImage2() {
  document.getElementById("witch").style.display = "flex";
}

function changeImageBack2() {
  document.getElementById("witch").style.display = "none";
}

// invite text change  

function changeText3(x) {
  x.innerHTML = "Witches";
}

function changeTextBack3(x) {
  x.innerHTML = "Society";
}

function changeText4(x) {
  x.innerHTML = "Be there.";
}

function changeTextBack4(x) {
  x.innerHTML = "We’d love to see you there!";
}

// A WHOLE NEW WORLD OF DARKNESS
function promptMsg() {
  var word = prompt("What does the world need more of?");
  if (word.toLowerCase() === "mice") {
    $('#body').fadeOut(7000);
    // remove hover effects
    setTimeout(removeHover, 7000);
    // change page completely 
    setTimeout(changeAllFont, 7000);
    setTimeout(changeAllImages, 7000);
    setTimeout(changeAllColors, 7000);
    setTimeout(changeAllText, 7000);
    $('#body').fadeIn(7000);
  }
}

// remove all hover effects
function removeHover() {
  var elements = document.getElementsByClassName("hover");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.style.pointerEvents = "none";
  }
}


// end text change 
function changeText5(x) {
  x.innerHTML = "END?";
}

function changeTextBack5(x) {
  x.innerHTML = "END!";
}

// change fonts from niconne to Witches 
function changeAllFont() {
  var elements = document.getElementsByClassName("font-change");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.style.fontFamily = 'Witches';
  }
}

// change images from society style to witch style
function changeAllImages() {
  // change section 1 background image 
  document.getElementById("section01").style.backgroundImage = "url('assets/images/eerie.jpg')";

  // change flower images 
  var flowers = document.getElementsByClassName("flower-img");
  for (var i = 0; i < flowers.length; i++) {
    var flower = flowers[i];
    // disable hover flower change 
    // flower.style.pointerEvents = "none";
    $(flower).attr('src', 'assets/images/dead-flower.png');
    flower.style.marginTop = "3em"
    flower.style.height = "6em";
    flower.style.width = "5em";
  }

  // chnage girl image 
  $("#girl").attr('src', 'assets/images/creepy-girl.png');
  // disable hover girl change 
  // document.getElementById("girl").style.pointerEvents = "none";

  // change flower images 
  var mice = document.getElementsByClassName("mouse");
  for (var i = 0; i < mice.length; i++) {
    var mouse = mice[i];
    // disable hover mouse change 
    // mouse.style.pointerEvents = "none";
    $(mouse).attr('src', 'assets/images/dark_mouse.png');
  }
}

// change colors from society style to witch style
function changeAllColors() {
  // chnage body background color 
  document.body.style.backgroundColor = "#0B1C26";

  // change front  page color 
  document.getElementById("title-text").style.backgroundColor = "rgba(0, 0, 0, 0.75)";


  // chnage posts colors 
  var posts = document.getElementsByClassName("post");
  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];
    post.style.backgroundColor = "#32402F";
  }

  // chnage more button colors 
  var buttons = document.getElementsByClassName("more_button");
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.style.backgroundColor = "#936C43";
  }

  // chnage invite background color 
  document.getElementById("invite").style.backgroundColor = "#852227";

  // chnage recipe background color 
  document.getElementById("recipe").style.backgroundColor = "#CDDB79";

  // font color changes

  // black to white  
  // change h2 
  var h2Elements = document.getElementsByTagName("h2");

  for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.color = "#fff";
  }

  // change h3
  var h3Elements = document.getElementsByTagName("h3");

  for (var i = 0; i < h3Elements.length; i++) {
    h3Elements[i].style.color = "#fff";
  }

  // change bright red text to dark red 
  var red_text = document.getElementsByClassName("red-font");
  for (var i = 0; i < red_text.length; i++) {
    var text = red_text[i];
    text.style.color = "#852227";
  }

  // change p
  var pElements = document.getElementsByTagName("p");

  for (var i = 0; i < pElements.length; i++) {
    pElements[i].style.color = "#fff";
  }


  // pink to brown 
  document.getElementById("right_text").style.color = "#936C43";

  // change recipe text
  var recipeText = document.getElementsByClassName("white-text");

  for (var i = 0; i < recipeText.length; i++) {
    // recipeText[i].style.color = "#CDDB79";
    var text = recipeText[i];
    text.style.color = "#32402F";
  }
}

// change text from society style to witch style
function changeAllText() {
  // first section 
  document.getElementById("title").innerHTML = "Witches of the World";
  document.getElementById("quote").innerHTML = "“One child a week is fifty-two a year. Squish them and squiggle them and make them disappear";
  document.getElementById("right_text").innerHTML = "- Grand High Witch";
  // second section 
  document.getElementById("span1").innerHTML = "Grand High Witch";
  document.getElementById("post_text1").innerHTML = "Here are a few things I expect you English witches to have by the next annual meeting. Don’t ask questions. 1) A good location for a candy store (2) Lots of alarm clocks (3) Mice traps. I know you English witches are the laziest, sloppiest, most idiotic of the ...";
  document.getElementById("post_text2").innerHTML = "The other day a witch reported to us that she failed to catch one of the children in her neighborhood. Below we have the full exchange of what she tried, and we will use it as a learning opportunity. She began by saying, “Come down out of that tree, little boy, and...";
  // third section 
  document.getElementById("title3").innerHTML = "Dangers Facing Us";
  document.getElementById("p1").innerHTML = "A WITCH NEVER GETS CAUGHT";
  document.getElementById("p3").innerHTML = "so watch out for";
  document.getElementById("p2").innerHTML = "WITCHOPHILES AND NORWEGIANS";
  document.getElementById("p4").innerHTML = "those sneaky little *%$&!@*";
  document.getElementById("span2").innerHTML = "Grand High Witch";
  document.getElementById("post_text3").innerHTML = "Forgot to mention this before, but I am really sick of the ridiculous way some of you wear your wigs. I have seen some of you scratching and scratching until your fingers actually go UNDER the wig, what are you doing you absolute morons, do you...";
  // fourth section 
  document.getElementById("span-text").innerHTML = "Grand High Witch";
  document.getElementById("place").innerHTML = "Where: <br> The Hotel Magnificent <br> Bournemouth, England";
  document.getElementById("time").innerHTML = "When: <br> Dec 15,  1968 <br> 4:00 pm - 5:30pm";
  document.getElementById("order").innerHTML = "Be there.";
  document.getElementById("post_text4").innerHTML = "The GREATEST GENIUS among us has once again developed the most BRILLIANTLY CUNNING plan to rid us of those pesky little dog-poo smelling brats! For those of us lucky enough attend the meeting (and woe to those who don’t) , we will have a ...";
  // fifth and final section 
  document.getElementById("title-5").innerHTML = "Bonus<span style=\"font-family: EB-Garamond;\">:</span> Formula <span style=\"font-family: EB-Garamond;\">86</span> Delayed Action Mouse-Maker Recipe!";
  document.getElementById("recipe-title").innerHTML = "She's Done it Again!";
  document.getElementById("recipe-description").innerHTML = "Here is the BRILLIANT recipe for the  GENIUS plan our GREATEST has developed!";
  document.getElementById("ingredients").innerHTML = "• 1 wrong end of telescope <br> •	45 brown mice <br> • 3 tbsp hair oil	<br> • 1/2 cup frog juice <br> • 1 alarm clock <br> • 1 yolk of gruntle’s egg <br> • 1 claw of a crab-crunchher	<br> • 1 beak of a blabbersnitch	<br> •	1 snout of a grobblesquirt <br> •	1 tongue of a catspringer ";
  document.getElementById("end").style.fontSize = "1vw";
  document.getElementById("end").style.marginTop = "5vh";
  document.getElementById("end").innerHTML = "Witches of the World";
  
}