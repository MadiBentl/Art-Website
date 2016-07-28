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
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.283, lng: -123.120},
        zoom: 6
    });
}