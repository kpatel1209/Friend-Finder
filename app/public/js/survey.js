$("#submit").on("click", function() {
    event.preventDefault();

    // Check if the user selected an answer 1-5 for all 10 questions and did not leave it blank or on "Select an Option".
    for (let i = 1; i < 11; i++) {
        if ($.trim($("#question" + [i]).val()) === "" || $("#question" + [i]).val().trim() === "Select an Option") {
            alert("You must answer all of the questions before submitting!");
            return false;
        };
    };

    // Check if the user left their name and/or picture link blank, if so, then alert them.
    if ($.trim($("#name").val()) === "" || $.trim($("#name").val()) === "name") {
        
    
    }












});