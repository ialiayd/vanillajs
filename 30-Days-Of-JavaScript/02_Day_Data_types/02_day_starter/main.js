// // this is your main.js script
// let firstName = "Ali",
//   lastName = "Aydemir",
//   maritalStatus = "Single",
//   country = "Turkey",
//   age = 28;

// ///Primitive data types are compared by its values.
// let word = "Javascript";
// word[0] = "Y"; //does not change
// console.log(word);

// let nums1 = [1, 2, 3];
// let numbers1 = [1, 2, 3];
// console.log(nums1 === numbers1); //false

// //Two objects are only strictly equal if they refer to the same underlying object.
// let nums2 = [1, 2, 3];
// let numbers2 = nums2;
// console.log(nums2 === numbers2); //true

// console.log(Math.floor(Math.random() * 11)); // creates random number between 0 and 10

// //string methods
// let string1 = "JavaScript";
// // console.log(string1.substring(4, 10)); // Script

// let patternTwo = /love/gi; // g-means to search in the whole text, i - case insensitive

// let string2 =
//   "I love JavaScript. If you do not love JavaScript what else can you love.";
// // console.log(string2.match("love"));

// let txt =
//   "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";

// let regEx = /\d+/;

// console.log(txt.match(regEx));
// console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]

// const challenge = "30 Days Of Javascript";
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substring(0, 2));
// console.log(challenge.substring(2, challenge.length));
// console.log(challenge.includes("Script"));
// console.log(challenge.split());
// console.log(challenge.split(" "));
// const challenge2 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(challenge2.split(", "));
// console.log(challenge.replace("Javascript", "Python"));
// console.log(challenge.charAt(15));
// console.log(challenge.indexOf("a"));
// console.log(challenge.lastIndexOf("a"));
// const challenge3 =
//   "You cannot end a sentence with because because because is a conjunction";
// console.log(challenge3.indexOf("because"));
// console.log(challenge3.lastIndexOf("because"));
// console.log(challenge3.search("because"));
// const challenge4 = " 30 Days Of JavaScript ";
// console.log(challenge4.trim());
// console.log(challenge.startsWith("30"));
// console.log(challenge.endsWith(" Javascript"));
// console.log(challenge.match(/\a/gi));
// console.log("30 Days of ".concat("Javascript"));
// console.log(challenge.repeat(2));
console.log(Math.round(Math.random() * (100 - 50 + 1)) + 50);
console.log(Math.max(Math.round(Math.random() * 255)));

const str = "Javascript";
console.log(str[Math.round(Math.random() * (str.length - 1))]);

const str2 = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125";
console.log(str2);

const str3 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str3.match(/because/gi));

const str4 =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

console.log(str4.match(/love/gi).length);

console.log(str3.match(/because/gi).length);

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const newSentence = sentence.replace(/[$-%-&-@-#]/g, "");
console.log(newSentence);

const incomeStr =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

console.log(incomeStr.match(/[0-9]+/g));
console.log(incomeStr.match(/[0-9]+/g).reduce((pre, cur) => +pre + +cur, 0));
