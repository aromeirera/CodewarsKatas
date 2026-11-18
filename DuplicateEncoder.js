// Description:
// The goal of this exercise is to convert a string to a new string
//  where each character in the new string is "(" if that character
//  appears only once in the original string, or ")" if that character
// appears more than once in the original string. Ignore capitalization
//  when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in
// some languages. If you read "...It Should encode XXX", the "XXX"
//  is the expected result, not the input!

function duplicateEncode(word) {
    let obj={}
  let Case = word.toLowerCase();
  let array= Case.split("");
  let result=[]
for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
    obj[array[i][j]]=(obj[array[i][j]]||0)+1;
  
    }
}
for ( let h of array){
if (obj[h]>1){
    result.push(")")

            }else{
                result.push("(")
            }
        
           }
return result.join("");
    }
console.log(duplicateEncode("(( @" ));