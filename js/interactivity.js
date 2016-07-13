
jQuery("#scoresbtn").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append(
      "<br>" + "<ul>" + "<li>" + "Me" + "</li>" + "<li>" + "Myself" +
      "</li>" + "<li>" + "I" + "</li>" + "</ul>");
});

jQuery("#creditsbtn").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append("<br>" + "<p>" + "Game created by Elliot Kouame!" + "</p>");
});

jQuery("#instructionsbtn").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append(
      "<br>" + "<ul>" + "<li>" + "Press SPACE to activate upward thrusters." +
      "</li>" + "<li>" + "Avoid incoming asteroids." + "</li>" + "<li>" +
      "If you crash, just try again!" + "</li>" + "</ul>");
});

jQuery("#conceptbtn").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append(
      "<br>" + "<p>" + "The Kestrel, doing the Kessel Run, " +
      "in the style of Flappy Bird, with the Towerfall Ascension theme." +
      "</p>");
});
