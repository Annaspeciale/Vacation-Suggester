$(document).ready(function() {
	$("#blanks form").submit(function(event) {
		var answer1 = $("inpit#cuisine").val();
		var answer2 = $("input#activity").val();
		var answer3 = $("input#clothes").val();
		var answer4 = $("input#season").val();
		var answer5 = $("input#personality").val();


if (answer1 === 'Mexican' && answer2 === 'Laying on the beach' && answer4 === 'Summer') {
	$('mexico').show();
}

});
});
