/*Start Navbar Activation*/
// let as = document.querySelectorAll("ul li a");

// as.forEach(function (ele) {
//   ele.onclick = function () {
//     as.forEach((a) => {
//       a.classList.remove("active");
//     });
//     this.classList.add("active");
//   };
// });

// var nav = document.getElementById("nav");

// function scrollingNavbar() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     nav.classList.add("fixed");
//   } else {
//     nav.classList.remove("fixed");
//   }
// }

/*End Navbar Activation*/

/*Start Change Color*/

// var colors = document.querySelectorAll(".color ul li");
// var main = document.querySelector("body");
// var img = document.getElementById("img");
// var photo = document.getElementById("img2");
// var box = document.getElementById("box");
// var boxing = document.getElementById("boxing");

// colors.forEach((color) => {
//   color.onclick = function () {
//     main.className = "";
//     img.src = this.getAttribute("data-src");
//     photo.src = this.getAttribute("data-src");
//     main.classList.add(this.getAttribute("data-color"));
//   };
// });

// box.onclick = function () {
//   this.classList.toggle("sj");
//   boxing.classList.toggle("js");
// };

/*End Change Color*/

/*Start Button To Up*/

// var btn = document.getElementById("btn");

// function scrollingTop() {
//   if (
//     document.body.scrollTop > 100 ||
//     document.documentElement.scrollTop > 100
//   ) {
//     btn.classList.remove("d-none");
//   } else {
//     btn.classList.add("d-none");
//   }
// }

// window.onscroll = function () {
//   scrollingNavbar();
//   scrollingTop();
// };

/*End Button To Up*/

/*Start Background Animation */

// var circle = document.getElementById("circle");

// circle.onclick = function () {
//   document.body.scrollTop = 700;
// };

// // Swiping
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

//Tabs

// var tabs = document.querySelectorAll(".row .tab");
// var rows = document.querySelectorAll(".grey .foods");
// // console.log(rows);

// tabs.forEach((ele) => {
//   ele.onclick = function () {
//     tabs.forEach((tab) => {
//       tab.classList.remove("active");
//       rows.forEach((row) => {
//         if (row.getAttribute("data-type") === this.getAttribute("data-tab")) {
//           row.classList.add("d-flex");
//           row.classList.remove("d-none");
//         } else {
//           row.classList.add("d-none");
//           row.classList.remove("d-flex");
//         }
//       });
//     });
//     this.classList.add("active");
//   };
// });

// /*Start Modal Gallery*/
// var modal = document.querySelector(".modal");
// var closeBtn = document.querySelector(".modal .close");
// var squares = document.querySelectorAll(".gallery .square");
// var image = document.querySelector(".modal .back img");

// closeBtn.onclick = function () {
//   modal.classList.remove("appear");
// };

// squares.forEach((square) => {
//   square.onclick = function () {
//     modal.classList.add("appear");
//     image.src = this.firstElementChild.src;
//   };
// });

// /*End Modal Gallery*/
