jQuery.noConflict();
(function( $ ) {
  $(function() {
    // Your Script

    if( $('.btn-print').length > 0 ){

		$(document).on('click', '.btn-print', function(e){
			e.preventDefault();

			var txt = '<style type="text/css">';
			txt += '.coupon-contain {padding: 1em 0;color: #222222;line-height: 1.2em;width: 100%;text-align: center;float: left;border: 1px solid #dddddd;font-family: Arial;font-size: 14px;}';
			txt += '.coupon-contain .header {color: #ef1616;font-weight: bold;font-size: 20px;}';
			txt += '.coupon-contain .price {margin: 0.5em 0;font-family: Lovelo;}';
			txt += '.coupon-contain .price s {color: #ef1616;width: 220px;}';
			txt += '.coupon-contain .price s span {color: #222222;}';
			txt += '.coupon-contain .btn-print {color: #27ccc0;font-weight: bold;cursor: pointer;margin: 1em 0;font-family: Lovelo;}';
			txt += '.coupon-contain .bottom {color: #ada9a9;}';
			txt += '</style>';
			txt += '<div class="coupon-contain">';
			txt += $(this).parent('.coupon-contain').html();
			txt += '</div>';


			var wcoupon = window.open('','test print','height=300,width=300');
			wcoupon.document.body.innerHTML = txt;
			wcoupon.print();
			wcoupon.close();
		});


    }
	
  });
})(jQuery);