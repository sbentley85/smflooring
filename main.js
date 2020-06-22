$(document).ready(() => {
    $('#request-quote').click(() => {
        
        $('.quote-form').slideDown(100);
        $('#request-quote').hide();
    })
    $('#close').click(() => {
        console.log('quote request')
        $('.quote-form').slideUp(100);
        $('#request-quote').show();
    })

    $('.pic').on('mouseenter', (event) => {
        $(event.currentTarget).addClass('active')
    }).on('mouseleave', (event) => {
        $(event.currentTarget).removeClass('active')
    })

})



