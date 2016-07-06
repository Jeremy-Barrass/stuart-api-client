function ApiSearch(){};

ApiSearch.prototype.go = function(option, url, useResponse){
	var resp, err;
	var request = new XMLHttpRequest();
	request.open(option, url, true);
	request.onload = function(){
		if (request.status >= 200 && request.status < 400) {
			resp = request.responseText;
			err = null;
			console.log(resp);
			useResponse(err, resp);
		} else {
			console.error(request.statusText);
			resp = null;
			err = request.statusText;
			useResponse(err, resp);
		}
	};

	request.onerror = function(e) {
		console.error(request.statusText);
	};

	request.send(null)
};