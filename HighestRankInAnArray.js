// Complete the method which returns the number which is most 
// frequent in the given input array. If there is a tie for most 
// frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
//Your Code logic should written here
// let result=[]
// let count
//   for (let el =0; el<arr.length;el++){
//     if(arr[el]){
//         result +=el
//     }

//   }
  let obj ={}
  for (let el of arr){
        obj[el] = (obj[el]||0)+1;
        
    }
    for (let key in obj){
        if (obj[key] ===1){
            return Number(key);
        }
  console.log(obj)
}
}
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12] ))