'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Function designed to give us the same value that we put into it
 * 
 * @param {*} value: any value.
 * @returns {*} value: the same value as the parameter given.
 * 
 */ 
 function identity (value){
     //input is any value
    //output is that same value
    //constraints : N/A
    //edge cases : N/A
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Function designed to give us the data type of any input value.
 * 
 * @param {*} value: any value.
 * 
 * @returns {String}: returns a string containing the data type of the input.
 */
 
 function typeOf(value){
    //input: any type of value
    //output: what type of value
    //edge cases: N/A
    //constraints: N/A
    if (typeof value !== "object"){
        return typeof value; 
    } else if (value === null){
        return "null";
    } else if (Array.isArray(value)){
        return "array";
    } else {
        return "object";
    }
    
}

module.exports.typeOf = typeOf;

/**
 * first: Designed to return the first elements in the array based on the number given
 * in the parameter
 * 
 * @param {Array} array: The array of which to check
 * @param {Number} num: the number for which to stop the slice
 * 
 * @returns{Array}: returns an array with the designated elements in the array
 */
 
 function first (array, num){
    //input: an array and a number
    //output: the array elements from the first to the specified number in the parameter
    //edge cases: negative numbers, first parameter is not an array, second parameter is not a number or not given
    //constraints: N/A 
    if (!(Array.isArray(array)) || num < 0){
        return [];
    } 
    if (num >= array.length ){
        return array;
    }
    if (typeof num !== "number"){
        return array[0];
    }
    return array.slice(0, num);
   
};

module.exports.first = first;


/**
 * last: Designed to return the last elements in the array based on the number given
 * in the parameter
 * 
 * @param {Array} array: The array of which to check
 * @param {Number} num: the number for which to stop the slice
 * 
 * @returns {Array}: returns an array with the designated elements in the array.
 */



function last (array, num){
    //input: an array and a number
    //output: the array elements from the index number given to the last element
    //edge cases: negative numbers, first parameter is not an array, second parameter is not a number or not given
    //constraints: N/A 
     if (!(Array.isArray(array)) || num < 0){
        return [];
    } 
    if (num >= array.length ){
        return array;
    }
    if (typeof num !== "number"){
        return array[array.length - 1];
    }
    return array.slice(num - 1, array.length);
   
}

module.exports.last = last;

/**
 * indexOf: Designed to take in an array and any value and return the index for the value inside
 * the array
 * 
 * @param {Array} array: the array of which to check
 * @param {*} value: any value inside the array of which we need to get the index number for.
 * 
 * @returns {Number}: returns either the index number of the given value or will return "-1" 
 * if the value is not in the given array
 * 
 */
 
function indexOf (array, value){
    //input: an array and any value
    //output: a number
    //edge cases: multiple occurances return the first, value not in the array return negative 1
    //constraints: N/A 
 for (let i = 0; i < array.length; i++){
     if (array[i] === value){
         return i;
     }
 }
 return -1;
    
}

module.exports.indexOf = indexOf;

/**
 * contains: Designed to take in an array and any value and return a boolean value based on whether or not
 * the value exists within the array
 * 
 * @param {Array} array: a given array of which to check
 * @param {*} value: any value for which to check inside of the array
 * 
 * @returns {Boolean}: will return true or false based on if the given value is inside the array or not
 * 
 */
 
 function contains (array, value){
    //input: an array and any value
    //output: boolean
    //edge cases: no value given return false
    //constraints: N/A
     return (array.includes(value) ? true : false);
}

module.exports.contains = contains;

/**
 * unique: Designed to take in an array with repeating values and return one without the repeats
 * 
 * @param {Array} array: an array with duplicate values to pass into the function
 * 
 * @returns {Array}: will return an array with only unique values
 */
 
 function unique (array){
    //input: an array
    //output: new array with duplicates removed
    //edge cases:  
    //constraints: use _.indexOf()
    var newArr = [];
    //create an empty array to push the unique values into
    //create a for loop to check to see if the new array already has the value
    for (let i = 0; i < array.length; i++){
       if (!(newArr.includes(array[i]))){
            newArr.push(array[i]);
        }
    }
    //return the new array with the unique values
    return newArr;
}

module.exports.unique = unique;

/**
 * filter: Designed to take in an array and a function and loop through the array in order to run the function
 * on each element of the array, then produce an array of the elements which passed through the function successfully
 * 
 * @param {Array} arr: the given array of which each element will be tested by the function
 * @param {Function} func: the given function which will be testing every element of the array
 * 
 * @returns {Array}: will return an array with only the values from the given array that passed successfully 
 * through the function.
 */
 
 function filter (arr, func){
    /**
     * input: Array, function
     * output: array
     * edge cases: function doesn't return boolean
     */
    //create new array
    let newArray = [];
    //loop through given array, add items that pass test
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i], i, arr)){
            newArray.push(arr[i]);
        }
    }
    //return array
    return newArray;
 }
 
 module.exports.filter = filter;
 
 /**
  * reject: Designed to take in an array and a function and loop through the array so that we can test the
  * function on each element of the array, then produce an array full of the elements that failed to pass through
  * the function
  * 
  * @param {Array} arr: the given array of which each element will be tested by the function
  * @param {Function} func: the given function which will be testing every element of the array
  * 
  * @returns {Array}: will return an array with only the values from the given array that failed to pass
  * through the function.
  */
  
  function reject(arr, func){
    // input: array and a function
    //output: an array of the elements that did not pass the function
    //edge cases: 
    //constraints: 
    //create a new array to push the rejects into
   let newArr = [];
    //create a for loop that loops over the values in the array
    for (let i = 0; i < arr.length; i++){
        //then run the function on each element to see if they pass or fail
        if(!(func(arr[i], i, arr))){
            //if they fail, push them into the new array
            newArr.push(arr[i]);
        }
    }
   //return the new array with the reject values
   return newArr;
}

