// JavaScript's indexOf does not work with arrays as input. 
// This is because [1,2] === [1,2] will return false in JavaScript. 
// Many other languages have similar quirks.

// However, sometimes it is useful to search for an Array. 
// Write a function that looks for an array within a two-dimensional 
// array and returns the index of the first matching element. If there 
// is no match, your function should return -1.

// See some examples:

// var arrayToSearch = [[1,2],[3,4],[5,6]];
// var query = [1,2]; // => 0
// query = [5,6]; // => 2
// query = [9,2]; // => -1
// You will be required to validate the inputs on the following criteria:

// each element of the array to be searched should be an array;
// each sub-array in the two-dimensional array should be of length two; and
// query should be an array of length two.
// If the inputs are not valid you should throw an Error.

// See some examples:

// var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
// arrayToSearch = [1,2,3,4,5,6]; // => throw Error
// arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
// var query = [1,2]; // => valid input
// query = 5; // => throw Error
// query = [9,2,1]; // => throw Error
var searchArray = function (arrayToSearch, query) {
// TODO your code here
  
}
var searchArray = function (arrayToSearch, query) {
  // Validate the query
  if (!Array.isArray(query) || query.length !== 2) {
    throw new Error("query must be an array of length 2");
  }

  // Validate the array to search
  if (!Array.isArray(arrayToSearch)) {
    throw new Error("arrayToSearch must be an array");
  }

  for (var i = 0; i < arrayToSearch.length; i++) {
    var item = arrayToSearch[i];
    if (!Array.isArray(item) || item.length !== 2) {
      throw new Error("each element must be an array of length 2");
    }
  }

  // Search (validation is finished, so every item is safe to compare)
  for (var j = 0; j < arrayToSearch.length; j++) {
    if (arrayToSearch[j][0] === query[0] && arrayToSearch[j][1] === query[1]) {
      return j;
    }
  }

  return -1;
};