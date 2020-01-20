// ----------------METHOD 1--------------------------

var q1Answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
var q2Answers = ["q2-Answer 1", "Answer 2", "Answer 3", "Answer 4"]
var answerButton = ""

$("#startButton").on("click", function () {

    $("#mainSection").html("<p>This is Question 1</p>");

    var counter = 20;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            $("#timer").html("Time left: " + counter);

        }
        if (counter === 0) {
            alert('Sorry, you are out of time');
            clearInterval(counter);
        }
    }, 1000);

    for (var i = 0; i < q1Answers.length; i++) {
        answerButton = $("<button>");
        answerButton.attr("data-answer", q1Answers[i]);
        answerButton.text(q1Answers[i]);
        $("#answer1").append(answerButton).append("<div></div>");
    };


});

$("#answer1").on("click", function () {
    $("#mainSection").html("<p>This is Question 2</p>");
    for (var i = 0; i < q2Answers.length; i++) {
        answerButton = $("<button>");
        answerButton.attr("data-answer", q2Answers[i]);
        answerButton.text(q2Answers[i]);
        $("#answer1").html(answerButton).append("<div></div>");
    };

    //  $(q1Answers[0]).on("click", function () {
    //         alert("WRONG!");
    //     }
});

// --------------------------------------------
// var clickButton = $("#startButton").on("click", function () {
//     var firstQuestion = $("#mainSection").html("<p>This is Question 1</p>" + "<div><button>Answer 1</button></div>" + "<div><button>Answer 2</button></div>" + "<div><button>Answer 3</button></div>" + "<div><button>Answer 4</button></div>");
// });








// --------------METHOD 2-------------

// $("#startButton").on("click", function () {


//     $("#mainSection").html("<p>This is Question 1</p>");
//     var q1a1 = $("#answer1").html("<button>Answer 1</button>");
//     q1a1.addClass("correctAnswer1");
//     var q1a2 = $("#answer2").html("<button>Answer 2</button>");
//     q1a2.addClass("wrongAnswer1");
//     var q1a3 = $("#answer3").html("<button>Answer 3</button>");
//     q1a3.addClass("wrongAnswer1");
//     var q1a4 = $("#answer4").html("<button>Answer 4</button>");
//     q1a4.addClass("wrongAnswer1");

//     var counter = 20;
//     setInterval(function () {
//         counter--;
//         if (counter >= 0) {
//             $("#timer").html("Time left: " + counter);

//         }
//         if (counter === 0) {
//             alert('Sorry, you are out of time');
//             clearInterval(counter);
//         }
//     }, 1000);

// });


// $(".correctAnswer1").on("click", function () {

//     var secondQuestion = $("#mainSection").html("<p>This is Question 2</p>");
//     var q2a1 = $("#answer1").html("<button>Answer 1</button>");
//     var q2a2 = $("#answer2").html("<button>Answer 2</button>");
//     var q2a3 = $("#answer3").html("<button>Answer 3</button>");
//     var q2a4 = $("#answer4").html("<button>Answer 4</button>");
// });

// $(".wrongAnswer1").on("click", function () {
//     alert("WRONG!");
// });


// var answerQ2 = $(q2a2).on("click", function () {

//     var secondQuestion = $("#mainSection").html("<p>This is Question 3</p>");
//     var q2a1 = $("#answer1").html("<button>Answer 1</button>");
//     var q2a2 = $("#answer2").html("<button>Answer 2</button>");
//     var q2a3 = $("#answer3").html("<button>Answer 3</button>");
//     var q2a4 = $("#answer4").html("<button>Answer 4</button>");
// });

// ------------METHOD 3--------------------------------
//     var possibleOutcomes = [true, false]

// $("#startButton").on("click", function () {

//     $("#mainSection").html("<p>This is Question 1</p>");
//     var q1a1 = $("#answer1").html("<button>Answer 1</button>");
//     q1a1.attr("answerResult", possibleOutcomes[0]);
//     var q1a2 = $("#answer2").html("<button>Answer 2</button>");
//     q1a2.attr("answerResult", possibleOutcomes[1]);
//     var q1a3 = $("#answer3").html("<button>Answer 3</button>");
//     q1a3.attr("answerResult", possibleOutcomes[1]);
//     var q1a4 = $("#answer4").html("<button>Answer 4</button>");
//     q1a4.attr("answerResult", possibleOutcomes[1]);
// });

// var firstAnswer = $(".buttons").on("click", function () {
//     if (firstAnswer.$(this).attr("answerResult") = possibleOutcomes[0]) {

//         var secondQuestion = $("#mainSection").html("<p>This is Question 2</p>");
//         var q2a1 = $("#answer1").html("<button>Answer 1</button>");
//         var q2a2 = $("#answer2").html("<button>Answer 2</button>");
//         var q2a3 = $("#answer3").html("<button>Answer 3</button>");
//         var q2a4 = $("#answer4").html("<button>Answer 4</button>");
//     }
//     else {
//         alert("WRONG!");
//     }
// });

// ------------------METHOD 3------------------


// var q1Answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
// var answerButton = $("<button>");


// $("#startButton").on("click", function () {

//     $("#mainSection").html("<p>This is Question 1</p>");

//     for (var i = 0; i < q1Answers.length; i++) {
//         // $("#answer1").append((q1Answers[i]) + "<div></div>");
//         var answerButton = $("<button>");
//         answerButton.attr("data-answer", q1Answers[i]);
//         answerButton.text(q1Answers[i]);
//         $("#answer1").append(answerButton).append("<div></div>");
//     };

//     var counter = 20;
//     setInterval(function () {
//         counter--;
//         if (counter >= 0) {
//             $("#timer").html("Time left: " + counter);

//         }
//         if (counter === 0) {
//             alert('Sorry, you are out of time');
//             clearInterval(counter);
//         }
//     }, 1000);
// });

// $(q1Answers[0]).on("click", function () {

//     var secondQuestion = $("#mainSection").html("<p>This is Question 2</p>");
//     var q2a1 = $("#answer1").html("<button>Answer 1</button>");
//     var q2a2 = $("#answer2").html("<button>Answer 2</button>");
//     var q2a3 = $("#answer3").html("<button>Answer 3</button>");
//     var q2a4 = $("#answer4").html("<button>Answer 4</button>");
// });

// $(".wrongAnswer1").on("click", function () {
//     alert("WRONG!");
// });

// --------------------------------------------
// var clickButton = $("#startButton").on("click", function () {
//     var firstQuestion = $("#mainSection").html("<p>This is Question 1</p>" + "<div><button>Answer 1</button></div>" + "<div><button>Answer 2</button></div>" + "<div><button>Answer 3</button></div>" + "<div><button>Answer 4</button></div>");
// });

