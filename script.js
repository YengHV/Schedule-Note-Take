$(document).ready(function() {
  
  // Event lister for when the saveBtn is pressed
  $(".saveBtn").on("click", function() {
    // Just added this in so user will know if their saved works or not
    alert("Thanks for saving!")
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    
    // Saves the values of the user input
    localStorage.setItem(time, value);
  });

  function hourUpdater() {
    
    // this makes a varible for the time/hour
    var currentHour = moment().hours();

    // loop for the time block
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // This make so when it's past, present, or future the attrubte changes
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();

  // Will update the current time
  var interval = setInterval(hourUpdater, 15000);

  // Pulls the local storage for the hour
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // This will display current day
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
