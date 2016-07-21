
function conversion() {
  var translate_button = document.getElementById("translate");

  var language = document.getElementById("language");

  translate_button.addEventListener("click", function() {
    var user_selection2 = language.value;
    console.log(">>>>", user_selection2)

    if(user_selection2 === "French"){
      var input = document.getElementById("input").value;
      Translator.translateToFrench(input);
      console.log("working");
    }
    else if(user_selection2 === "Spanish"){
      var input = document.getElementById("input").value;
      Translator.translateToSpanish(input);
      console.log("working");
    }
    else{
      var input = document.getElementById("input").value;
      Translator.translateToChinese(input);
    }
  })
};

conversion();

