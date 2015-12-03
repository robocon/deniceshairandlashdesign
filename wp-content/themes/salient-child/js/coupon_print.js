jQuery.noConflict();
(function( $ ) {
  $(function() {
    // Your Script

    if( $('.print-coupon-contain').length > 0 ){
    	$(document).on('click', '.print-coupon-contain .nectar-button', function(e){
	    	e.preventDefault();

	    	var test_txt = '<style type="text/css">';
	    	test_txt += 'body{ text-align: center; color: #222222; font-family: Arial; }';
	    	test_txt += 'h3{ color: #ef1616; font-weight: bold; font-family: Lovelo; }';
	    	test_txt += '.coupon-custom{ width: 300px; }';
			test_txt += '.nectar-button{ color: #27ccc0; font-weight: bold; text-decoration: none; font-family: Lovelo; }';
	    	test_txt += 'p:last-child{ color: #ada9a9; }';
	    	test_txt += '</style>';
	    	test_txt += '<div class="coupon-custom">';
	    	test_txt += $(this).parents('.pricing-column').html();
	    	test_txt += '</div>';

	    	var testprint = window.open('','test print','height=300,width=300');
		    testprint.document.body.innerHTML = test_txt;
		    testprint.print();
		    testprint.close();

	    });
    }
	
  });
})(jQuery);