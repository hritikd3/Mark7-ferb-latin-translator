
var  btnTranslate = document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



var url = "https://api.funtranslations.com/translate/ferb-latin.json"
function gettranslated(input){
  return url + "?" +"text=" + input
}
function errorhandler(){
 alert("Milion lost in space,server is facing delay please try again in some time")
}
function clickhandler(){
  var inputxt = txtInput.value
  fetch(gettranslated(inputxt))
  .then (response => response.json())
  .then  (json => {
    var translatedtext = json.contents.translated;
    outputDiv.innerText = translatedtext;
  })
  .catch(errorhandler)
  console.log(errorhandler)
};
btnTranslate.addEventListener("click", clickhandler)
