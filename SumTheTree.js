// Given a node object representing a binary tree:

// // example of a node object:
const node = {
   value: 1,
   left: {value: 2, right: null, left: null},
   right: null
};
// write a function that returns the sum of all values, including the root. 
// Absence of a node will be indicated with a null value.

// Examples:

// 10        12
// | \
// 1  2
// => 13

// 1
// | \
// 0  0
//     \
//      2
// => 3
// return the sum of all values in the tree, including the root
function sumTheTreeValues(root){
 // let flatRoot= flat(root)
  // your code here
  let sum = 0;
  for ( let prop in root){
    if (typeof(root[prop])==='number'){
       sum += root[prop];
    }
   
    else if(typeof(root[prop] === 'object')){
      sum+=sumTheTreeValues(root[prop]);
    }

  }return sum;
}
console.log(sumTheTreeValues(node));