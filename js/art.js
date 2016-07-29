$(window).load(function(){
	var  mn = $("#navbar");
    mns = "navbar-scrolled";
    hdr = $('#splash').height();

	$(window).scroll(function() {
		if( $(window).scrollTop() > hdr ) {
		    mn.addClass(mns);
		} else {
		    mn.removeClass(mns);
		}
	});
});
var map;
function initMap() {
	var myLatLng = {lat: 49.283, lng: -123.120};
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.283, lng: -123.120},
        scrollwheel: false,
        zoom: 6
    });
    var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
    })
}
function toggle() {
    var x = document.getElementById("myTopNav");
    if (x.className == "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}