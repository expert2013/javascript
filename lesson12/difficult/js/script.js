$(document).ready(function() {

//difficult
function showModal(element){
		
		$(element).on('click', function() {

	$('.modal').css({'position': 'absolute' ,'left': '-100%', 'display': 'block', 'opacity': '0.1'}).animate({'left': '0','opacity': '1.0'},1000);
		$('.overlay').fadeIn(1000);   
	});
};

function hideModal(element){
		
		$(element).on('click', function() {
		$('.modal').css({'display': 'block'}).animate({'opacity': '0'},1000);
		$('.overlay').fadeOut(1000);   
	});
};

$("a[href^='#sheldure']").on('click', showModal("a[href^='#sheldure']")) ;
$('.main_btna').on('click', showModal($('.main_btna'))) ;
$('.main_btn').on('click', showModal($('.main_btn'))) ;

$('.close').on('click', hideModal($('.close')));

// AJAX
 
$('.modal_contact :button').on('click', function() {
     call();
     return false;
});

function call() {
 	  var msg = $('.form-inline').serialize();
        $.ajax({
          type: 'POST',
          url: 'server.php',
          data: msg,
          success: function(data) {
            $('#results').html(data);
            return false;
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }

}); 




