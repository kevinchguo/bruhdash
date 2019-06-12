var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arry) {
      return arry[0]
  },

  // returns the last element of an array
  last: function (arry) {
    return arry[arry.length - 1]
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arry, value) {
      // if(typeof arry === typeof []) {
        return arry.indexOf(value)
      // } else {
      //   return -1;
      // }
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arry, value) {
    // return arry.lastIndexOf(value);
    let index = -1;
    for (let i = arry.length - 1; i >= 0; i--) {
      if (arry[i] === value) {
        index = i
      }
    }
    return index
  },

  // returns an array with all elements except for the last element
  initial: function (arry) {
      arry.pop()
    return arry;
  },
  
  // returns an array with all falsey values removed
  compact: function(arry) {
    let empArry = []
    for (let i = 0; i < arry.length; i++) {
      // for (let x = 0; x < falsey.length; x++) {
        if(Boolean(arry[i]) !== false) {
          empArry.push(arry[i])
        }
      // }
    }
    return empArry;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arry, num1, num2) {
      // return arry.slice(num1, num2)
      let empArry = [];
    for (let i = num1; i < num2; i++) {
      empArry.push(arry[i])
    }
    return empArry;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arry,num1){
    let empArry = [];
    if (num1 === undefined) {
      arry.shift();
      return arry;
    } else if (Boolean(num1) === true) {
      for (let i = num1; i < arry.length; i++) {
        empArry.push(arry[i]);
      } 
      return empArry;
    } else {
      return arry;
    }
  },

  // returns a slice of array with n elements dropped from the end
  //[1,2,3,4,5], 2), [1,2,3]
  //slice(3,2)

  dropRight: function(arry, num1) {
    if (num1 === undefined) {
      arry.pop();
      return arry;
    } else if (Boolean(num1) === true) {
      arry.splice(arry.length - num1, num1)
      return arry;
    } else {
      return arry;
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arry, num1) {
    let empArry = [];
    if (num1 === undefined) {
      empArry.push(arry[0])
      return empArry
    } else if (Boolean(num1) === true ) {
      let sliceArry = arry.slice(0,num1)
      return sliceArry;
    } else {
      return empArry;
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arry, num1) {
    let empArry = [];
    if (num1 === undefined) {
      empArry.push(arry[arry.length - 1])
      return empArry
    } else if (Boolean(num1) === true ) {
      let sliceArry = arry.slice(arry.length - (num1), arry.length)
      return sliceArry;
    } else {
      return empArry;
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arry, str, num1, num2) {
    if (num1 === undefined) {
      let empArry = []
      for (i = 0; i < arry.length; i++) {
        empArry.unshift(str)
      }
      return empArry;
    } else {
      let sliceArry = arry.slice(num1, num2);
      for (let i = num1; i <= sliceArry.length; i++) {
        arry.splice(i,1, str);
      }
      return arry;
    }
  },

  // removes all given values from an array
  pull: function (arry, str1, str2) {
    arry.splice(arry.indexOf(str1),1)
    arry.splice(arry.indexOf(str2),1)
    return arry
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arry1, arry2) {
    let empArry = [];
    empArry.push(arry1[arry2[0]])
    empArry.push(arry1[arry2[1]])
    return empArry;
  },

  // creates an array excluding all the specified values
  without: function(arry, num1, num2) {
    arry.splice(arry.indexOf(num1),1)
    arry.splice(arry.indexOf(num2),1)
    return arry
  },

  // returns an array with specified values excluded
  difference: function(arry1, arry2) {
    let empArry = [];
    for (let i = 0; i < arry1.length; i++) {
      if(arry1[i] !== arry2[i]) {
        let spliceArry = arry2.splice(i,arry2.length);
        empArry.push(spliceArry.length)
        return empArry
      }
    }
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arry1, arry2) {
    let empArry = [];
    for (let i = 0; i < arry1.length; i++) {
        empArry.push([arry1[i],arry2[i]])
    }
    return empArry

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arry1) {
    let newArry = [];
    for (let i = 0; i < arry1.length; i++) {
      for(let x = 0; x < arry1[0].length; x++) {
         console.log(x,i)
         newArry.push(arry1[i][x])
      }
    }
    let newArry1 = [];
    let newArry2 = [];
    let empArry = []
    // console.log(newArry)
    // console.log(newArry.length)
    for (let i = 0; i < newArry.length; i+=2) {
    // console.log(newArry[i])
    newArry1.push(newArry[i])
    }
    for (let i = 1; i < newArry.length; i+=2) {
    newArry2.push(newArry[i])
    }
    empArry.push(newArry1,newArry2)
    return empArry
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
