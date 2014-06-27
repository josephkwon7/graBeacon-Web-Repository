$(document).ready(function () {
	$('#menu-toggle1').click(function(){
		if($('#menu1').hasClass('open')){
			$('#menu1').removeClass('open');
			$('#menu-toggle1').removeClass('open');
		}else{
			$('#menu1').addClass('open');
			$('#menu-toggle1').addClass('open');
		}
	});
});
$(document).ready(function () {
	$('#menu-toggle2').click(function(){
		if($('#menu2').hasClass('open')){
			$('#menu2').removeClass('open');
			$('#menu-toggle2').removeClass('open');
		}else{
			$('#menu2').addClass('open');
			$('#menu-toggle2').addClass('open');
		}
	});
});
$(document).ready(function () {
	$('#menu-toggle3').click(function(){
		if($('#menu3').hasClass('open')){
			$('#menu3').removeClass('open');
			$('#menu-toggle3').removeClass('open');
		}else{
			$('#menu3').addClass('open');
			$('#menu-toggle3').addClass('open');
		}
	});
});