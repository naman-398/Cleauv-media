
//preloader
setTimeout(() => {
  preloader.classList.add("d-none")
  preloader.classList.add("overflow-hidden")
}, 3000)
//back-to-top
 document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("back-to-top");

  // Show the button when the user scrolls down 200px from the top
  window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          button.style.display = "block";
      } else {
          button.style.display = "none";
      }
  };

  // Scroll back to the top when the button is clicked
  button.onclick = function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  };
});


//s2-slider

$('.s2-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speedAutoplay: 2000,
    arrow: false,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
          },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // s3-slider

  // $('.s3-slider').slick({
  //   centerMode: true,
  //   centerPadding: '20%',
  //   slidesToShow: 1,
  //   infinite: true,
  //   autoplay: true,
  //   speedAutoplay: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: "unslick"
  //     },
  //   ]
  // });

$('.s3-slider').slick({
  centerMode: true,
  centerPadding: '22%',
  slidesToShow: 1,
  autoplay: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        centerMode: true,
      centerPadding: '18%',
    }
    },
    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
      centerPadding: '14%',
    }
    },
    {
      breakpoint: 1100,
      settings: {
        centerMode: true,
      centerPadding: '10%',
    }
    },
    {
      breakpoint: 992,
      settings: "unslick" 
    }
  ]
});
  //s7-slider
  $('.s7-slider').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '20%',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speedAutoplay: 2000,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: null,
    // centerPadding: '0%',
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: null,
        }
      }

    ]
  });
  //nav-bar
  let nav = document.querySelector(".nav");
let menubar = document.querySelector(".mobile-view");
let loadtake = document.querySelector(".nav-logo")
let finish = document.querySelectorAll(".finish");
let overlay = document.querySelector(".over-layer")
let bgbody = document.querySelector(".bg-bodys");
let span1 = document.querySelector(".line1");
let span2 = document.querySelector(".line2");
let span3 = document.querySelector(".line3");
nav.addEventListener("click", function () {
    menubar.classList.toggle("left-0")
    nav.classList.toggle("cross-bg")
    nav.classList.toggle("nav-2")
    span1.classList.toggle("nav1")
    span2.classList.toggle("nav2")
    span3.classList.toggle("nav3")
    overlay.classList.toggle("left-0")
    bgbody.classList.toggle("over-flow")
})
overlay.addEventListener("click", function () {
    menubar.classList.toggle("left-0")
    span1.classList.toggle("nav1")
    nav.classList.toggle("cross-bg")
    span2.classList.toggle("nav2")
    span3.classList.toggle("nav3")
    overlay.classList.toggle("left-0")
    bgbody.classList.toggle("over-flow")
})
finish.forEach(e => {
    e.addEventListener("click", function () {
        menubar.classList.remove("left-0")
        span1.classList.toggle("nav1")
        nav.classList.toggle("cross-bg")
        span2.classList.toggle("nav2")
        span3.classList.toggle("nav3")
        bgbody.classList.remove("over-flow")
        overlay.classList.toggle("left-0")
        span2.classList.toggle("nav2")
        span3.classList.toggle("nav3")
    })
});