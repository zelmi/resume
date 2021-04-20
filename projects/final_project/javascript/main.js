// information sections 

// play/pause music 
$(function () {
    var isPlaying = false;
    $('#sound-icon').on('click', function () {
        if (isPlaying) {
            $('#audio1').get(0).pause();
            isPlaying = false;
        } else {
            $('#audio1').get(0).play();
            isPlaying = true;
        }

    })

});

// fade in first set of text 
$(document).ready(function () {
    $('#text1').fadeIn(5000).removeClass('text');
    $('#text2').fadeIn(15000).removeClass('text');
    $('#text3').fadeIn(25000).removeClass('text');
    $('#proc1').fadeIn(30000).removeClass('text');
});
let counter = 0;
// remove first text and bring in second set 
function fadeFirst() {
    counter = counter + 1;
    console.log(counter);
    $('#blockext').fadeOut(4000);
    if (counter === 1) {
        setTimeout(changeFirstText, 4000);
    } else if (counter === 2) {
        setTimeout(changeSecondText, 4000);
    } else if (counter === 3) {
        setTimeout(changeThirdText, 4000);
    } else {
        setTimeout(puzzleSectionBegin, 4000);
    };
    $('#blockext').fadeIn(4000);
}

function changeFirstText() {
    document.getElementById("text1").innerHTML = "Voldemort does not know this. In triumph he carries Harry’s apparently lifeless body back to the castle, in a final attempt to crush all defiance against him. But seeing the body breaks out a new battle, this time joined by elves and centaurs, giants and merfolk and this time, the Death Eaters are outnumbered.";
    document.getElementById("text2").innerHTML = "In the midst of the chaos, no one notices Harry get up, and put his invisibility cloak on.";
    document.getElementById("text3").innerHTML = "Inside, the fighting crowds make way for two groups of fighters; one is Bellatrix Lestrange vs Molly Weasley and the other, Lord Voldemort vs McGonagall, Slughorn and Kingsley. The crowds are mesmerized and watch breathlessly. The two witches fight a duel to the death. Molly Weasley kills Bellatrix Lestrange.";
}

function changeSecondText() {
    document.getElementById("text1").innerHTML = "In his fury, Lord Voldemort blasts aside his attackers and raises his wand to avenge his fallen, greatest lieutenant. But before he can utter a curse, a roar of “Protego!” splits the silence of the Great Hall, and an invisible shield is created between him and Molly Weasley.";
    document.getElementById("text2").innerHTML = "And there, to the astonishment of all, stands Harry James Potter.";
    document.getElementById("text3").innerHTML = " ";
    document.getElementById("proc1").innerHTML = "How to Use this Site";
}

function changeThirdText() {
    document.getElementById("text1").innerHTML = "Listen to the rest of the story unravel by placing puzzle pieces in their correct locations. Listen fully to the portion of story each puzzle piece reveals before placing the next piece. <br><br> Please note that it takes around 20 minutes to complete this puzzle.";
    document.getElementById("text2").innerHTML = "Enable audio before proceeding.";
    document.getElementById("text3").innerHTML = " ";
    document.getElementById("proc1").innerHTML = "Begin";
}

// information sections end 

function puzzleSectionBegin() {
    document.getElementById("info").style.display = "none";
    $('#audio1').animate({ volume: 0.5 }, 1000);
    $('#audio1').animate({ volume: 0.2 }, 2000);
    $('#audio1').animate({ volume: 0.1 }, 3000);
    setTimeout($('#audio1').get(0).pause(), 4000);
    document.body.style.background = "black";
    document.getElementById("puzzlePage").style.display = "block";
    $('#audio2').get(0).volume = 0.05;
    $('#audio2').get(0).loop = true;
    $('#audio2').get(0).play();
}

// ending  
function restartEverything() {
    window.location.href = 'index.html';
};