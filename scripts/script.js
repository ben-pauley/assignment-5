$(document).ready(function () {
  $("#currentDay").text(todaysDate());

  loadEventContent();
  applyCSS();
  buttonListeners();

  function buttonListeners() {
    // FAILED ATTEMPT AT MAKING CODE MORE DRY:

    // for (var i = 9; i <= 17; i++) {
    //   var btnID = "#btn" + i;
    //   var eventNum = "event" + i;
    //   $(btnID).click(function () {
    //     storeEventContent(eventNum);
    //   });
    // }

    $("#btn9").click(function () {
      storeEventContent("event9");
    });
    $("#btn10").click(function () {
      storeEventContent("event10");
    });
    $("#btn11").click(function () {
      storeEventContent("event11");
    });
    $("#btn12").click(function () {
      storeEventContent("event12");
    });
    $("#btn13").click(function () {
      storeEventContent("event13");
    });
    $("#btn14").click(function () {
      storeEventContent("event14");
    });
    $("#btn15").click(function () {
      storeEventContent("event15");
    });
    $("#btn16").click(function () {
      storeEventContent("event16");
    });
    $("#btn17").click(function () {
      storeEventContent("event17");
    });
  }

  function todaysDate() {
    return moment().format("dddd, MMMM Do");
  }

  function storeEventContent(eventNum) {
    localStorage.setItem(eventNum, $("#" + eventNum).text());
  }

  function loadEventContent() {
    for (var i = 9; i <= 17; i++) {
      var localStorageKey = "event" + i;
      var eventID = "#event" + i;

      var eventContent = localStorage.getItem(localStorageKey);
      $(eventID).text(eventContent);
    }
  }

  function applyCSS() {
    for (var i = 9; i <= 17; i++) {
      var eventID = "#event" + i;
      var eventValue = $(eventID).attr("value");
      var hourBlock = moment().hour(i);
      if (hourBlock.isSame(moment())) {
        $(eventID).addClass("present");
      } else if (hourBlock.isBefore(moment())) {
        $(eventID).addClass("past");
      } else if (hourBlock.isAfter(moment())) {
        $(eventID).addClass("future");
      }
    }
  }
});
