// // Complete the method/function so that it converts dash/underscore
// // delimited words into camel casing. The first word within the output 
// // should be capitalized only if the original word was capitalized 
// // (known as Upper Camel Case, also often referred to as Pascal case). 
// // The next words should be always capitalized.

// // Examples
// // "the-stealth-warrior" gets converted to "theStealthWarrior"

// // "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// // "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
// function toCamelCase(str){ 
//     let array=str.split("");
//     let arr=[]
//     for(let el =0;el<array.length;el++){
//         // if  (el ===0){
//         //     arr.push(array[el.toUpperCase()])
//         // }
        
//         if (array[el]===("-"||"_")){
//             arr.push(array[el+1].toUpperCase());
//             el+=2;
//             //array[el+1].toUpperCase()
//            // console.log(array)

           
//         }
//         arr.push(array[el])
//     }
// return arr.join("");
// }
// console.log(toCamelCase("the-stealth-warrior"))
function toCamelCase(str){
let array=str.split("");
    let arr=[]
    for(let el =0;el<array.length;el++){
       if (array[el]==="-"||array[el]==="_"){
            arr.push(array[el+1].toUpperCase());
            el+=2;
        }
        arr.push(array[el])
    }
return arr.join("");
}
console.log(toCamelCase("The_Stealth_Warrior"))