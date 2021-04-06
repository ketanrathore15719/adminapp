$(function() {
	$("#navigation li a").click(function(event) {
		event.preventDefault();
		$("#navigation .active").removeClass("active");
		$("#navigation .current").removeClass("current");
		$(this).addClass("active");
		$(this).find("a").addClass("current");
	});
});