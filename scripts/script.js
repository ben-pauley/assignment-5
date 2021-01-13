// In tag with ID "currentDay" should display the current day

// html should display 9 different blocks, one for each hour of the day (9 am to 5pm)
// --each block should have the 3 blocks of their own
// ----hour, e.g. 10am
// ------white background
// ----space to write an event
// ----save button
// ------button with blue background with save icon
//--the current hour should have its event text portion highlighted red
//--all previous hours should be grey, future hours should be green

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

function todaysDate() {
  var today = moment().format("dddd, MMMM Do");
  return today;
}

$(document).ready(function () {
  $("#currentDay").text(todaysDate());
});
