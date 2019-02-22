$("#submit").on("click", function() {
    event.preventDefault();

    // Check if the user selected an answer 1-5 for all 10 questions and did not leave it blank or on "Select an Option".
    for (let i = 1; i < 11; i++) {
        if ($.trim($("#question" + [i]).val()) === "" || $("#question" + [i]).val().trim() === "Select an Option") {
            alert("You must answer all of the questions!");
            return false;
        };
    };

    // Check if the user left their name and/or picture link blank, if so, then alert them.
    if ($.trim($("#name").val()) === "" || $.trim($("#name").val()) === "name") {
        alert("You must submit your name AND picture link!");
        $("#name").val("Please enter your name!");
        return false;
    } else if ($.trim($("#photo").val()) === "" || $.trim($("#url").val()) === "photo") {
        $("#photo").val("Enter a valid url address");
        alert("Please fill out all fields before submitting!");
        return false;
    } else {
        let userData = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [$("#question1").val(), $("#question2").val(), $("#question3").val(), $("#question4").val(), $("#question5").val(), $("#question6").val(), $("#question7").val(), $("#question8").val(), $("#question9").val(), $("#question10").val()]
        };

        $.post("/api/friends", userData, function(data) {
            $("#matchName").text(data.name);
            $("#matchImg").attr("src", data.photo);
            $("#resultsModal").modal("toggle");
        });
    };
});