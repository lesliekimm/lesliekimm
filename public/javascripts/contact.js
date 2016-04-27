$( document ).ready(function() {
	$('form').submit(function(e) {
        console.log('something happened');
		e.preventDefault();
		$.ajax({
			url: "http://formspree.io/leslie@lesliekimm.com", 
            method: "POST",
            data: {
                email: $('.email').val(),
                message: $('.message').val()
            },
            dataType: "json"
        }).error(function(x, status, error){
            alert('Uh oh, something went wrong. Please try again.');
        }). success(function(data, status) {
            alert('Thank you for your message. Leslie will get back to you soon.');
            $('form').find('.email, .message').val('');
        });
       	});
   });