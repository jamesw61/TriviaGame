var questionList = ['Who authored the Monroe Doctrine?', "Who is buried in Grant's Tomb?", "What is two plus two?"];
var correctAnswerList = ['John Quincy Adams', 'Nobody', 'four'];
var allAnswerList = [ ['James Monroe', 'James Madison', 'John Quincy Adams', 'Marilyn Monroe'], ['Ulysses S. Grant', 'Julia Dent Grant', 'jefferson', 'grant'], ['one', 'two', 'three', 'four'] ];
var imageList = [ "assets/images/monroe.jpg", "assets/images/grant.jpg", 'assets/images/two.jpg'];
var qcount = 0;
var timer;
var rightAnswers = 0;



activateMouseover();
resetGame();

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
	clearTimeout(timer);
	$('#clickStart').show().html("Start");
	$('.panel-body').not('#clickStart').hide();
	$('#score').html("Wins:  " + rightAnswers);
}


function askQuestion(qcount) {
	
	$('.panel-body').show().css('background-color', 'black');
  	$('#displayQuestion').html(questionList[qcount]);
	$('#answerOne').html(allAnswerList[qcount][0]);
	$('#answerTwo').html(allAnswerList[qcount][1]);
	$('#answerThree').html(allAnswerList[qcount][2]);
	$('#answerFour').html(allAnswerList[qcount][3]);
	$('#clickReset').hide();
	$('#clickStart').hide();	
	$('.displayImage').html('<img src=' + imageList[qcount] + ' >');
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
				rightAnswers++;
        		qcount++;
        		$('#score').html("Wins:  " + rightAnswers);
        		$('.panel-body').hide();
        		$('#clickStart').show().html("Correct - click for next question");
        		haveAllQuestionsBeenAsked ();
        	}      	
        
       		else {
        	// $(this).text('Wrong');
        	$('#clickStart').show().html("Wrong - click for next question");
        	$('.answer').hide();
        	$('#displayQuestion').hide();
        	qcount++;
        	haveAllQuestionsBeenAsked ();
        	};

        }
    
}


//coundown function from stackoverflow
function myCountDown(){
	var n = 8;
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
	qcount++;
	$('.panel-body').hide();
    $('#clickStart').show().html("You ran out of time - click for next question");
    haveAllQuestionsBeenAsked ();
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

function haveAllQuestionsBeenAsked () {
	if(qcount === questionList.length) {
		$('#clickReset').show().html("All questions have been asked - Click Here To Reset");
		$('#clickStart').hide();
	}
}

