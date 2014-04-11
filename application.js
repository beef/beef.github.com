/* ----- jQuery Start----- */
$(document).ready(function() {
  
  $(".light-switch").click(function() {
    $(this).addClass("clicked").fadeOut(1000);
    $("body").addClass("clicked");
    $('.main-content').delay(1300).slideUp(1000);
    $("html, body").delay(1300).animate({ scrollTop: 0 }, 1000);
    return false;
  });

}); //eo:jquery