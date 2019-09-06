class Translator {
  toPigLatin(string) {
    // take a string
    // split the string by spaces
    // process each word individually
    // put a hyphen at the end,
    // if the first letter is a consonant
    // then move first letter to the end after the hyphen
    // repeat until the first letter is a vowel
    // then append "ay" to the end
    // recombine all the words
    let array = string.split(" ");
    let newArray = [];

    function iterator(element) {
      // if element starts with a vowel
      if (
        element.startsWith("a") ||
        element.startsWith("e") ||
        element.startsWith("i") ||
        element.startsWith("o") ||
        element.startsWith("u") ||
        element.startsWith("y")
      ) {
        // put "ay" on the end and return
        return element + "ay";
      }
      // if element starts with a consonant
      // move the first letter to the end and recurse
      return iterator(element.substring(1) + element.substring(0, 1));
    }

    array.forEach(function(element) {
      element = element + "-";
      newArray.push(iterator(element));
    });
    let newString = newArray.join(" ");
    return newString;
  }
}

module.exports = Translator;
