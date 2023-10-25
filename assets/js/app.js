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
  //   // centerMode: true,
  //   // centerPadding: '60px',
  //   slidesToShow: 1.5,
  //   autoplay: true,
  //   speedAutoplay: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         // centerMode: true,
  //         // centerPadding: '40px',
  //         slidesToShow: 3
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         // centerMode: true,
  //         // centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });
  $('.s3-slider').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 2,
    dots: true,
    arrows: true,
    swipe: true,
  //  infinite: true,
    swipeToSlide: true,
    //adaptiveHeight: true,
  });
  
  //s7-slider
  $('.s7-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1.4,
    slidesToScroll: 1,
    autoplay: true,
    speedAutoplay: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });