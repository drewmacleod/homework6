var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 

	console.log("Play Video");
	video.play();
	let vol = video.volume * 100;
	let percent = vol.toString() + "%"
	document.getElementById("volume").innerHTML = percent;
} 

function pauseVid() { 

	console.log("Pause Video");
	video.pause();
} 

function decreaseSpeed() { 
	video.playbackRate = video.playbackRate * 0.8;
  	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is " + video.playbackRate);
}
function skipAhead() {
	let length = video.duration;
	let sixty_ahead = video.currentTime + 60;
	if (sixty_ahead < length) {
		video.currentTime = sixty_ahead;
	}
	else {
		video.currentTime = 0;
		video.playbackRate = 1;
		video.pause();
	}
	console.log("Current location is " + video.currentTime);
} 

function mute() { 
	if (video.muted == true) {
		video.muted = false;
		document.getElementById("mute").innerHTML = "mute";
		console.log("Unmuted");
	}
  	else {
  		video.muted = true;
  		document.getElementById("mute").innerHTML = "unmute";
  		console.log("Muted");
  	}
}

function changeVolume() {
	video.volume = document.getElementById("volumeSlider").value/100;	
	let vol = video.volume * 100;
	let percent = vol.toString() + "%";
	document.getElementById("volume").innerHTML = percent;
	console.log("Volume is " + vol);
}
       

function gray() { 
	document.getElementById('myVideo').className = 'grayscale';
	console.log("In grayscale");
}

function color() {
	document.getElementById('myVideo').className = 'myVideo';
	console.log("In color") 
}
