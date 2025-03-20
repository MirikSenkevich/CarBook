$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    dotsEach: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1215: {
        items: 3,
      },
    },
  });
});
$(document).ready(function () {
  var show = true;
  var countbox = ".benefits_element";
  $(window).on("scroll load resize", function () {
    if (!show) return false;
    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;
    var w_height = $(window).height();
    var d_height = $(document).height();
    var e_height = $(countbox).outerHeight();
    if (
      w_top + 500 >= e_top ||
      w_height + w_top == d_height ||
      e_height + e_top < w_height
    ) {
      $(".benefits_number").spincrement({
        thousandSeparator: ",",
        duration: 2500,
      });
      show = false;
    }
  });
});
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("showel");
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".noel");
for (let elm of elements) {
  observer.observe(elm);
}
window.addEventListener("scroll", (e) => {
  var element = document.querySelector(".navbar");
  if (pageYOffset > 300) element.classList.add("scrolled");
  else element.classList.remove("scrolled");
});
window.addEventListener("scroll", (e) => {
  var element = document.querySelector(".mn_dropdown_nav");
  if (pageYOffset > 300) element.classList.add("scrolled");
  else element.classList.remove("scrolled");
});

var kl = 0;
$(document).ready(function () {
  $(".bt_dropdown").click(function () {
    if (kl === 0) {
      $(".mn_dropdown").addClass("show"), (kl = 1);
    } else {
      $(".mn_dropdown").removeClass("show"), (kl = 0);
    }
  });
});
var kl1 = 0;
$(document).ready(function () {
  $(".bt_dropdown_nav").click(function () {
    if (kl1 === 0) {
      $(".mn_dropdown_nav").addClass("show"), (kl1 = 1);
    } else {
      $(".mn_dropdown_nav").removeClass("show"), (kl1 = 0);
    }
  });
});
