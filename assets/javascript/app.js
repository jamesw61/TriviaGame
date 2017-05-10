var questionList = ['Who authored the Monroe Doctrine?', 
					"Who is buried in Grant's Tomb?", 
					"Where did the Battle of Bunker Hill take place?", 
					"The USS Constitution, also known as Old Ironsides, is a US Navy frigate made of what metal?"];
var correctAnswerList = ['John Quincy Adams', 'Nobody', "Breed's Hill", "It's not metal, it's wood"];
var allAnswerList = [ ['James Monroe', 'James Madison', 'John Quincy Adams', 'Marilyn Monroe'], 
					['Ulysses S. Grant', 'Julia Dent Grant', 'Mark Twain', 'Nobody'], 
					["Edith's Hill", 'Bunker Hill', "Breed's Hill", 'Hamburger Hill'], 
					["Iron", "It's not metal, it's wood", "Titanium", "Steel"] ];
var imageList = [ "assets/images/monroe.jpg",
				  "assets/images/grant.jpg width=345px height=451px", 
				  "assets/images/bunker.jpg", 
				  "assets/images/ironside.jpg width=382px height=396px"];
var explanations = ["Adams was Monroe's Secretary of State",  
					"US Grant is entombed in an atrium above ground", 
					"The battle started on Bunker Hill but was mostly fought on Breed's Hill", 
					"During a battle in the War of 1812, many of the HMS Guerriere's shots bounced off the Constitution's hull"];
var qcount = 0;
var timer;
var timerTwo;
var rightAnswers = 0;
var wrongAnswers = 0;

function resetGame(){
	qcount = 0;
	rightAnswers = 0;
	wrongAnswers = 0;
	clearTimeout(timer);
	$('#clickStart').show().html("Start");
	$('.panel-body').not('#clickStart').hide();
	$('#score').html("Correct Answers:  " + rightAnswers + "<br><br>Incorrect Answers:  " + wrongAnswers);
}

function askQuestion(qcount) {
	clearTimeout(timerTwo);
	$('.panel-body').show().css('background-color', 'black');
  	$('#displayQuestion').html(questionList[qcount]);
	$('#answerOne').html(allAnswerList[qcount][0]);
	$('#answerTwo').html(allAnswerList[qcount][1]);
	$('#answerThree').html(allAnswerList[qcount][2]);
	$('#answerFour').html(allAnswerList[qcount][3]);
	$('#clickStart').hide();
	$('.nonanswer').hide();
	$('.displayImage').show().html('<img src=' + imageList[qcount] + ' >');
	isThisTheAnswer();
}

function questionCountDown(){
	var n = 6;
	countDown();
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
	// qcount++;
	$('.panel-body').hide();
    $('#clickStart').show().html("You ran out of time - click for next question");
    $('.result').show().html("The correct answer was: " + correctAnswerList[(qcount-1)]);
    $('.displayExp').html(explanations[(qcount-1)]).show();
    timerTwo = setTimeout(nextQuestion,6000);
    wrongAnswers++;
    $('#score').html("Correct Answers:  " + rightAnswers + "<br><br>Incorrect Answers:  " + wrongAnswers);
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
		clearTimeout(timerTwo);
		$('#clickReset').show().html("All questions have been asked - Click Here To Reset");
		$('#clickStart').hide();
		$('.displayImage').hide();
		$('.answer').hide();
		$('#score').html("Correct Answers:  " + rightAnswers + "<br><br>Incorrect Answers:  " + wrongAnswers);
	}
}

function isThisTheAnswer() {
	console.log("a" + rightAnswers);
    var clickedAnswer;   
    qcount++; 
    $('.answer').click(function() {
    	console.log("b" + rightAnswers);
    	clearTimeout(timer);
        clickedAnswer = $(this).text();
        $('.answer').off('click');
        console.log("c" + rightAnswers);
        checkAnswer();
    	});

    	function checkAnswer() {

    		$('.displayExp').html(explanations[(qcount-1)]).show();
    		console.log("d" + rightAnswers);
        	if (clickedAnswer === correctAnswerList[(qcount-1)]) {
        		console.log("e" + rightAnswers);
				rightAnswers++;
				console.log("f" + rightAnswers);
        		$('#score').html("Correct Answers:  " + rightAnswers + "<br><br>Incorrect Answers:  " + wrongAnswers);
        		$('.panel-body').hide();
        		timerTwo = setTimeout(nextQuestion,8000);
        		$('#clickStart').show().html("Correct - click for next question");
        		haveAllQuestionsBeenAsked ();
        	}      	
        
       		else {
       		wrongAnswers++;
        	$('#clickStart').show().html("Wrong - click for next question");
        	$('#score').html("Correct Answers:  " + rightAnswers + "<br><br>Incorrect Answers:  " + wrongAnswers);
        	$('.answer').hide();
        	$('#displayQuestion').hide();
        	$('.result').show().html("The correct answer was: " + correctAnswerList[(qcount-1)]);
        	timerTwo = setTimeout(nextQuestion,8000);
        	
        	haveAllQuestionsBeenAsked ();
        	};
        }    
}

function nextQuestion (){
		askQuestion(qcount);
		questionCountDown();
	}


activateMouseover();
resetGame();

$('#clickStart').on( "click", function() 
	{
		$('.panel-body').show();
		nextQuestion();	
	});

$('#clickReset').on( "click", function()
	{
		resetGame();
	})



	


















