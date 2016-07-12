jQuery("#credits").on("click", function() {
    var message = "Game created by Elliot!";
    jQuery("#credits").append(
        "<p>" + message + "</p>"
    );
});
