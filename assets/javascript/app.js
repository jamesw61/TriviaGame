var questionList = ['What color is the sky?', "Who is buried in Grant's Tomb?", "What is two plus two?"];
var correctAnswerList = ['blue', 'grant', 'four'];
var allAnswerList = [ ['yellow', 'red', 'green', 'blue'], ['monroe', 'adams', 'jefferson', 'grant'], ['one', 'two', 'three', 'four'] ];
// var imageList = [ '../images/monroe.jpg', '../images/grant.jpg', '../images/two.jpg'];
var qcount = 0;
var timer;
var rightAnswers = 0;



activateMouseover();

// $('.panel-body').not('#clickStart').hide();
$('#clickStart').on( "click", function() 
	{
		$('.panel-body').show();
		askQuestion(qcount);
		myCountDown();	
	});

$('#clickReset').on( "click", function()
	{
		resetGame();
	})

function resetGame(){
	qcount = 0;
	rightAnswers = 0;
	$('#clickStart').show().html("Start");
	// $('.panel-body').not('#clickStart').hide();

}


function askQuestion(qcount) {
	
	$('.panel-body').show().css('background-color', 'black');
  	$('#displayQuestion').html(questionList[qcount]);
	$('#answerOne').html(allAnswerList[qcount][0]);
	$('#answerTwo').html(allAnswerList[qcount][1]);
	$('#answerThree').html(allAnswerList[qcount][2]);
	$('#answerFour').html(allAnswerList[qcount][3]);

	// $('#answerOne').off("click");
	// activateMouseover();		
	isThisTheAnswer();
}



function isThisTheAnswer() {
    var clickedAnswer;    
    $('.answer').click(function() {
    	clearTimeout(timer);
        clickedAnswer = $(this).text();
        $('.answer').off('click');
        console.log(clickedAnswer);
        console.log(correctAnswerList[qcount]);
        checkAnswer();
    	});

    	function checkAnswer() {
        	if (clickedAnswer == correctAnswerList[qcount]) {
        		// $('.panel-body').hide();
				rightAnswers++;
        		qcount++;
        		$('#score').html("Wins:  " + rightAnswers);
        		// console.log(qcount);
        		$('.panel-body').hide();
        		$('#clickStart').show().html("Correct - click for next question");
        		// qcountIsFive();
        	}      	
        
       		else {
        	console.log("Wrong");
        	$(this).text('Wrong');
        	// $('.panel-body').hide();
        	$('#clickStart').show().html("Wrong - click for next question");
        	qcount++;
        	// qcountIsFive();
        	// console.log(qcount);
        	};

        }
    
}

// function qcountIsFive () {
// 	if(qcount=3){
// 		$('.panel-body').hide();
// 		$('.clickReset').show();
// 	}
// }
//coundown function from stackoverflow
function myCountDown(){
	var n = 16;
	countDown();
	// timer = setTimeout(countDown,1000);
	function countDown(){
  	 	n--;
   		if(n > 0){
     	timer = setTimeout(countDown,1000);
     	$('#timeLeft').html(n);
     	}
     	else if (n == 0){
     		timeIsUp();
     	};
   	}
   	
}

function timeIsUp() {
	$('.panel-body').hide();
    $('#clickReset').show().html("You ran out of time");
}

function displayPossibleAnswers () {
	$('#answerOne').html(allAnswerList[value][0]);
	$('#answerTwo').html(allAnswerList[value][1]);
	$('#answerThree').html(allAnswerList[value][2]);
	$('#answerFour').html(allAnswerList[value][3]);
}

function activateMouseover() {
	mouseoverById('#answerOne');
	mouseoverById('#answerTwo');
	mouseoverById('#answerThree');
	mouseoverById('#answerFour');
	mouseoverById('#clickStart');
	mouseoverById('#clickReset');
}

function mouseoverById (id) {
	$(id).mouseover(function(){
    $(id).css("background-color", "darkgreen");
	});

	$(id).mouseout(function(){
    $(id).css("background-color", "black");
	});	
}



