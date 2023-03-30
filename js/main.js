/*Start Navbar Activation*/
let as = document.querySelectorAll("ul li a");

as.forEach(function (ele) {
  ele.onclick = function () {
    as.forEach((a) => {
      a.classList.remove("active");
    });
    this.classList.add("active");
  };
});

var nav = document.getElementById("nav");

function scrollingNavbar() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
}

/*End Navbar Activation*/

/*Start Change Color*/

var colors = document.querySelectorAll(".color ul li");
var main = document.querySelector("body");
var img = document.getElementById("img");
var photo = document.getElementById("img2");
var box = document.getElementById("box");
var boxing = document.getElementById("boxing");

colors.forEach((color) => {
  color.onclick = function () {
    main.className = "";
    img.src = this.getAttribute("data-src");
    photo.src = this.getAttribute("data-src");
    main.classList.add(this.getAttribute("data-color"));
  };
});

box.onclick = function () {
  this.classList.toggle("sj");
  boxing.classList.toggle("js");
};

/*End Change Color*/

/*Start Button To Up*/

var btn = document.getElementById("btn");

console.log(btn);
function scrollingTop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btn.classList.remove("d-none");
  } else {
    btn.classList.add("d-none");
  }
}

window.onscroll = function () {
  scrollingNavbar();
  scrollingTop();
};

/*End Button To Up*/

/*Start Background Animation */

var circle = document.getElementById("circle");

circle.onclick = function () {
  document.body.scrollTop = 700;
};

// Swiping
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Tabs

var tabs = document.querySelectorAll(".row .tab");
var rows = document.querySelectorAll(".grey .foods");
// console.log(rows);

tabs.forEach((ele) => {
  ele.onclick = function () {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      rows.forEach((row) => {
        if (row.getAttribute("data-type") === this.getAttribute("data-tab")) {
          row.classList.add("d-flex");
          row.classList.remove("d-none");
          console.log("true");
        } else {
          row.classList.add("d-none");
          row.classList.remove("d-flex");
          console.log("false");
        }
      });
    });
    this.classList.add("active");
  };
});

/*Start Modal Gallery*/
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".modal .close");
var squares = document.querySelectorAll(".gallery .square");
var image = document.querySelector(".modal .back img");
console.log(image);

closeBtn.onclick = function () {
  modal.classList.remove("appear");
};

squares.forEach((square) => {
  square.onclick = function () {
    modal.classList.add("appear");
    image.src = this.firstElementChild.src;
  };
});

console.log(modal.firstElementChild);
/*End Modal Gallery*/

/*
tabs.forEach((ele) => {
  ele.onclick = function () {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    this.classList.add("active");
  };
});
*/

/*
myElements.forEach((myElement) => {
  myElements.onmouseover = function () {
    myElement.children[1].classList.remove("d-flex");
    myElement.children[1].classList.add("d-none");
  };
myElement.onmouseover = function () {
  myElement.children[1].classList.remove("d-none");
  myElement.children[1].classList.add("d-flex");
};
});

function onmouseover(){
  Element.children[1].classList.remove("d-none");
  Element.children[1].classList.add("d-flex");
}
function onmouseout(){
  Element.children[1].classList.remove("d-flex");
  Element.children[1].classList.add("d-none");
}

End Background Animation 

jslint browser: true
global $, document, 

$(document).ready(function () {
    'use strict';
    $(".owl-carousel").owlCarousel({
        autoplay: 200,
        loop: true,
        nav: true,
        itemsCustom: true
    });
});
$(document).ready(function () {
    'use strict';
    $(".one").hover(function () {
        $(".one > div").addClass("gal");
        $(".gallery .one i").show();
    }, function () {
        $(".one > div").add("gal");
        $(".gallery .one i").hide();
    });
    }, function () {
        $(".`one > div").add("gal");
        $(".gallery .one i").hide();
    });

    $(".two").hover(function () {
        $(".two > div").addClass("gal");
        $(".gallery .two i").show();
    }, function () {
        $(".two > div").removeClass("gal");
        $(".gallery .two i").hide();
    });

    $(".three").hover(function () {
        $(".three > div").addClass("gal");
        $(".gallery .three i").show();
    }, function () {
        $(".three > div").removeClass("gal");
        $(".gallery .three i").hide();

    });

    $(".four").hover(function () {
        $(".four > div").addClass("gal");
        $(".gallery .four i").show();
    }, function () {
        $(".four > div").removeClass("gal");
        $(".gallery .four i").hide();
    });

    $(".five").hover(function () {
        $(".five > div").addClass("gal");
        $(".gallery .five i").show();
    }, function () {
        $(".five > div").removeClass("gal");
        $(".gallery .five i").hide();
    });

    $(".six").hover(function () {
        $(".six > div").addClass("gal");
        $(".gallery .six i").show();
    }, function () {
        $(".six > div").removeClass("gal");
        $(".gallery .six i").hide();
    });

    $(".seven").hover(function () {
        $(".seven > div").addClass("gal");
        $(".gallery .seven i").show();
    }, function () {
        $(".seven > div").removeClass("gal");
        $(".gallery .seven i").hide();
    });

    $(".eight").hover(function () {
        $(".eight > div").addClass("gal");
        $(".gallery .eight i").show();
    }, function () {
        $(".eight > div").removeClass("gal");
        $(".gallery .eight i").hide();
    });

    $(".nine").hover(function () {
        $(".nine > div").addClass("gal");
        $(".gallery .nine i").show();
    }, function () {
        $(".nine > div").removeClass("gal");
        $(".gallery .nine i").hide();
    });

    $(".ten").hover(function () {
        $(".ten > div").addClass("gal");
        $(".gallery .ten i").show();
    }, function () {
        $(".ten > div").removeClass("gal");
        $(".gallery .ten i").hide();
    });

});

$(document).ready(function () {
    'use strict';
    $(".gear").click(function () {
        $(".color-option").fadeToggle();
    });
    $(".box").click(function () {
        $(".color").toggleClass("js");
        $(".box").toggleClass("sj");
    });
});
$(document).ready(function () {
    'use strict';

    var colorLi = $(".color ul li");

    colorLi
        .eq(0).css("backgroundColor", "#e75b1e").end()
        .eq(1).css("backgroundColor", "#1e69b8").end()
        .eq(2).css("backgroundColor", "#8dc635").end()
        .eq(3).css("backgroundColor", "#fdcb03");

    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr('data-color'));
    });

});

$(document).ready(function () {

    'use strict';

    var scrollButton = $("#scrollbut");

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 500) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
        console.log($(this).scrollTop());
    });

    scrollButton.click(function () {
        $("html, body").animate({scrollTop: 0}, 800);
    });

    var am = $("#anm");

    am.click(function(){
        $("html, body").animate({scrollTop: 600}, 500)
    });

    $(".navbar-dark .navbar-collapse > .navbar-nav > li > a").click(function(){
        $(this).addClass("active")
    });

});

$(".ourteam div").hover(function () {
        $(".card-img-top").css("opacity", ".5");
        $(".card-body").css("background-color", "#e75b1e");
        $(".card-body h4").css("color", "#fff");
        $(".card-body p").css("color", "#fff");
    },
        function () {
            $(".card-img-top").css("opacity", "1");
            $(".card-body").css("background-color", "#fff");
            $(".card-body h4").css("color", "#000");
            $(".card-body p").css("color", "#000");
        });
*/
