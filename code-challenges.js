// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"
// creat a const that'll, take in a,e,i,o and return 0,4,3,1, 
const codedWord = (str) => {
    // use a .split on a new let function 
    let strArray = str.split("") 
    // creat a new var so you can do a .map on the function we just split
    var newStr = strArray.map(value => {
        //insert values you want to replace
        if (value === "a"){
        return value = 6
    }else if (value === "e"){
        return value = 3 
    }else if (value === "i"){
        return value = 1 
    }else if (value === "o")
        return value = 0
     else {
        return value
        //return value is for anything that doesn't fall into the a,e,i,o 
           }       
              })
              //use a .join so you can have them in the same places
        return newStr.join("")
            }
console.log(codedWord(secretCodeWord1));
console.log(codedWord(secretCodeWord2));
// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const favFruits = (array) => {
   return array.filter(value => {
       return value.includes("a") || value.includes("A")
   })
}
console.log(favFruits(arrayOfWords));


    




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [3, 5, 3, 5, 3]
// Expected output: true


// Create a function that takes in an array as an argument
const fullHouse = (arr) => {
    // Sort the array in order
    let orderArr = arr.sort((a,b)=>a-b)
    // Check to see if the values are equal to one another (0-2 && 3-4 || 0-1 && 2-4)
    if (orderArr[0] === orderArr[1] && orderArr[0] === orderArr[2] && orderArr[3] === orderArr[4]) {
      return true
    } else if (orderArr[0] === orderArr[1] && orderArr[2] === orderArr[3] && orderArr[2] === orderArr[4]) {
      return true
    } // else return false
      else return false
  }

  console.log(fullHouse(hand1));
  console.log(fullHouse(hand2));
  console.log(fullHouse(hand3));
  console.log(fullHouse(hand4));




// STRETCH:
var hand5 = ["K", 5, "K", 5, "K"]
// Expected output: true
var hand6 = ["A", "Q", "A", 5, 3]
// Expected output: false
