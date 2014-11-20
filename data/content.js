var resource = null;

var endsWith = function(str, suffix) {
	return str.indexOf(suffix, str.length - suffix.length) !== -1;
};

var removeFedora = function(outerSelector, innerSelector) {
	$(outerSelector).each(function(index, element) {
		var href = $(element).find(innerSelector).attr("href");

		if(typeof _.find(resource.fedoras, function(fedora) { 
			return endsWith(href, fedora);
		}) !== "undefined") {
			$(this).remove();
		}
	});
};

$.getJSON("https://raw.githubusercontent.com/hadalin/chrome-hidefedora/master/hidefedora/resources/fedoras.json", function(res) {
	resource = res;
});


$(function() {

	setInterval(function() {
		if(resource !== null) {
			removeFedora(".Yp.yt.Xa", ".ve.oba.HPa > a");
			removeFedora(".Ik.Wv", ".fR > a");
		}
	}, 2000);

});
