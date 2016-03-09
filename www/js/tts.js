var tts = (function () {
    var color = document.getElementById('color'),
        colorTospeak = color.children[0].innerHTML;
    
    function speakColor(){
        colorTospeak = color.children[0].innerHTML
        TTS
        .speak({
            text:colorTospeak,
            local: 'en-GB',
            rate: 0.8
        }, function () {
            console.log('success');
        }, function (reason) {
            console.log(reason);
        });
    }
    
    return {
        speak: speakColor
    }
}());