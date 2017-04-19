var myVideo = document.getElementById('myVideo');

VisSense.VisMon.Builder(VisSense(myVideo))
.on('fullyvisible', function() {
    myVideo.play();
})
.on('hidden', function() {
    myVideo.pause();
})
.build()
.start();