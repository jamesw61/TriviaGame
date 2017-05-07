var questions = [one, two, three];
var	one  = 
	{
		question: 'What color is the sky?',
		correctAnswer: 'blue',
		allAnswers: ['yellow', 'red', 'green', 'blue']
	};

var	two = 
	{
		question: "Who is buried in Grant's Tomb?",
		correctAnswer: 'grant',
		allAnswers: ['monroe', 'adams', 'jefferson', 'grant']
	};

var three = 
	{
		question: "What is two plus two?",
		correctAnswer: 'four',
		allAnswers: ['one', 'two', 'three', 'four']
	};
var timer;
var rightAnswers = 0;

//hides panels
$( '.panel-body' ).not( "#answerOne" ).hide();
//makes a start button that asks a question when clicked
$('#answerOne').html("Start!").on( "click", function() 
	{
		askQuestion(three);
	});

//coundown function from stackoverflow
function myCountDown(){
	var n = 16;
	setTimeout(countDown,1000);
	function countDown(){
  	 	n--;
   		if(n > 0){
     	setTimeout(countDown,1000);
   	}
   	$('#timeLeft').html(n);
	}
}
//diplays the question/answers/timer
function askQuestion(array) {
	
	timer = setTimeout(timeIsUp, 16000);
	$('.panel-body').show();
  	$('#question').html(array.question);
  	array.allAnswers = shuffle(array.allAnswers);
	$('#answerOne').html(array.allAnswers[0]);
	$('#answerTwo').html(array.allAnswers[1]);
	$('#answerThree').html(array.allAnswers[2]);
	$('#answerFour').html(array.allAnswers[3]);
	$('#answerOne').off("click");
	activateMouseover();
	myCountDown();		
	isThisTheAnswer(array);
}

function timeIsUp() {
	$('.panel-body').hide();
    $('#answerOne').show().html("You ran out of time");
}

function displayPossibleAnswers () {
	$('#answerOne').html(array.allAnswers[0]);
	$('#answerTwo').html(array.allAnswers[1]);
	$('#answerThree').html(array.allAnswers[2]);
	$('#answerFour').html(array.allAnswers[3]);
}

//copied from stackoverflow
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//determines if the clicked answer is correct
function isThisTheAnswer(array) {
    var x;    
    $('.answer').click(function() {
    	clearTimeout(timer);
        x = $(this).text();
        checkAnswer();
    });
    function checkAnswer() {
        if (x == array.correctAnswer) {
        	$('.panel-body').hide();
        	$('#answerOne').show().html("Correct");
        	rightAnswers++;
        }
        else {
        	console.log("Wrong");
        	$(this).text('Wrong');
        	$('.panel-body').hide();
        	$('#answerOne').show().html("Wrong");
        }
    }
}



function activateMouseover() {
	mouseoverById('#answerOne');
	mouseoverById('#answerTwo');
	mouseoverById('#answerThree');
	mouseoverById('#answerFour');
}

function mouseoverById (id) {
	$(id).mouseover(function(){
    $(id).css("background-color", "darkgreen");
	});

	$(id).mouseout(function(){
    $(id).css("background-color", "black");
	});	
}