module.exports.reject = reject;

/**
 * partition: Designed to return an array containing the values that returned something truthy in the function
 * and also containing the values that returned something falsy in the function.
 * 
 * @param {Array} arr: the given array of which each element will be tested by the function
 * @param {Function} func: the given function which will be testing every element of the array
 * 
 * @returns {Array}: an array containing two sub-arrays that hold 1) all the truthy values and 2) all the falsy values
 */
 
 function partition (arr, func){
    /**
     * input: array, function
     * output: array of arrays
     */
    //declare new arrays
    let truthArray = [];
    let falseArray = [];
    //loop through given array
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i], i, arr)){
            truthArray.push(arr[i]); //push to truthArray
        } else{
            falseArray.push(arr[i]); //push to falseArray
        }
    }//end loop
    return [truthArray, falseArray];
}

module.exports.partition = partition;

/**
 * map: Designed to take all elements from either an object or an array and pass them through a function, save
 * the returns, and give us an array filled with all those return values.
 * 
 * @param {Array or Object} collection: a data structure filled with elements that will be tested through a function
 * @param {Function} func: a given function for which to test every element in the given data structure
 * 
 * @returns {Array}: will return an array with the return values of the function for each element 
 */
 
 function map (collection, func){
    //input: a collection and a function
    //output: the return values of each value in the collection when passed through the function, in an array
    //edge cases: N/A
    //constraints: N/A
    let dataType = "";
    //first check to see if the collection is an array or object
    if (Array.isArray(collection)){
        dataType = "Array";
    } else if (typeof collection === "object"){
        dataType = "Object";
    }
    let newArr = [];
    //create a new array to push the function returns into
    //create an if statement to run the function whether its an array or an object
    if (dataType === "Array"){
        
        for (let i = 0; i < collection.length; i++){
            newArr.push(func(collection[i], i, collection));
        } 
    } else if (dataType === "Object"){
       
        for (let key in collection){
            newArr.push(func(collection[key], key, collection));
        }
    }
    return newArr;
}

module.exports.map = map;

/**
 * pluck: Designed to take an array of objects and return an array filled with the values of the 
 * given property that are inside the array
 * 
 * @param {Array} arr: the given array that holds different objects
 * @param {String} prop: the key that we are searching for in the objects
 * 
 * returns {Array}: will return an array with the values of the given properties throughout the objects
 * in the given array
 */
 
 function pluck (arr, prop){
    /**
     * input: array of objects
     * output: array
     */
    //declare empty array
    let newArray = [];
    //declare function that returns given property of object at array index
    function propert (itm, indx, arr){
       return arr[indx][prop];
    }
    //call _.map with arr array and propert function as arguments, assign value to newArray
    newArray = map(arr, propert);
    //return newArray
    return newArray;
}

module.exports.pluck = pluck;

