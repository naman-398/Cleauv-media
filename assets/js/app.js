
//preloader
setTimeout(() => {
  preloader.classList.add("d-none")
  preloader.classList.add("overflow-hidden")
}, 2000)
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

  $('.s3-slider').slick({
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    speedAutoplay: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: "unslick"
      },
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