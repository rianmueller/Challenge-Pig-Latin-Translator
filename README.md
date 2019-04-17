# Pig Latin Translator
A new alien species has moved to earth and they only speak pig-latin! The president has called you and says that they need your help!

Your mission is to create a class that is capable of taking an english sentence and translating it into pig latin. We must also be able to understand what our new alien friends are saying, so the class needs to be able to convert pig-latin back to english.

Your class should have two methods on it: toEnglish and toPigLatin. toEnglish should take a sentence written in Pig Latin and translate it back to English. toPigLatin should take an english sentence and translate it into Pig Latin. Your translators should be able to handle whitespace and punctuations.  

TL;DR: Create a module that translates a string into Pig Latin, and is capable of translating Pig Latin back into in the native language.

## How Pig Latin Works
Basically, the Pig Latin system used here works as follows:

- Words that start with a vowel (A, E, I, O, U) simply have "ay" appended to the end of the word.
     - Examples are:
          - "eat" → "eat-ay"
          - "omelet" → "omelet-ay"
          - "are" → "are-ay"

- Words that start with a consonant have all consonant letters up to the first vowel moved to the end of the word (as opposed to just the first consonant letter), and "-ay" is appended.
     -('Y' is counted as a vowel in this context)
     - Examples are:
          - "pig" → "ig-pay"
          - "banana" → "anana-bay"
          - "trash" → "ash-tray"
          - "happy" → "appy-hay"
          - "duck" → "uck-day"
          - "glove" → "ove-glay"

!['Pig latin'](https://media.giphy.com/media/c2rJA8UVBVodi/giphy.gif)

Thaaaaaaanks :D