/**
 * every: Designed to test every element in a data structure, and if every value from that collection passes 
 * then it will return true, if one element fails, then it will return false.
 * 
 * @param {Array or Object} coll: either an array or object that will have every element tested by the given function
 * @param {Function} func: the function which will test every element of the data structure
 * 
 * @returns {Boolean}: will return true or false based on whether every element passes the test or not
 */
 
 function every (coll, func){
    /**
     * input: a collection and a function
     * output: return true if every element in the collection passes the function, false if just one fails
     * edge cases: if the function doesnt return a boolean, if function is not given
     * constraints: N/A
     */
      let dataType = "";
    //first check to see if the collection is an array or object
    if (Array.isArray(coll)){
        dataType = "Array";
    } else if (typeof coll === "object"){
        dataType = "Object";
    }
    //next check to see if the function parameter exists, if it does not, return true if it has a true value within 
    //the collection, and false if the collection includes a false value
    if (func === undefined && coll.includes(true)){
        return true;
    } else if (func === undefined && coll.includes(false)){
        return false;
    }
    
    let result = true;
    //check the collection if its an array or object
   if (dataType === "Array"){
        //loop through the array to check if any of the tests fail
        for (let i = 0; i < coll.length; i++){
           if (!(func(coll[i], i, coll))){
             result = false;  
           } 
        } 
    } else if (dataType === "Object"){
       //loop through the object to check if any of the tests fail
        for (let key in coll){
          if (!(func(coll[key], key, coll))){
              result = false;
          }  
        }
    }
      
      //close the loop
  return result;
}

module.exports.every = every;

/**
 * some: Designed to test every element in a data structure, and if one value from that collection passes 
 * then it will return true, if all elements fail, then it will return false.
 * 
 * @param {Array or Object} collection: either an array or object that will have every element tested by the given function
 * @param {Function} func: the function which will test every element of the data structure
 * 
 * @returns {Boolean}: will return true or false based on whether one element passes the test or not
 */
 
 function some (collection, func){
    /**
     * input: Array or Object, Function
     * output: boolean
     * edge cases: function doesn't return boolean, no function
     * constraints: none
     */
    //array case
    if (Array.isArray(collection)){
      for (let i = 0; i < collection.length; i++){
          //function not provided
          if (typeof func !== "function" && collection[i]){
              return true;
          //function provided
          } else if (typeof func === "function" && func(collection[i], i, collection)){
              return true;
          }
      }//end loop
    //object case
    } else {
        for (let key in collection){
          //function not provided
          if (typeof func !== "function" && collection[key]){
              return true;
          //function provided
          } else if (typeof func ==="function" && func(collection[key], key, collection)){
            return true;
          }
      } //end loop
    } //end conditionals
  return false;
}

module.exports.some = some;

/**
 * reduce: Designed to take in an array, a function, and a seed value; it will then run the function
 * with the seed value to start as one of the parameters, then it will use the previous result as one of
 * the parameters until it reaches the end of the array; it will then return that last return value of the function
 * 
 * @param {Array} array: the given array of which we will test in the function
 * @param {Function} func: the given function which we will use to test the array
 * @param {Number or String} seed: the starting value for the function to use
 * 
 * @returns {Number or String}: will return the last return value of whatever function you put in the parameters.
 */
 
 function reduce (array, func, seed){
 /**
  * input: an array, a function, and a seed
  * output: the final function return value
  * edge cases: if seed is not given
  */
  //create a variable to return
  let result;
  //first check to see if there is a seed
  if (seed === undefined){
      //if there is not, run the function with the first element acting as the seed
      let result1 = func(array[0], array[1], 1);
      //after we have the first result, we can loop through the rest of the array starting at 
      //index 2 and running the function
      for (let i = 2; i < array.length; i++){
          result1 = func(result1, array[i], i);
      }//then set the final function return equal to the result
      result = result1;
  } else {
      //if there is a seed available then we start running the function with the given seed and array[0]
      let result2 = func(seed, array[0], 0);
      for (let i = 1; i < array.length; i++){
          //then we continue to run the function while looping through the array
          result2 = func(result2, array[i], i);
      }//then set the final function return equal to the result
      result = result2;
  }
    //return the final result
return result;
}

module.exports.reduce = reduce;

/**
 * extend: Designed to take an any number of objects as parameters and combine them into one object.
 * 
 * @param {Object} obj1, obj2, ...theObjects: will take as many objects as you want to be combined into one big object
 * 
 * @returns {Object}: will return one object with all the key value pairs from the parameters contained inside.
 */
 
 function extend (obj1, obj2, ...theObjects){
    /**
     * input: 2 or more objects
     * output: first object
     * constraints: none
     * edge cases: more than two objects
     */
    //search through obj2
    for (let key in obj2){
        //copy properties into obj1
        obj1[key] = obj2[key];
    }//end loop
    //account for more arguments
    //loop through theObjects array
    for (let i = 0; i < theObjects.length; i++){
        //loop through each object in array
        for (let key in theObjects[i]){
            //copy properties into obj1
            obj1[key] = theObjects[i][key];
        } //end nested loop
    }//end parent loop
    return obj1;
}

module.exports.extend = extend;
 