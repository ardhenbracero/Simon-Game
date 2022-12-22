 //Chosen Color
let gamePattern = [];

let userClickedPattern = [];

let buttonColours = ["red","blue","green","yellow"];

let level = 0;



// Game start
let started = false;


    $(document).keypress(function(){
            if(!started){
                $("#level-title").text("level " + level);
                nextSequence();
                started = true;
            }
    }); 

//Color Clicker 

// Green Color

let sound = new Audio("sounds/green.mp3");

$("#green").on("click", function(){
    $("#green").fadeOut(10).fadeIn(10),sound.play();
});

// Red Color

let redSound = new Audio("sounds/red.mp3");

$("#red").on("click", function(){
    $("#red").fadeOut(10).fadeIn(10),redSound.play();
});

// Yellow color

let yellowSound = new Audio("sounds/yellow.mp3");

$("#yellow").on("click", function(){
    $("#yellow").fadeOut(10).fadeIn(10),yellowSound.play();
});

// Blue color

let blueSound = new Audio("sounds/blue.mp3");

$("#blue").on("click", function(){
    $("#blue").fadeOut(10).fadeIn(10),blueSound.play();
});
// error sound
let errorSound = new Audio("sounds/wrong.mp3");


// Selecting what color button is clicked
$("button").click(function(){
    let userChosenColour = $(this).attr("id");

    // an array of selected color
    userClickedPattern.push(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

    console.log(userClickedPattern);
});



function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
               nextSequence() 
            }, 1000);
        }
    } else{
        $("h1").text("Game over. Press Any Key To Restart");
        $("body").ready(function(){
            $("body").addClass("game-over")
            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 2000),errorSound.play();
        });
        $(document).ready(function(){
            $("body").keypress(function(){
                location.reload();
            })
        })
    } 
}

function nextSequence(){

    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    console.log(gamePattern);
    console.log(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
};

nextSequence();



// addClass pressed when the button is clicked
$("button").on("click", function(){
    let $bntPress = $(this);
    $bntPress.addClass("pressed");
    setTimeout(function(){
        $bntPress.removeClass("pressed");
    },100);
});










