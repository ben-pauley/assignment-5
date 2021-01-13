//the current hour should have its event text portion highlighted red
//all previous hours should be grey, future hours should be green

// user should be able to click in any time block and change the text
// when save button is clicked, updated text should be stored in local storage
// whenever the page is loaded, all data from local storage should be displayed in time blocks
// there is a lot of styling for the time blocks already in the css file!

//====================================================
// PSEUDOCODE

// variable that stores the current day
// function that checks if save button has been pressed
// if save button has been pressed, data should be saved to local storage
// function that takes data from local storage and outputs it to html whenever page is loaded

$(document).ready(function () {
  $("#currentDay").text(todaysDate());
  $(".saveBtn").click(function () {
    storeEventDetails();
  });
});

function todaysDate() {
  var today = moment().format("dddd, MMMM Do");
  return today;
}

function storeEventDetails() {
  console.log("test");
}
