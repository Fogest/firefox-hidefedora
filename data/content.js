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

var execute = function() {
	if(resource !== null) {
		removeFedora(".Yp.yt.Xa", ".ve.oba.HPa > a");
		removeFedora(".Ik.Wv", ".fR > a");
	}
};

$.getJSON("https://raw.githubusercontent.com/hadalin/chrome-hidefedora/master/hidefedora/resources/fedoras.json", function(res) {
	resource = res;
});


$(function() {

	// Set MutationObserver
	var target = document.querySelector('.yJa');
	 
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
	var observer = new MutationObserver(function() {
		execute();
	});
	 
	var config = { childList: true, subtree: true };
	 
	observer.observe(target, config);

	// Execute removal a couple of times before MutationObserver kicks in
	var counter = 0;
	var interval = setInterval(function() {
		execute();

    	counter++;
    	if(counter === 8) {
        	clearInterval(interval);
    	}
	}, 1000);

});
