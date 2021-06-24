//===============================//
//========Concrete Examples======//
//===============================//
// Write a function which takes in a string and returns counts of each character in the string.

// Restate question in your own terms and determine that we should be returning an objects 

//SIMPLE EXAMPLES
  charCount("aaaa"); // {a:4}
  charCount("hello"); // {h:1, e:1, l:2, o:1}
  // do we want to include the letters that are not in there, could make our code easier if we set every character to 0 first?

//COMPLEX EXAMPLES
  // what if someone had ('my phone number is 123123')
  // do we account for spaces
  // what about other chacters ($, _, numbers)
  // "Hello hi" ==> do we store uppercase and lowercase, do we ignore casing

//EMPTY INPUTS
  charCount("")
  // Return empty object, error, null, false, undefined

//INVALID INPUTS
  // What if they pass in an number, or an object, or null
  // EDGE CASES --> Usually not important in an interview setting but IMPORTANT IN THE REAL WORLD

//===============================//
//========Break IT DOWN==========//
//======SOLVE or SIMPLIFY========//
//===============================//

//DECIDED That we will return every uppercase character back as lowercase and we will count numbers

function charCount(str) {
  // do something
  //return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
}

//we know we are going to need to do something once for every character; and we need to make an object that we're going to return at the very end

//loop over string--> lowercase entire string beforehand or as we go? --> need to look at each character as we go, is it in our object already, if nothing that we would add x in and set it's count to one, if there was already a x in that object, then we would add one to it

//========ROUND 1======//
function charCount(str) {
  //make object to return at end
  let result = {};
  //loop over string, for each character... 
  for(let i = 0; i < str.length; i++){
    const char = str[i];
    //if the char is number/letter AND is a key in object, add one to count
    if(result[char] > 0) { //if it's already in there
      result[char]++;
      //if the char is number/letter AND is a key in object, add one to count
    } else {
      result[char] = 1;
    }
  }
    // if char is something else (space, period, etc.) don't do anything
  //return object at end
  return result;
}
console.log("//////THIS IS ROUND ONE///////")
console.log(charCount('hello'))
//{ h: 1, e: 1, l: 2, o: 1 }
console.log(charCount('Hi there!'))
//{ H: 1, i: 1, ' ': 1, t: 1, h: 1, e: 2, r: 1, '!': 1 }

//========ROUND 2 --> toLowerCase======//
function charCount2(str) {
  //make object to return at end
  let result = {};
  //loop over string, for each character... 
  for(let i = 0; i < str.length; i++){
    const char = str[i].toLowerCase();
    //if the char is number/letter AND is a key in object, add one to count
    if(result[char] > 0) { //if it's already in there
      result[char]++;
      //if the char is number/letter AND is a key in object, add one to count
    } else {
      result[char] = 1;
    }
  }
    // if char is something else (space, period, etc.) don't do anything
  //return object at end
  return result;
}

console.log("//////THIS IS ROUND TWO///////")
console.log(charCount2('hello'))
//{ h: 1, e: 1, l: 2, o: 1 }
console.log(charCount2('Hi there!'))
//{ h: 2, i: 1, ' ': 1, t: 1, e: 2, r: 1, '!': 1 }

//========ROUND 3 --> alphanumeric======//
//Can ask interviewer, spitball, etc. a few ways this could be done 
// WE ARE 90% OF THE WAY THERE
// Could have massive array that had Uppercase and Lowercase letter and one every alphanumeric character
// Could use regular expression
// Could use character codes -- ASCII codes

//WE WILL USE REGULAR EXPRESSION
function charCount3(str) {
  let obj = {};
  for(let i = 0; i < str.length; i++){
    const char = str[i].toLowerCase();
    if(/[a-z0-9]/.test(char)) {
      if(obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      };
    }
  }
  return obj;
}

console.log("//////THIS IS ROUND THREE///////")
console.log(charCount3('hello'))
//{ h: 1, e: 1, l: 2, o: 1 }
console.log(charCount3('Hi there!'))
// { h: 2, i: 1, t: 1, e: 2, r: 1 }

//===============================//
//========REFACTOR===============//
//===============================//
// FOR LOOPS IN TODAY'S LANDSCAPE ARE NOT THE GREATEST!!!!
// USE A FOR OF LOOP on a STRING, GIVES US EACH CHARACTER AUTOMATICALLY
// CONDENSE IF STATEMENTS
// REGULAR EXPRESSION == HOW EFFICIENT??? ==> BETTER WAY ==> SAY OUT LOUD
    //USE charCodeAt(0) --> check if valid character code
function charCount4(str) {
  let obj = {};
  for(let char of str){
    if(isAlphaNumeric(char)) {
      char = char.toLowerCase();
      //if it's TRUTHY we will add 1 to it, if nothing set it to 1
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
//CREATE FUNCTION TO CHECK CHAR CODE
function isAlphaNumeric(char){
  const code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && //numeric (0-9)
      !(code > 54 && code < 91) && //upper alpha (A-Z)
      !(code > 96 && code < 123)) { //lower alpha (a-z)
        return false
      }
      return true
}

console.log("//////THIS IS ROUND FOUR///////")
console.log(charCount4('hello'))
//{ h: 1, e: 1, l: 2, o: 1 }
console.log(charCount4('Hi there!'))
// { h: 2, i: 1, t: 1, e: 2, r: 1 }
