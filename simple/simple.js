//Sort the array using  method
let arr = ["Meta", "Amazon", "Google", "Finsweet", "TechMD", "CallPro", "BairesDev"];
console.log(arr);
console.log(arr.sort());

//Reverse the array using  method
let arr1 = arr.reverse()
console.log(arr1);

//Remove the first IT company from the array
let arr2 = ["Meta", "Amazon", "Google", "Finsweet", "TechMD", "CallPro", "BairesDev"];
let arr3 = arr2.shift();
console.log(arr2);

//Remove the middle IT company or companies from the array
let arr4 = ["Meta", "Amazon", "Google", "Finsweet", "TechMD", "CallPro", "BairesDev"];
arr4.splice(3, 1);
console.log(arr4);

//Remove the last IT company from the array
let arr5 = ["Meta", "Amazon", "Google", "Finsweet", "TechMD", "CallPro", "BairesDev"];
arr5.pop();
console.log(arr5);

//Remove all IT companies
let arr6 = ["Meta", "Amazon", "Google", "Finsweet", "TechMD", "CallPro", "BairesDev"];
arr6.splice(0, 7);
console.log(arr6);