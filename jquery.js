$(document).ready(function() {


	$('#myText').click(function() {
				$('#textHidden').toggle('slow');
			});
	
	var get_header = $('.header-wrapper').outerHeight();


	$('.navigation a').click(function(e) {
		e.preventDefault();
		var a = $(this).attr("href");

		$("html, body").animate({
			scrollTop:$(a).offset().top
		}, 2000)
	});




	$('#btn').click(function() {
		var user_name = $('#user').val();
		var email = $('#email').val();
		var password = $('#pass').val();
		var conpassword = $('#conpass').val();
		var numbers = $('#num').val();
		
		if( user_name == "") {
			$('#error1').text('** please fill the username field');
			$('#error1').css("color" , "red");
			return false;
		}
		if (( user_name.length <=2 ) || ( user_name.length >15)){
			$('#error1').text('** User length must be between 3 and 15 character');
			$('#error1').css("color" , "red");
			return false;
		}



		if ( email == "" ) {
			$('#error2').text('** please fill the email');
			$('#error2').css("color" , "red");
			return false;
		}


		if ( password == "" ) {
			$('#error3').text('** please fill the password');
			$('#error3').css("color" , "red");
			return false;
		}
		if (( password.length <=3 ) || ( password.length >20 )) {
			$('#error3').text('** password length must be between 3 and 20 character');
			$('#error3').css("color" , "red");
			return false;
		}







		if ( conpassword == "" ) {
			$('#error4').text('** please fill the Confirm password');
			$('#error4').css("color" , "red");
			return false;
		}
		if (password != conpassword) {
			$('#error4').text('**password are not matching');
			$('#error4').css("color" , "red");
			return false;
		}



		if( numbers == '' ) {
			$('#error5').text('** please fill the mobile number field');
			$('#error5').css("color" , "red");
			return false;
		}
		if ( numbers.length != 11 ){
			$('#error5').text('** Mobile number must be 11 digits only');
			$('#error5').css("color" , "red");
			return false;
		}

	});




	$('#icon-bar').click(function(){
		
			

		$('.navigation ul').slideToggle('2000'); //.css({"opacity": "1", "visibility": "visible"});

 



		 

	});








});