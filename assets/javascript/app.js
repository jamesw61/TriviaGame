
var	one  = 
	{
		question: 'What color is the sky',
		correctAnswer: 'blue',
		allAnswers: ['yellow', 'red', 'green', 'blue']
	};

var	two = 
	{
		question: "Who is buried in Grant's Tomb?",
		correctAnswer: 'grant',
		allAnswers: ['monroe', 'adams', 'jefferson', 'grant']
	};

//hides panels
$( '.panel-body' ).not( "#answerOne" ).hide();
//makes a start button that asks a question when clicked
$('#answerOne').html("Start!").on( "click", function() 
	{
		askQuestion(one);

		
		
	});

function askQuestion(array) {
	$('.panel-body').show();
  	$('#answerOne').html("Possible Answer 1");
  	$('#question').html(array.question);
  	array.allAnswers = shuffle(array.allAnswers);
	$('#answerOne').html(array.allAnswers[0]);
	$('#answerTwo').html(array.allAnswers[1]);
	$('#answerThree').html(array.allAnswers[2]);
	$('#answerFour').html(array.allAnswers[3]);
	$('#answerOne').off("click");
	activateMouseover()
	isThisTheAnswer(array);
	// console.log(this.allAnswers);
	return
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

function isThisTheAnswer(array) {
    var x;
    $('.answer').click(function() {
        x = $(this).text();
        checkAnswer();
    });
    function checkAnswer() {
        if (x == array.correctAnswer) {
        	console.log("Correct");
        	$('.panel-body').hide();
        	$('#answerOne').show().html("Correct");
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



