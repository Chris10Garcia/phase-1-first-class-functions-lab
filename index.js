// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
    const drivers = [];

    for (let i = 0; i < 2; i++){
        drivers.push(array[i])
    }
    return drivers
}

const returnLastTwoDrivers = function (array){
    const drivers = []

    for (let i = 3; i > 1; i--){
        drivers.unshift(array[i])
    }
    return drivers
}

// bloody hell. I was going a level extra for storing the functions within an array
// const selectingDrivers = (function(){
//     return [
//         function(){
//             return returnFirstTwoDrivers;
//         }, 
//         function (){
//             return returnLastTwoDrivers;
//         }
//     ];
// })();

const selectingDrivers = (function(){
    return [returnFirstTwoDrivers, returnLastTwoDrivers]
})()
// you have to use the invocation function so that it calls the fucntion immediately,
// which returns an array containing two stored functions


// this is numerically correct, but technically wrong for the lab
// const createFareMultiplier = function(x){
//     return function(){
//         return x ** 2;
//     }
// }

// this is correct per what the lab ask's for
// const createFareMultiplier = function (x){
//     return function(y){
//         return x * y;
//     }
// }

// this is correct and short handed / arrow functioned
// same as above function
const createFareMultiplier = x => y => x * y;

const fare = createFareMultiplier;


// this is numerically correct but not techncially correct for the lab
// const fareDoubler = function(x){
//     return 2 * x
// }

// this is correct 
// const fareDoubler = function(z){
//     return fare(z)(2)
// }

// this is correct using arrow functions
const fareDoubler = z => fare(z)(2)

// getting the hang of this
const fareTripler = z => fare(z)(3)

const selectDifferentDrivers = function(arrayOfDrivers, func){
    let drivers;

    if (func === returnFirstTwoDrivers){
        drivers = returnFirstTwoDrivers(arrayOfDrivers)
    } else {
        drivers = returnLastTwoDrivers(arrayOfDrivers)
    }

    return drivers
}