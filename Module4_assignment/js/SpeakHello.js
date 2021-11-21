(function(window){

  var helloSpeaker = {};
  var speakWord = "Hi ";
  helloSpeaker.speak = function (names){
    console.log(speakWord + names);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
