$(document).ready(function() {
  
  Cufon.replace('#tagline h2' , { fontFamily: 'Gotham Book', hover: true });
  Cufon.replace('#contact h2, #tagline h2 span, #meet-us h4, #mailing h4, #legal h4, #job h4, #content h3' , { fontFamily: 'Gotham Medium', hover: true });
  
  
	$('#email').click(
    function() {
      if (this.value == "Email") {
        this.value = '';
      }
    }
  );
  
  $('#email').blur(
    function() {
      if (this.value == '') {
        this.value = "Email";
      }
    }
  );
  
  if($("#site-gallery ul li div").length > 2) {
	  $("#site-gallery").prepend("<a href='#' id='site-back'>Backward</a>");
	  $("#site-gallery").append("<a href='#' id='site-forward'>Forward</a>");

	  $("#site-gallery").jCarouselLite({
	    btnNext: "#site-forward",
	    btnPrev: "#site-back",
		visible: 1
	  });
	}
	
	if($("#quote-gallery ul li div").length > 2) {
	  $("#quote-gallery").prepend("<a href='#' id='quote-back'>Backward</a>");
	  $("#quote-gallery").append("<a href='#' id='quote-forward'>Forward</a>");

	  $("#quote-gallery").jCarouselLite({
	    btnNext: "#quote-forward",
	    btnPrev: "#quote-back",
	    visible: 1
	  });
	}
  
});