var myMp4 = document.getElementById("mp4"),
	myWebm = document.getElementById("webm"),
	myVid = document.getElementById("myVideo"),
	mp4Url = "",
	webmUrl = "";

function playVid(ID) {
	switch (ID) {
		case "one":
			mp4Url = "https://www.fredrickjaxx.is/_assets/video/blossoms.mp4";
			webmUrl = "https://www.fredrickjaxx.is/_assets/video/blossoms.Webm";
			break;
		case "two":
			mp4Url = "https://www.fredrickjaxx.is/_assets/video/splash.mp4";
			webmUrl = "https://www.fredrickjaxx.is/_assets/video/splash.Webm";
			break;
		case "three":
			mp4Url = "https://fredrickjaxx.is/_assets/video/transport.mp4";
			webmUrl = "https://www.fredrickjaxx.is/_assets/video/transport.Webm";
			break;
		case "four":
			mp4Url = "https://fredrickjaxx.is/_assets/video/walking.mp4";
			webmUrl = "https://fredrickjaxx.is/_assets/video/walking.Webm";
			break;
	}
	myMp4.setAttribute("src", mp4Url);
	myWebm.setAttribute("src", webmUrl);
	myVid.load();
	myVid.play();
	myVid.poster = "";
}