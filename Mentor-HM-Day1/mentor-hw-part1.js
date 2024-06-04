// Map Function execution

const arr = [1,2,3,4,5];
const arr1 = arr.map((x) => x*2);
console.log(arr);
console.log(arr1);
console.log(arr == arr1);
console.log(arr === arr1);

// custom logic to find the maximum value

const arr2 = [2,5,4,7,1,9];
var max = -Infinity;
for(let i of arr2){
    if(i > max){
        max = i;
    }
}
console.log(max);

// reduce function to find the max value
var maximum = arr2.reduce((max,curr) => {
    if(curr > max){
        max = curr;
    }
    return max;
},-Infinity);
console.log(maximum);


// HW Problems

// 1. Explain the difference between map,filter, and forEach in JavaScript.

/* Incase of the Map method

    1. Map method returns the new array by iterating through the each element of the array 
        based function call condition.
    2. Map method does not change the original array.
    3. Map method does not execute the function of array elements without values.


    Incase of the filter method.

    1. Filter method returns the new array by iterating and filtering the elements of the 
        array based on the condition of the function.
    2. Filter doesnot change the original array.

    Incase of the reduce method.

    1. reduce method iterates through each element of the array and produces the single value as a 
    result based on functionality.
    2. reduce does not reduces the original array.

    Incase of the forEach() 

    1. forEach() is an array method. 
    2. It just focuses on iterating over each element of the array and print the values based on condition 
    3. It does not returns the new array of elements.


*/




// 2. Write a function that uses map to double each element in an array of numbers.

let arr3 = [1,2,3,4,5];
let doublearray = arr3.map((x) => x*2);
console.log(doublearray); // [ 2, 4, 6, 8, 10 ] --> returns new array.





// 3. How would you use filter to remove all even numbers from an array of integers?

const arr4 = [1,2,3,4,5];
const filtereven = arr4.filter((x) => x%2 != 0);
console.log(filtereven); // [ 1, 3, 5 ] --> returns the new array of elements.


/*4. Write a function that takes an array of strings and returns a new array with only 
   the strings that have a length greater than 5 characters, using filter.
*/

const arr5 = ["Apple","water melon","musk melon", "pine","mango","grapes","strawberry"];
const filterString = arr5.filter((x) => x.length > 5); // --> Arrow function
console.log(filterString); // [ 'water melon', 'musk melon', 'grapes', 'strawberry' ]


// filter method with function declaration
function strings(x){
    return x.length > 5;
}
console.log(arr5.filter(strings));



/* 5. What is the return value of forEach in JavaScript? Does it modify the original array?
    -----> The return value of the forEach() in javascript is undefined and it does not modify the 
            original array.

*/ 




//6. Example for forEach() --> functionality

const arr6 =[10,20,30,40];
const foreach = arr6.forEach((x) => {
    console.log(x);
});
console.log(arr6); // [ 10, 20, 30, 40 ]
console.log(foreach); // undefined.


/*
7. Explain the concept of "immutability" in the context of using map and filter in JavaScript.

    Map and filter method in javascript can achieve the immutability concept where when we perform 
    any functionality results in the getting the new array instead of the changing the old array.
    we can alter or modify the old arrays by using some methods such as push(),pop(),shift() and 
    unshift().

*/



/*
   8.  Write a function that takes an array of objects with name and age 
    properties and returns an array of strings with only the names, using map.
*/

const arrObj = [
    {name:"jagan",age:23},
    {name:"tharun",age:24},
    {name:"mayank",age:37},
    {name:"ashok",age:30},
    {name:"Bhaskar",age:32}
]

const arrObjNames = arrObj.map((x) => x.name);
console.log(arrObjNames); // [ 'jagan', 'tharun', 'mayank', 'ashok', 'Bhaskar' ]







