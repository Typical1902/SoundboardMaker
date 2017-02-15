var Soundboard = function () {
    var context = new AudioContext();

    // loads an audio file (path) and links it on a button (id)
    this.load = function (path, id, stop) {
        var request = new XMLHttpRequest();
        request.open('GET', path);
        request.responseType = 'arraybuffer';
        request.onload = function () {
            var undecodedAudio = request.response;
            context.decodeAudioData(undecodedAudio, function (buffer) {
                linkPlay(id, buffer, stop);
            });
        };
        request.send();
    };

    // generates the click event which plays the audio 
    var linkPlay = function (id, buffer, stop) {
        $("#" + id).click(function () {
            // a new buffer source every time we play the audio
            var bufferSource = context.createBufferSource();
            bufferSource.buffer = buffer;
            bufferSource.connect(context.destination);
            bufferSource.start();

            // prevents audio from stacking (quote this line bellow to allow this)
            linkStop(id, bufferSource);

            // when we have a stop button
            if (stop === true) {
                linkStop(id + 'Stop', bufferSource);
            }
        });
    };

    // generates the click event which stops the audio 
    var linkStop = function (id, bufferSource) {
        $("#" + id).click(function () {
            bufferSource.stop();
        });
    };
};
