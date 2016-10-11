window.LoadFinished = false;
window.ReadyFinished = false;
var $window = $(window);
var $body = $('body');

var $calendar;


$window.on('load', function() {
	window.LoadFinished = true;
	if (window.ReadyFinished) {
		Setup();
	}
});

$(document).ready(function() {
	window.ReadyFinished = true;
	if (window.LoadFinished) {
		Setup();
	}
});


function Setup() {
	$calendar = $('#Calendar')

	SetupCalendar();
}

function SetupCalendar(){
$calendar.empty();

	var $card = $('<div>');
		$card.addClass('col-md-3');
		$card.css('opacity', '100');
		$card.appendTo($calendar);

	var $inner = $('<div>');
		$inner.addClass('inner');
		$inner.appendTo($card);

	var $Txt = $('<h4>');
		$Txt.text('Monday');
		$Txt.addClass('centerText');
		$Txt.appendTo($inner);

	// var $roomNameContainer = $('<div>');
	// 	$roomNameContainer.appendTo($inner);

	// 	var $TxtRoom = $('<span>');
	// 	$TxtRoom.text('Room Name: ');		
	// 	$TxtRoom.css('float', 'left');
	// 	$TxtRoom.css('display', 'inline-block');
	// 	$TxtRoom.css('vertical-align', 'middle');

	// 	$TxtRoom.appendTo($roomNameContainer);


	// var $textInput = $('<input>');
	// 	$textInput.css('float', 'right');
	// 	$textInput.css('width', '70%');

	// 	$textInput.on("keydown", function (e) {
	// 		if (e.keyCode == 13) 
	// 		{
	// 			console.log('Enter');
	// 			$add.trigger('click');
	// 		}
	// 	});
	// 	$textInput.appendTo($roomNameContainer);

	// var $filler = $('<br><br>'); 
	// 	$filler.appendTo($inner); 

	// 	$actionBtns = $('<div>');
	// 	$actionBtns.addClass('btn-group-justified');
	// 	$actionBtns.attr('role', 'group');
	// 	$actionBtns.attr('aria-label', '...');
	// 	$actionBtns.appendTo($inner);

	// 	$add = $('<a>');
	// 	$add.addClass('btn');
	// 	$add.addClass('btn-default');
	// 	$add.addClass('btn-xs');
	// 	$add.html('<span class="fa fa-plus"></span>');
	// 	$add.appendTo($actionBtns);

	// 	$add.on('click', function(){

	// 		if($textInput.val() == "")
	// 			$textInput.val('New Room');

	// 		$.ajax({
	// 			type: "POST",
	// 			url: '/AddRoom',
	// 			data: {"name": $textInput.val()},
	// 			success: function(res) {
	// 				SystemInfo = JSON.parse(res);
	// 				SetupRoomCards();
	//     		}
	// 		});

	// 		$textInput.val('');

	// 		return false;
	// 	});
}
