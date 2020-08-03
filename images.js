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

    
        
    
})

// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var viewButtons = document.querySelectorAll('.middle').forEach(button => {
    button.addEventListener('click', event => {
        
        modal.style.display = "block";
        modalImg.src = event.target.parentNode.previousSibling.previousSibling.src;
    })
});




// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}




