$(document).ready(function() {
	// VARIABLES FOR SCREEN WIDTH
	var x = $(window).width();
	var sm = 768;
	var md = 1025;
	var lg = 1400;
	console.log(x);
});
	// reveal questions
	$(window).on('scroll', function() {
	    scrollPosition = $(this).scrollTop();
	    console.log(scrollPosition);
	    if (scrollPosition >= 300) {
	        // If the function is only supposed to fire once
	        $(this).off('scroll');
	        // Other function stuff here...
	        $('#collapseOne').slideDown(700).addClass('in');
	    }
	});
	// question 1 answer = yes
	function q1Yes() {
		$('#headingOne a').text( 'Your child is struggling in school');
		question1()
	}	
	// question 1 answer = no
	function q1No() {
		$('#headingOne a').text( 'Your child is not struggling in school!');
		question1()
	}	
	// question 1
	function question1() {
		// hide question 1
		$('#collapseOne').slideUp().removeClass('in');
		// show question 2
		$('#q2').removeClass('hidden');
		$('#collapseTwo').slideDown().addClass('in');
	}
	// question 2
	function question2() {
		// hide question 2
		$('#collapseTwo').slideUp().removeClass('in');
		// get user answer - store as value
		var value = $( "#collapseTwo select" ).val();
		// change text to show answer
		$('#headingTwo a').text( 'Your child is in grade ' + value );
		// show question 3
		$('#q3').removeClass('hidden');
		$('#collapseThree').slideDown().addClass('in');
	}
	// question 3
	function question3() {
		// hide question 3
		$('#collapseThree').slideUp().removeClass('in');
		// get user answer - store as value
		var value = $( "#collapseThree select" ).val();
		// change text to show answer
		$('#headingThree a').text( 'Your child needs help in ' + value );
		// show Call to Action
		$('#cta').removeClass('hidden');
		$('#collapseFour').slideDown().addClass('in');
	}
	// call to action
	function cta() {
		
	}
	// redisplay questions - if user clicks the heading of a question
	$('#headingOne a').on('click', function() {
		$('#collapseOne').css('display', 'block');
	});
	$('#headingTwo a').on('click', function() {
		$('#collapseTwo').css('display', 'block');
	});
	$('#headingThree a').on('click', function() {
		$('#collapseThree').css('display', 'block');
	});
	$('#headingFour a').on('click', function() {
		$('#collapseFour').css('display', 'block');
	});

