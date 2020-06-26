$(document).ready(() => {
    
    $('#request-quote').click(() => {
        console.log('quote request')
        $('.quote-form').slideDown(100);
        $('#request-quote').hide();
    })
    $('#close').click(() => {
        console.log('closed')
        $('.quote-form').slideUp(100);
        $('#request-quote').show();
    })

    $('#carousel').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            
          ]
    })
        
    
})




