class Translator {
  toPigLatin(string) {
    // take a string
    // split the string by spaces
    // process each word individually
    // - put a hyphen on the end of the word
    // - if the first letter is a consonant
    //   - then move first letter to the end after the hyphen
    //   - and repeat until the first letter is a vowel
    // - then put "ay" on the end
    // recombine the words into a new string
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

  toEnglish(string) {
    // take a string
    // split the string by spaces
    // process each word individually
    // remove "ay" from the end of each word
    // take all letters after the hyphen and move to the front
    // remove the hyphen
    // recombine the words into a new string
    let array = string.split(" ");
    let newArray = [];

    function iterator(element) {
      if (element.startsWith("-")) {
        // remove hyphen and return
        return element.substring(1);
      }
      // if element starts with other than hyphen
      // move the last letter to the front and recurse
      return iterator(
        element.substring(element.length - 1) +
          element.substring(0, element.length - 1)
      );
    }

    array.forEach(function(element) {
      element = element.substring(0, element.length - 2);
      newArray.push(iterator(element));
    });
    let newString = newArray.join(" ");
    return newString;
  }
}

module.exports = Translator;
