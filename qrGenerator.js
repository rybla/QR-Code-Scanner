function generateQRCode(sizeX,sizeY) {
	var s;
	var url = document.getElementById('input').value;
	s = "https://api.qrserver.com/v1/create-qr-code/?data=" + url + "&size=" + sizeX + "x" + sizeY + "bgcolor=7fc7af";
	return s;
}

function displayQRIn(id,sizeX,sizeY) {
	var imghtml = "<img src=" +
		"\""  + generateQRCode(sizeX,sizeY) + "\"" +
		"height=" +
		"\"" + sizeY + "\"" + 
		"witdth=" +
		"\"" + sizeX + "\"" +
		">";
	document.getElementById(id).innerHTML = imghtml;
}