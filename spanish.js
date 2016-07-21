var Translator = (function(spanishTranslator) {
  var spanishWords = {
    "merry" : "feliz", "christmas" : "navidad", "happy" : "contento", "holidays" : "dias de fiesta", "yuletide" : "yuletide", "seasons" : "saludos", "the" : "las", "greetings" : "estación", "and" : "y", "i" : "yo", "your" : "tu", "family" : "familia"
  }

spanishTranslator.translateToSpanish = function(input) {
  var translateSentence = document.getElementById("result");
  var translatedSpanish = "";
  var makeArray = input.toLowerCase().split(" ");

  makeArray.forEach(function(element){
    translatedSpanish += spanishWords[element] + " ";
   })

  console.log(translatedSpanish)
  translateSentence.value = translatedSpanish;
};

 return spanishTranslator;
})(Translator || {});
