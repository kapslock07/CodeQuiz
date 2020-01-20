var answers = $("<button>");

$("#startButton").on("click", function () {

    $("#mainSection").html("<p>This is Question 1</p>");
    var q1a1 = $("#answer1").html("<button>Answer 1</button>");
    q1a1.addClass("correctAnswer1");
    var q1a2 = $("#answer2").html("<button>Answer 2</button>");
    q1a2.addClass("wrongAnswer1");
    var q1a3 = $("#answer3").html("<button>Answer 3</button>");
    q1a3.addClass("wrongAnswer1");
    var q1a4 = $("#answer4").html("<button>Answer 4</button>");
    q1a4.addClass("wrongAnswer1");
});

$(".correctAnswer1").on("click", function () {

    var secondQuestion = $("#mainSection").html("<p>This is Question 2</p>");
    var q2a1 = $("#answer1").html("<button>Answer 1</button>");
    var q2a2 = $("#answer2").html("<button>Answer 2</button>");
    var q2a3 = $("#answer3").html("<button>Answer 3</button>");
    var q2a4 = $("#answer4").html("<button>Answer 4</button>");
});

$(".wrongAnswer1").on("click", function () {
    alert("WRONG!");
});