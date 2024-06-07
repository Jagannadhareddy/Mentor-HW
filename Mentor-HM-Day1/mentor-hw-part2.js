// Uppercase Strings 1: Given an array of strings, convert all elements to uppercase using the map method.

const arr1 = ["siddi","jagan","tharun","apple"];


// 1. using the built-in method

const upperarr = arr1.map((x) => x.toUpperCase());
console.log(upperarr); // [ 'SIDDI', 'JAGAN', 'THARUN', 'APPLE' ]

// custom logic for to convert into uppercase of each element of the array

/*
    let empstr = "";
function upperCase(element){
    for(let i =0;i<element.length;i++){
        if(element.charAt(i) >= 'a' && element.charAt(i) <= 'z'){
            empstr= empstr + element.charAt(i)-32  ;    
        }
    }
    return empstr;
}
const updatearr =[];
arr1.forEach((element) => {
    updatearr.push(upperCase(element));
});
console.log(updatearr);

*/

// 2. Filter Even Numbers: Given an array of integers, filter out the even numbers using the filter method.

const arr2 = [1,2,3,34,5];
const oddarr = arr2.filter((x) => x%2 !== 0);
console.log(oddarr); // [ 1, 3, 5 ]


//3. Sum of Squares : Given an array of integers, find the sum of squares of all elements using the map and reduce methods.

    //1.  using the map method.
    let sum =0;
    const arr3 = [1,2,3,4,5];
    arr3.map(function(x){
        sum = sum + Math.pow(x,2);
    })
    console.log(sum); // 55


    // 2.  Using reduce method
    let result =  arr3.reduce((accumulator,currentvalue) => {
        return  accumulator = accumulator + currentvalue * currentvalue;
        },0);

    console.log(result); // 55


    // 3. using map and reduce method at a time.
    let result1 = arr3.map((x) => x*x).reduce((acc,curre) => {return acc + curre;},0);
    console.log(result1); // 55

//4. Remove Duplicates : Given an array of strings, remove duplicate elements using the map method.

const arrstring = ["siddi","apple","siddi","jagan","jagan","sort","sort"];

// using the set in js
    const set = [...new Set(arrstring)];
    console.log(set);

// using the Map Method
    const arrdupli =[];
const arrdupli1 = arrstring.map(element => {
        if(!arrdupli.includes(element)){
            arrdupli.push(element);
        }
    });
    console.log(arrdupli1);

// using the reduce method

const removearr = arrstring.reduce((acc,element) => {
    if(!acc.includes(element)){
        acc.push(element);
    }
    return acc;
},[]);

console.log(removearr);


//5. Concatenate Strings : Given an array of strings, concatenate them into a single string using the reduce method.

const arrstring1 = ["siddi","apple","jagan","sort"];
const concatstr = arrstring1.reduce((acc,x) => {return acc.concat(x)},"");
console.log(concatstr); // siddiapplejagansort
console.log(typeof(concatstr)); // string

// 6. Find Longest String: Given an array of strings, find the longest string using the reduce method.

    const cars = ["maruti","suzuki","TATA","BMW","swift","RangeRover"];
    const longstr = cars.reduce((acc,x) => {
        if(x.length > acc.length){
            acc = x;
        }
        return acc;
    },"");
    console.log(longstr); // RangeRover

//7. Count Vowels : Given a string, count the number of vowels (a, e, i, o, u) using the filter method. 
// eg-string "hello siddireddygari jagannadhareddy happy use of JS "
    let str = "hello siddireddygari jagannadhareddy happy use of JS ";
    const strarr = str.split("");
    let countVowel =0;
    strarr.filter((x) => {
        const vowel = ['a','e','i','o','u','A','E','I','O','U'];
        if(vowel.includes(x)){
            countVowel++;
        }
    });
    console.log(countVowel);



/* 
    8. Sort Strings by Length : Given an array of strings, sort them by length (shortest to longest) 
       using the sorted method.
*/

    const cars1 = ["maruti","suzuki","TATA","BMW","swift","RangeRover"];
    const cars2 = cars1.toSorted(function(a,b){ return a.length-b.length});
    console.log(cars1); // [ 'maruti', 'suzuki', 'TATA', 'BMW', 'swift', 'RangeRover' ]
    console.log(cars2); // [ 'BMW', 'TATA', 'swift', 'maruti', 'suzuki', 'RangeRover' ]
