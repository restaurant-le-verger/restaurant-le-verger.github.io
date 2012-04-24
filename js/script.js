/* Author: Pierrick CAEN

*/
$(function() {
	$('.carousel').carousel();
});

function initialize() {
	var latlng = new google.maps.LatLng(48.8321381,2.4947867);
	var settings = {
		zoom: 16,
		center: latlng,
		mapTypeControl: true,
		streetViewControl: false,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	var contentString = "<p><b>Restaurant LE VERGER</b><br />10 quai du port - 94130 Nogent sur Marne<br />01-48-71-17-43</p>";
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});	
	var companyImage = new google.maps.MarkerImage('img/maps/logo.png',
		new google.maps.Size(80,70),
		new google.maps.Point(0,0),
		new google.maps.Point(25,60)
	);
	var companyShadow = new google.maps.MarkerImage('img/maps/logo_shadow.png',
		new google.maps.Size(85,70),
		new google.maps.Point(0,0),
		new google.maps.Point(20,60)
	);
	var companyPos = new google.maps.LatLng(48.8321381,2.4947867);
	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage,
		shadow: companyShadow,
		title:"Restaurant LE VERGER",
		zIndex: 3});
	google.maps.event.addListener(companyMarker, 'click', function() {
		infowindow.open(map,companyMarker);
	});
}