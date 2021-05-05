var links = document.getElementById("playButton");
links.onclick = function() {

var html='<iframe width="100%" height="450" src="sourceOfMyMusic"></iframe>';
document.getElementById("soundCloud").innerHTML = html;

var newTexts = ["Go to SoundCloud"];
document.getElementById("playButton").innerHTML = newTexts;

newTexts.onclick = window.open('http://soundcloud.com/example');

};



var first_click = true;
links.onclick = function() {
    if (first_click) {
        // do stuff for first click
        first_click = false;
    } else {
        // do stuff for second click
    }
}