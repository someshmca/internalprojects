$(document).ready(function(){
	
	$('#measure').DataTable( {
        "scrollY":        "500px",
        "scrollX":        "800px",
        "scrollCollapse": true,
        "paging":         false,
		"searching":false
    } );
	
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});