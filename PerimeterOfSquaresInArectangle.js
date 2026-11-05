// The drawing shows 6 squares the sides of which have a length
// of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters
//  of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

// Could you give the sum of the perimeters of all the squares
// in a rectangle when there are n + 1 squares disposed in the same
// manner as in the drawing:

// alternative text

// Hint:
// See Fibonacci sequence

// Ref:
// http://oeis.org/A000045

// The function perimeter has for parameter n where 
// n + 1 is the number of squares (they are numbered from 0 to n) 
// and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216
function perimeter(n) {
  if (n===0){
    return 4
  }
  let result = [1, 1];
  //let result = []
  let sum=0
  //let arr=[1,1,2,3,5,8]
   for(let el =0;el<n.length;n++){
        sum=(n[el]+n[el+1])*4
     result.push(sum)
   }
    return result
}
console.log(perimeter([1 ,1 , 2 , 3 , 5 , 8]))