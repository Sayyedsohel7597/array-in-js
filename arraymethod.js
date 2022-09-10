// array is nothing but linear data structure it means that our data we can stored in linear form like list:
// var india = new arr("maharashtra", "punjab", "hariyana", "gujrat", "karnataka", "madhyapradesh", "uttarpradesh", "telangana", "andhrapradesh", "assam", "jammu&kashmir", "kerala", "delhi")

// here array-Name is india

// var india = ["maharashtra", "punjab", "hariyana", "gujrat", "karnataka", "madhyapradesh", "uttarpradesh", "telangana", "andhrapradesh", "assam", "jammu&kashmir", "kerala", "delhi"];
// console.log(india);    //here if we want to all those are exists in array
// console.log(india[0])     //by using index no we can hit to any element present in  the given array
// console.log(india.sort()); //it render in alphabetical formate to existing array format with indices

// console.log(india.reverse()); // it render in reverse format to existing array

console.log("hello git");

// var barakhadi = ["one", "two", "three", "four", "five", "six", "seven"]


// console.log(barakhadi.pop());
// console.log(barakhadi);
//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.



// console.log(barakhadi.push("EIGHT"));
// console.log(barakhadi) //Appends new elements to the end of an array, and returns the new length of the array.


// console.log(barakhadi.shift());
// console.log(barakhadi); //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// console.log(barakhadi.unshift("added"));
// console.log(barakhadi); //Inserts new elements at the start of an array, and returns the new length of the array.


// var arrOne = ["akra", "bara", "tera", "chawda"]
// var arrTwo = arrOne.concat("pandhra", "sola", "satra")
// console.log(arrTwo)
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// render like below example:
// ['akra', 'bara', 'tera', 'chawda', 'pandhra', 'sola', 'satra']


// console.log(arrTwo.join("/")) //we can usse here join() & " " "/" "&"
// Adds all the elements of an array into a string, separated by the specified separator string.



// var arr = ["away", "bway", "cway", "dway", "eway"];

// console.log(arr); //['away', 'bway', 'cway', 'dway', 'eway']
// var arrOne = arr.slice(1, 4); // ['bway', 'cway', 'dway']
// var arrOne = arr.slice(1, -2); // ['bway', 'cway']
// var arrOne = arr.slice(undefined, 4); // ) ['away', 'bway', 'cway', 'dway']
// var arrOne = arr.slice(1, undefined); // ) ['bway', 'cway', 'dway','eway']

// slice method returns an a new array
// console.log(arrOne)

// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

// @param start
// The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

// @param end
// The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.


// var arr = ["away", "bway", "cway", "dway", "eway", "fway", "gway", "hway", "iway", "jway"];
// //            0       1       2       3       4        5       6      7       8       9  <-------indices

// var arrThree = arr.splice(2, 0, "ina", "mina", "dika")
// console.log(arrThree);