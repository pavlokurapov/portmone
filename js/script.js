var PR = false;
$('#mobile-button').on('click', function(e) {
	var menu = $('#menu ul');
	var li = $('#menu ul li');
	if(!PR) {
		menu.removeClass('no-display');
		menu.addClass('block');
		li.addClass('block');
		PR = true;
	} else {
		menu.removeClass('block');
		menu.addClass('no-display');
		PR = false;
		li.removeClass('block');
	}
});

// setInterval(function() {
// 	var menu = $('#menu ul');
// 	var li = $('#menu ul li');
// 	if($(window).width() >= 685) {
// 		menu.css('display', 'inline-block');
// 		li.css('display', 'table-cell');
// 	} else if (PR) {
// 		menu.css('display', 'none');
// 		PR = false;
// 		li.css('display', 'block');
// 	}
// }, 1000);