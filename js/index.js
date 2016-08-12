//var tone = require('tone');
var monoSynth = require('./synth/monoSynth');

nx.onload = function(){
  //get data coming out of the keyboard and pass it to Tone.
  //data is an object. For now we're interested in the values from data.note
  keyboard.on('*', function(data){
    //create a variable to hold frequency values.
    //Tone expects Hz, NexusUI outputs MIDI
    var frequency;
    //let's control when and how the synth turns on.
    if (data.on > 0) {
      //mtof is a utility that will convert the MIDI values (0 - 127) to Hz.
      frequency = nx.mtof(data.note);
      //trigger the note
      monoSynth.triggerAttack(frequency);
    }
    else {
      //if data.note hits 0, turn off the synth.
      monoSynth.triggerRelease();
    }
  });
}
