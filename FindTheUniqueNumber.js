// Complete the function which returns the only unique number from an array.

// All numbers in the unsorted array are present twice, except the one you
//  have to find. The numbers are always valid integer values between 1 and
//  2147483647, so no need for type and error checking. The array contains 
// at least one number and may contain millions of numbers. So make sure your 
// solution is optimized for speed.

// Example
// [ 1, 8, 4, 4, 6, 1, 8 ]  -->  6
// two distinct ways
// way 1:
// function findUnique(numbers) {
    
//     for(let x=0;x<numbers.length;x++){
//         let count = 0;
//         for (let y=0;y<numbers.length;y++){
//             if (numbers[x] === numbers[y]){
//                 count+=1;
//             }
            
//         }//console.log(count)//return count;
//         if (count === 1){
//             return numbers[x];// Return the unique number
//                     //return count
//         }
//     }
 

// }
// console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]))
function findUnique(numbers) {
    let obj ={};
    for (let num of numbers){
        obj[num] = (obj[num]||0)+1;
    }
    for (let key in obj){
        if (obj[key] ===1){
            return Number(key);
        }
    }
    //return obj;

}
console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]))