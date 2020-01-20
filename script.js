// ----------------METHOD 1--------------------------

var timeLeft = 20;
//$("#form").hide();

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    ///etc.
];

$("#startButton").on("click", function () {

    $("#mainSection").html("<p>This is Question 1</p>");

    setInterval(function () {
        timeLeft--;
        if (timeLeft >= 0) {
            $("#timer").html("Time left: " + timeLeft);

        }
        if (timeLeft === 0) {
            alert('Sorry, you are out of time');
            //also do end of quiz function here
            clearInterval(timeLeft);
        }
    }, 1000);


    displayQuestion();

});

var index = 0;

function displayQuestion() {
    $("#mainSection").empty();

    var question = $("<h2>");
    question.text(questions[index].title);
    $("#mainSection").append(question);

    for (var i = 0; i < questions[index].choices.length; i++) {
        answerButton = $("<button>");
        answerButton.attr("data-answer", questions[index].choices[i]);
        answerButton.text(questions[index].choices[i]);
        answerButton.addClass("answerButton");
        $("#mainSection").append(answerButton).append("<div></div>");
    };
}

$(document).on("click", ".answerButton", function (event) {
    //$(this) === event.target

    if ($(this).attr("data-answer") === questions[index].answer) {

    } else {
        timeLeft -= 10;
    }

    // index = index + 1;
    // index += 1;
    //if there are questions left
    index++;
    displayQuestion();
    //else show score function

});

//localStorage.getItem()
//inside of click listner:
localStorage.setItem("name", timeLeft)

// --------------------------------------------
// var clickButton = $("#startButton").on("click", function () {
//     var firstQuestion = $("#mainSection").html("<p>This is Question 1</p>" + "<div><button>Answer 1</button></div>" + "<div><button>Answer 2</button></div>" + "<div><button>Answer 3</button></div>" + "<div><button>Answer 4</button></div>");
// });


function gameOver() {
    //show score
    //form.show

}



