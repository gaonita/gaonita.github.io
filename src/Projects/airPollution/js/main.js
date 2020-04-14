function getPollution(lat, lon){
	var postData = {
		limit: 1,
		coordinates: lat + ',' + lon,
		radius:10000
	};

	$.ajax({
		method: 'GET',
		url: "https://api.openaq.org/v1/latest",
		data: postData
	}).done(function(data){
		console.log(data);
		showPollution(data);
	})
}

function showPollution(poop){
	$("#page2").css('display', 'none');
	$("#page3").css('display', 'block');
	$("#results").html("The " + poop.results[0].measurements[0].parameter + " level in " + poop.results[0].location + ", " + poop.results[0].city + " is " + poop.results[0].measurements[0].value + poop.results[0].measurements[0].unit);
}

$("#startbutton").on("click", function(){
	$('#page1').css('display','none');
	$('#page2').css('display','block');
	navigator.geolocation.getCurrentPosition(function(position){
		console.log(position.coords.latitude, position.coords.longitude);
		getPollution(position.coords.latitude, position.coords.longitude);
	});
});

$("#backbutton").on("click", function(){
	$('#page3').css('display', 'none');
	$('#page1').css('display', 'block');
})