$(document).ready(function () {
	window.grid = new Grid();

	grid.initMatrix(gridData);
	grid.render($('#grid'));

	window.client = new Faye.Client('http://localhost:3000/faye');

	client.subscribe('/messages', function(message) {
		console.log(message);
		$('.grid tr:eq('+ message.y +') td:eq('+ message.x +')').css('background-color', message.color);
	});
});