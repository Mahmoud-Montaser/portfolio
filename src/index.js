import "./scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min";
$(() => {
  $("#TogglerBtn").on("click", function () {
    $(".list-container").css({
      right: "0",
    });
  });
  $("#exitBtn").on("click", function () {
    $(".list-container").css({
      right: "-100vw",
    });
  });
  $(".portfolio .container .row .col-sm-12 .card").hover(
    function () {
      $(this).find(".overlay").fadeIn("fast");
      $(this).find(".overlay").css("display", "flex");
    },
    function () {
      $(this).find(".overlay").fadeOut("fast");
    }
  );
  $(".portfolio-btn").click(function () {
    window.location.href =
      "https://github.com/Mahmoud-Montaser?tab=repositories";
  });
  ("use strict");
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
  let toTop = document.querySelector(".scroll-top");
  toTop.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
});
