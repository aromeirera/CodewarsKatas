// Complete the method which returns the number which is most 
// frequent in the given input array. If there is a tie for most 
// frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

//function highestRank(arr){
//Your Code logic should written her
//   let obj ={}
//   for (let el of arr){
//         obj[el] = (obj[el]||0)+1;
//     }
//     for (let key in obj){
//         if (obj[key] ===1){
//             return Number(key);
//         }
//   console.log(obj)
// }
//}
function highestRank(arr) {
    let result = 0;
    let highestCount = 0;
    for (let el = 0; el < arr.length; el++) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[el] === arr[i]) {
                count += 1;
            }
        }
        if (count > highestCount) {
            highestCount = count;
            result = arr[el];
        }
        if (count === highestCount && arr[el] > result) {
            result = arr[el];
        }
    }
    return result;
}
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12] ))