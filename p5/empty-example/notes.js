// The midi notes of a scale
var notes = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72];

// For automatically playing the song
var index = 0;

var minorThird = [
    { note: 0, duration: 200, display: "C" },
    { note: 3, duration: 400, display: "D#" },
];

var majorThird = [
    { note: 0, duration: 200, display: "C" },
    { note: 4, duration: 400, display: "E" },
];

var perfectFourth = [
    { note: 0, duration: 200, display: "C" },
    { note: 5, duration: 400, display: "F" },
];

var perfectFifth = [
    { note: 0, duration: 200, display: "C" },
    { note: 6, duration: 400, display: "G" },
];

var minorSixth = [
    { note: 0, duration: 200, display: "C" },
    { note: 3, duration: 400, display: "D#" },
];

var majorSixth = [
    { note: 0, duration: 200, display: "C" },
    { note: 4, duration: 400, display: "E" },
];

var results = [];

var trigger = 0;
var autoplay = false;
var osc;
var songName = "minorThird"
var title = ""
var learning = 0

window.onload = function () {
    document.getElementById("btnPlay").onclick = function () { playNoteOnClick() };
    document.getElementById("btnNext").onclick = function () { changeSongName() };
    document.getElementById("btnTest").onclick = function () { openTest() };
}
function setup() {
    // A triangle oscillator
    osc = new p5.TriOsc();
    // Start silent
    osc.start();
    osc.amp(0);

    learning1()
}

function playNoteOnClick() {
    console.log("playNoteOnClick")
    if (!autoplay) {
        index = 0;
        autoplay = true;
    }
}

// A function to play a note
function playNote(note, duration) {
    osc.freq(midiToFreq(note));
    // Fade it in
    osc.fade(0.5, 0.2);

    // If we sest a duration, fade it out
    if (duration) {
        setTimeout(function () {
            osc.fade(0, 0.2);
        }, duration - 50);
    }
}

function draw() {

    if (songName == "minorThird") {
        // If we are autoplaying and it's time for the next note
        if (autoplay && millis() > trigger) {
            playNote(notes[minorThird[index].note], minorThird[index].duration);
            trigger = millis() + minorThird[index].duration;
            // Move to the next note
            index++;
            // We're at the end, stop autoplaying.
        } else if (index >= minorThird.length) {
            autoplay = false;
        }
    }

    if (songName == "majorThird") {
        // If we are autoplaying and it's time for the next note
        if (autoplay && millis() > trigger) {
            playNote(notes[majorThird[index].note], majorThird[index].duration);
            trigger = millis() + majorThird[index].duration;
            // Move to the next note
            index++;
            // We're at the end, stop autoplaying.
        } else if (index >= majorThird.length) {
            autoplay = false;
        }
    }

    if (songName == "perfectFourth") {
        // If we are autoplaying and it's time for the next note
        if (autoplay && millis() > trigger) {
            playNote(notes[perfectFourth[index].note], perfectFourth[index].duration);
            trigger = millis() + perfectFourth[index].duration;
            // Move to the next note
            index++;
            // We're at the end, stop autoplaying.
        } else if (index >= perfectFourth.length) {
            autoplay = false;
        }
    }

    if (songName == "perfectFifth") {
        // If we are autoplaying and it's time for the next note
        if (autoplay && millis() > trigger) {
            playNote(notes[perfectFifth[index].note], perfectFifth[index].duration);
            trigger = millis() + perfectFifth[index].duration;
            // Move to the next note
            index++;
            // We're at the end, stop autoplaying.
        } else if (index >= perfectFifth.length) {
            autoplay = false;
        }
    }

    if (songName == "minorSixth") {
        // If we are autoplaying and it's time for the next note
        if (autoplay && millis() > trigger) {
            playNote(notes[minorSixth[index].note], minorSixth[index].duration);
            trigger = millis() + minorSixth[index].duration;
            // Move to the next note
            index++;
            // We're at the end, stop autoplaying.
        } else if (index >= minorSixth.length) {
            autoplay = false;
        }
    }

    if (songName == "majorSixth") {
        // If we are autoplaying and it's time for the next note
        if (autoplay && millis() > trigger) {
            playNote(notes[majorSixth[index].note], majorSixth[index].duration);
            trigger = millis() + majorSixth[index].duration;
            // Move to the next note
            index++;
            // We're at the end, stop autoplaying.
        } else if (index >= majorSixth.length) {
            autoplay = false;
        }
    }


    // Draw a keyboard

    // The width for each key
    //var w = width / notes.length;
    //for (var i = 0; i < notes.length; i++) {
    //var x = i * w;
    // If the mouse is over the key
    //if (mouseX > x && mouseX < x + w && mouseY < height) {
    // If we're clicking
    //if (mouseIsPressed) {
    //fill(100,255,200);
    // Or just rolling over
    //} else {
    //fill(127);
    //}
    //} else {
    // fill(200);
    //}

    // Or if we're playing the song, let's highlight it too
    //if (autoplay && i === song[index-1].note) {
    // fill(100,255,200);
    //}

    // Draw the key
    //rect(x, 0, w-1, height-1);
    //}

}

