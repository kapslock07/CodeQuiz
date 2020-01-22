// ----------------METHOD 1--------------------------
$(document).ready(function () {
    var timeLeft = 75;

    $("#form").hide();

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
        {
            title: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
            choices: ["The User's machine running a Web browser", "The Web server", "A central machine deep within Netscape's corporate offices", "one of the above"],
            answer: "The User's machine running a Web browser"
        },
        {
            title: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
            choices: ["<script>", "<body>", "<head>", "<title>"],
            answer: "<script>"
        },
        {
            title: "The _______ method of an Array object adds and/or removes elements from an array.",
            choices: ["Reverse", "Shift", "Slice", "Splice"],
            answer: "Splice"
        },
    ];

    $("#startButton").on("click", function () {

        $("#form").hide();

        setInterval(function () {
            timeLeft--;
            if (timeLeft >= 0) {
                $("#timer").html("Time left: " + timeLeft);

            }
            if (timeLeft <= 0) {

                //also do end of quiz function here
                clearInterval(timeLeft);
                gameOver();
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
            index++;
            displayQuestion();
        }
        else {
            timeLeft -= 10;
        }


        //if there are questions left

        //else show score function

    });

    //localStorage.getItem()
    //inside of click listner:
    localStorage.setItem("name", timeLeft)




    function gameOver() {




        $("#mainSection").text("Please enter your name")
        $("#form").show();

        // $(document).on("click", ".#saveButton", function (event) {
        //     localStorage.setItem("name", timeLeft)




        // window.location.href = "highscores.html";
        // $("#yourScore").append(timeLeft);
        //show score
        //form.show

    };



});