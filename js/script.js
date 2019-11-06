$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
let userinput = $(".input").val();

$("#button").click(function(){
    let word = $(".input").val();
    $(".output").append(word);
});
function pigLatinConsonant(word){
 let firstChar = word[0]
 let result = firstChar + "ay"
 let restOfWord = word.slice(1);
 return restOfWord + result;
}
console.log(pigLatinConsonant("pig"))

function pigLatinVowel(word){
 let result = word + "ay"
 return result;
}
});