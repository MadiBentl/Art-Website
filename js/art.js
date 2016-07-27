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
