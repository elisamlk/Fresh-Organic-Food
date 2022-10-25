$(".handle").on("click", function () {
  $("nav ul").toggleClass("showing");
  if ($("nav ul").hasClass("showing")) {
    $("h1").hide();
    $("i").removeClass("fa-solid fa-bars");
    $("i").addClass("fa-solid fa-xmark");
  } else {
    $("h1").show();
    $("i").removeClass("fa-solid fa-xmark");
    $("i").addClass("fa-solid fa-bars");
  }
});


$(function () {
  $(".more").on("click", function () {
    console.log("ça clique");
    $("html, body").animate(
      {
        scrollTop: $("main").offset().top,
      },
      500
    );
  });
});