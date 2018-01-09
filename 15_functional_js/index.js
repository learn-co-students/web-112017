// FUNCTIONAL PROGRAMMING IN JAVASCRIPT
// ------------------------------------

// IMPERATIVE VERSUS DECLARATIVE
  // Imperative programming describes how to execute some code. This is like the
  // procedural code that we've been writing so far. It lists a set of steps to
  // take as well as how to take them. We usually reference this as **the how**.
  // Take this imperative approach to mapping over an array
  const imperativeArr = [ 1, 1, 2, 3, 5, 8, 13 ]
  const newImperativeArr = []
  for (const index in arr) {
    newArr[index] = arr[index] * 2
  }
  console.log(newArr); // [ 2, 2, 4, 6, 10, 16, 26 ]

  // An imperative approach to this problem would be to use the built-in
  // `Array.prototype.map` function, or define a new function that can simple be
  // called and reused, which iterates over any data type.
  const declarativeArr = [ 1, 1, 2, 3, 5, 8, 13 ]
  function doubleNum(num) { return num * 2 }
  const newDeclarativeArr = declarativeArr.map(doubleNum)

// PURE FUNCTIONS
  // Pure functions are functions which follow four basic rules:
  // 1.   Given the same inputs, returns the same output
  // 2.   Has no side-effects
  // 3.   Avoids shared state
  // 4.   Avoids mutating state
  //
  // Rule 1: Given the same inputs, returns the same output
  function sameOutputBreaking(num) { return num * Math.random() }
  function sameOutputWorking(num) { return num }

  console.log(sameOutputWorking(1) === 1); // true
  console.log(sameOutputWorking(1) === 1); // true
  console.log(sameOutputWorking(1) === 1); // true
  console.log(sameOutputBreaking(1) === 1); // false?
  console.log(sameOutputBreaking(1) === 1); // false?
  console.log(sameOutputBreaking(1) === 1); // false?

  // Rule 2: Has no side-effects
  function sideEffects(num) { console.log(num) }
  function noSideEffects(num) { return num }

  console.log(sideEffects(1));
  console.log(noSideEffects(1));

  // Rule 3: Avoids shared state
  let someState = 0
  function sharedState() { return someState + 1 } // uses outside variable
  function noSharedState(someVar) { return someVar + 1 } // redefines variable

  // Rule 4: Avoids mutating state
  let someOtherState = 0
  function mutatedState() { return someOtherState = someOtherState + 1 } // changes outside variable
  function noMutatedState(someVar) { return someVar + 1 } // doesn't change outside variable

  let someObjectState = {name: 'tim'}
  function mutatedObjectState(object) {
    object.age = 50
    return object
  }
  function noMutatedObjectState(object) {
    return Object.assign({}, object, {age: 50})
    // return {...object, age: 50}
  }

  let someArrayState = [ 1, 2, 3 ]
  function mutatedArrayState(arr) {
    arr.push(arr[arr.length - 1] + 1)
    return arr
  }
  function noMutatedArrayState(arr) {
    return [...arr, arr[arr.length - 1] + 1]
  }

// FUNCTION COMPOSITION
  // Function composition allows us to combine two or more functions to either
  // perform some computation, or to create a new function.
  function doubleString(arg) { return arg + arg }
  function capitalizeString(arg) { return arg.toUpperCase() }

  function compose(...fns) {
    return function(result) {
      for (let i = fns.length - 1; i > -1; i--) {
        result = fns[i](result)
      }
      return result
    }
  }

  const formatStringWithCompose = compose(doubleString, capitalizeString)
  const formatNumberWithCompose = compose(Math.round, parseFloat)
  function formatStringNormal(arg) {
    return doubleString(capitalize(arg))
  }
  function formatNumberNormal(arg) {
    return Math.round(parseFloat(arg))
  }

// ANONYMOUS FUNCTIONS
  // Simply functions without names.
  (function(arg) {
    console.log(arg);
  })('argument')

// MEMOIZATION
  // Memoization allows you to wrap a function to attach a cache to it to store
  // the result of that function for future function calls.
  function memoize(fn) {
    memoize.cache = {};

    return function() {
      const key = JSON.stringify(arguments);

      if (memoize.cache[key]) {
        console.log('hit cache');
        return memoize.cache[key];
      } else {
        console.log('add item to cache');
        const val = fn(...arguments);
        memoize.cache[key] = val;
        return val;
      }
    }
  }

// ==================
// NOTES FROM LECTURE
let id = 0

function addTwoNums(num1, num2) {
  // contain operations on variables only defined inside this function
    // easy to debug
    // easy to refactor
    // easy to test
    // no outside dependencies
    // modular
    // always work as designed
  return num1 * num2
}

const cake = {
  flavor: 'strawberry'
}

function addProp(obj, prop, value) {
  // const newObject = Object.assign({}, obj)
  const newObject = {...obj}
  newObject[prop] = value
  return newObject
}


function filter(array, callback) {
  const newArr = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArr.push(array[i])
    }
  }

  return newArr
}

function isEven(num) {
	return num % 2 === 0
}
