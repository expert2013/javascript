$(document).ready(function() {
	//   $("a[href^='#sheldure']").on('click', function() {
	// 			alert(this);
	// 			//$(this).toggleClass('active');
	// 	});

 // $('.main_btna').on('click', function() {
	// 			alert(this);
	// 			//$(this).toggleClass('active');
	// 	});		
//$('[span^="aria-hidden"]')
// $('.close').on('click', function() {
	 			
// 	 			alert(this);
// });

function showModal(element){
		
		$(element).on('click', function() {
		$('.modal').css({'margin-top': '-50em', 'display': 'block'}).animate({top: "50em"},1000);
		$('.overlay').fadeIn(1000);   
	});
};

function hideModal(element){
		
		$(element).on('click', function() {
		$('.modal').css({'display': 'block'}).animate({top: "-50em"},1000);
		$('.overlay').fadeOut(1000);   
	});
};

$("a[href^='#sheldure']").on('click', showModal("a[href^='#sheldure']")) ;
$('.main_btna').on('click', showModal($('.main_btna'))) ;
$('.main_btn').on('click', showModal($('.main_btn'))) ;

$('.close').on('click', hideModal($('.close')));

// $('.main_btn').on('click', function() {
// $('.modal').css({'margin-top': '-50em', 'display': 'block'}).animate({top: "50em"},1000);
// $('.overlay').fadeIn(1000);   
// 	});


}); 