function learning1() {
    var notesNames = ["Perfect Fourth", "Perfect Fifth", "Minor Sixth", "Major Sixth"];
    var songNames = ["perfectFourth", "perfectFifth", "minorSixth", "majorSixth"];

    //for (var i = 0; i < notesNames.length; i++) {
    songName = songNames[learning]
    console.log(songName)
    title = notesNames[learning]
    console.log(title)
    var titleHtml = document.getElementById("ilP1-title");
    titleHtml.textContent = notesNames[learning]
    //draw()
    //}
}

function learning2() {
    var notesNames = ["Perfect Fourth", "Perfect Fifth", "Minor Sixth", "Major Sixth"];
    var songNames = ["perfectFourth", "perfectFifth", "minorSixth", "majorSixth"];

    songName = songNames[learning]
    console.log(songName)
    title = notesNames[learning]
    console.log(title)
    var titleHtml = document.getElementById("ilP1-title");
    titleHtml.textContent = notesNames[learning]

    var myCanvas = createCanvas(640, 480);
    myCanvas.parent('ilP2-color');

    background(220, 180, 200);
}

function test1() {
    var notesNames = ["Question 1", "Question 2", "Question 3", "Question 4"];
    var songNames = ["perfectFourth", "perfectFifth", "minorSixth", "majorSixth"];
    shuffle(songNames, true);
    print(songNames);

    results = results + songNames

    songName = songNames[learning]
    console.log(songName)
    title = notesNames[learning]
    console.log(title)
    var titleHtml = document.getElementById("ilP1T-title");
    titleHtml.textContent = notesNames[learning]
}

function changeSongName() {
    learning = learning + 1
    console.log(learning)
    if (learning > 3) {
        learning = 0
    }

    if (testPart.value == "Learning1") {
        learning1()
    }
    if (testPart.value == "Test1") {
        test1()
    }
}

function openTest() {
    console.log("open test")
    var testPart = document.getElementById("testPart")

    if (testPart.value == "Learning1") {
        document.getElementById("intro").style.display = "none"

        document.getElementById("ilP1a").style.display = "none"
        document.getElementById("ilP1b").style.display = "none"
        document.getElementById("ilP1-title").style.display = "none"
        document.getElementById("btnTest").style.display = "none"

        document.getElementById("ilP1Ta").style.display = "block"
        document.getElementById("ilP1Tb").style.display = "block"
        document.getElementById("ilP1T-title").style.display = "block"

        document.getElementById("testPart").value = "Test1"

        test1()
    }
}

function createJson(){
    var json = {};

    var now = new Date();
    json.id = now;

    json.test = document.getElementById("testPart").value

    saveJSON(json, 'lion.json');
}
// When we click
//function mousePressed() {
    // Map mouse to the key index
    //var key = floor(map(mouseX, 0, width, 0, notes.length));
    //playNote(notes[key]);
//}

// Fade it out when we release
//function mouseReleased() {
  //  osc.fade(0, 1);
//}
