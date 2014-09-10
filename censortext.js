var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = []; //empty array

/* This function takes the input string and determines if there are any matches
   between a determinate and custom list of censored words and then replaces
   then with the hash character
*/
function censor(inputString)
{
    //the for in loop is similar to the foreach loop in other languages
    //like C#
    for (var index in censoredWords)
    {
        //replace is a string processing method
        //look here: http://www.w3schools.com/jsref/jsref_replace.asp
        inputString = inputString.replace(censoredWords[index], "####");
    }

    //we don't redeclare index as JavaScript sees that we already created it
    //on line 8
    for (var idx in customCensoredWords)
    {
        inputString = inputString.replace(customCensoredWords[idx], "####");
    }

    return inputString;
}

/* This function will add to the customCensoredWord array
*/
function addCensoredWord(word)
{
    customCensoredWords.push(word); //this adds the word to the "back" of the array
}

/* This function prints out the list of all censored words for review
*/
function getCensoredWords()
{
    //here we observe interesting JavaScript behavior...
    //The concat method for an Array behaves by combining the contents of
    //both arrays and returns a string output of their contents
    //http://www.w3schools.com/jsref/jsref_concat_array.asp
    return censoredWords.concat(customCensoredWords);
}

//this will make these functions externally available for other programs
//particularly if this program is a module itself
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;