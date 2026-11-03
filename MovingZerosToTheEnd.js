// Write an algorithm that takes an array and
//  moves all of the zeros to the end, preserving 
// the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// function moveZeros(arr) {
//   return
// }
function moveZeros(arr) {
  let solution=[]
  let nonzero=[]
  let result=[]
  for(let el=0;el<arr.length;el++){
    if(arr[el] !==0){
      nonzero.push(arr[el])
    }else{
      solution.push(arr[el])
    }
    
  }
  for(let el=0;el<nonzero.length;el++){
    result.push(nonzero[el]);
  }
  for(let el=0;el<solution.length;el++){
    result.push(solution[el])
  }
    
  return result
}
//console.log(solution)
//console.log(nonzero)
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))