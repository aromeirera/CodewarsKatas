// Write a function that takes an integer as input, and returns the number 
// of bits that are equal to one in the binary representation of that number. 
// You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so 
// the function should return 5 in this case
function countBits(n) {
  // Program Me
  let binary=n.toString(2)
  let arr = Array.from(String(binary),Number)
    let ones = arr.filter((num)=>num===1);
  return ones.length
    return count;
}
console.log(countBits(1234))