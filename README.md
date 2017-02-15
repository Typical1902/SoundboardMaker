# SounboardMaker
A basic Soundboard template using JQuery and the Web Audio API.
[Click here for a live demo](http://christophep.github.io/SoundboardMaker/ "SounboardMaker demo").

## Quick Start
First, include ***soundboard.js***,
```html
<script src="path/to/jquery.js"></script>
<script src="path/to/soundboard.js"></script>
```

Then, create a soundboard object,
```javascript
var soundboard = new Soundboard();
```

And link your audio files.
```javascript
soundboard.load('path/to/foo.mp3', 'playButtonId', false);
// false: no stop button
// true: you have a stop button whose id is playButtonIdStop
```