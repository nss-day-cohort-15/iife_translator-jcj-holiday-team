var translator = (function (chineseTranslator) {
  var chinese = {
   "merry":"圣诞快乐",
   "christmas": "圣诞节",
   "happy":"快乐" ,
   "holidays":"假期",
   "yule":"圣诞" ,
   "tide":"潮汐",
   "greeting":"问候",
   "to": "给",
   "the": "的",
   "and":"而且",
   "i": "我",
   "family":"的家庭"
 }
chineseTranslator.translateToChinese = function(input) {
  var translateSentence = document.getElementById("result");
  var translatedChinese = "";
  var makeArray = input.toLowerCase().split(" ");

  makeArray.forEach(function(element){
    translatedChinese += chinese[element] + " ";
   })

  console.log(translatedChinese)
  translateSentence.value = translatedChinese;
};

 return chineseTranslator;
})(Translator || {});
