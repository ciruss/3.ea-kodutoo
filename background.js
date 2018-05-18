function muteSingleElement(singleElement) {
    singleElement.muted = true;
    singleElement.pause();
    console.log("mute")
}

function muteAllElements() {
    var videos = document.querySelectorAll("video"),
        audios = document.querySelectorAll("audio");

    [].forEach.call(videos, function(video) { muteSingleElement(video); });
    [].forEach.call(audios, function(audio) { muteSingleElement(audio); });
}


//function muteSingleElement(singleElement) {singleElement.muted = true; singleElement.pause();console.log("mute")}
