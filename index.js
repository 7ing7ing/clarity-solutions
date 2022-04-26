// HEADER TRANSPARENCY
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("white-bg");
    $(".contact-button-header").removeClass("hidden");
  } else {
    //remove the background property so it comes transparent again
    $("header").removeClass("white-bg");
    $(".contact-button-header").addClass("hidden");
  }
});

// HAMBURGER TOGGLE
$(".hamburgerButton").click(function (e) {
  e.preventDefault();
  let navList = document.getElementsByClassName("navList");
  let ourServicesSectionTop =
    document.getElementsByClassName("ourServicesSection");
  //$(ourServicesSectionTop).offset().top is how far the section is from the top of the page
  //so we can use this for the nav height to cover everything that appears before that section
  $(navList).css("height", $(ourServicesSectionTop).offset().top - 15 + "px");
});

// ACCORDION
$(".accordion-header").click(function (e) {
  e.preventDefault();
  //Removing is-active and up from all children inside accordion
  $(this).parent(".accordion").find("> *").removeClass("is-active");
  //First select the root of the accordion
  //Then select the headers inside the accordion
  let accordionHeaders = $(this)
    .parent(".accordion")
    .children("div.accordion-header");
  //Loop through the headers, enter the inner div and image and remove class "up"
  for (let i = 0; i < accordionHeaders.length; i++) {
    $(accordionHeaders[i])
      .children("div.flex")
      .children("img")
      .removeClass("up");
  }

  //Add is-active to the body and up to the icon
  $(this).addClass("is-active");
  $(this).next(".accordion-body").addClass("is-active");
  $(this).children("div.flex").children("img").addClass("up");
});

// MODAL WINDOW
let cardId = "";
$(".card-container").click(function (e) {
  let cardData = $(this).data();
  let card;
  switch (cardData.cardName) {
    case "natalie-hodgins":
      card = document.getElementById("natalie-hodgins-card");
      cardId = "natalie-hodgins-card";
      break;
    case "shamshad-khan":
      card = document.getElementById("shamshad-khan-card");
      cardId = "shamshad-khan-card";
      break;
    case "barry-cotter":
      card = document.getElementById("barry-cotter-card");
      cardId = "barry-cotter-card";
      break;
  }

  $(card).css("display", "block");
  $(card).css(
    "top",
    $(window).height() / 2 -
      $(card).outerHeight() / 2 +
      $(window).scrollTop() +
      "px"
  );
  $(card).css("left", $(window).width() / 2 - $(card).outerWidth() / 2 + "px");

  let background = document.getElementById("modal-window-background");
  background.style.display = "block";
  $(background).css("top", 0);
  $(background).css("left", 0);
  $(background).css("height", $(document.body).height());
  $(background).css("width", $(document.body).width());
});

function closeModalWindow() {
  let background = document.getElementById("modal-window-background");
  let card = document.getElementById(cardId);
  $(background).css("display", "none");
  // $(this).css("display", "none");
  $(card).css("display", "none");
}
