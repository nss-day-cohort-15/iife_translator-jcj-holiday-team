var Translator = (function(frenchTranslator){
  var frenchWords = {
    "merry": "joyeux",
    "christmas": "Noel",
    "happy": "content",
    "holidays": "   vacances",
    "yuletide": "yuletide",
    "greetings": "salutations",
    "season": "saison",
    "the": "la",
    "and": "et",
    "I": "je",
    "is": "est",
    "to": "`a",
    "your": "votre",
    "family": "famille"
  }

frenchTranslator.translateToFrench = function(input) {
  var translateSentence = document.getElementById("result");
  var translatedFrench = "";
  var makeArray = input.toLowerCase().split(" ");

  makeArray.forEach(function(element){
    translatedFrench += frenchWords[element] + " ";
   })

  console.log(translatedFrench)
  translateSentence.value = translatedFrench;
};

 return frenchTranslator;
})(Translator || {});

