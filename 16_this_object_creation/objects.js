// OBJECT CREATION
// * Object literals
// const andrew = {name: 'Andrew', age: 25}
// const howard = {name: 'Howard', age: 20}

// * Object literals with methods
// const andrew = {name: 'Andrew', age: 25, greet: function(name) { console.log('hi', name, ' -', this.name) }}
// const howard = {name: 'Howard', age: 20, greet: function(name) { console.log('hi', name, ' -', this.name) }}

// * Shared methods
// function greet(name) { console.log('hi', name, ' -', this.name) }
// const andrew = {name: 'Andrew', age: 25, greet: greet}
// const howard = {name: 'Howard', age: 20, greet: greet}


// * Object factories
// function greet(name) { console.log('hi', name, ' -', this.name) }

// function userFactory(name, age) {
//   const obj = {} // no reassignment, are mutable
//   obj.name = name
//   obj.age = age
//   obj.greet = greet
//   return obj
// }
//
// const andrew = userFactory('Andrew', 25)
// const howard = userFactory('Howard', 20)

// Object factories with prototypes
// function greet(name) { console.log('hi', name, ' -', this.name) }
// const userPrototype = {
//   type: 'user',
//   greet: greet
// }
//
// function userFactory(name, age) {
//   const obj = Object.create(userPrototype)
//   obj.name = name
//   obj.age = age
//   return obj
// }
//
// const andrew = userFactory('Andrew', 25)
// const howard = userFactory('Howard', 20)


// // REDEFINING THE NEW KEYWORD AS A FUNCTION
// function myNew(constructor, ...args) {
//   const obj = Object.create(constructor.prototype)
//   constructor.apply(obj, args)
//   return obj
// }
//
//
// // * Constructors
// function User(name, age) {
//   // Instance variables
//   this.name = name
//   this.age = age
// }
//
// User.prototype = {
//   type: 'user',
//   // Instance method
//   greet: function greet(name) { console.log('hi', name, ' -', this.name) }
// }
//
// // Class variables
// User.className = "User class"
// // Class method
// User.something = function() { console.log('class method') }

// const andrew = new User('Andrew', 25)
// const howard = new User('Howard', 20)

//   * Private instance methods
//   * Private class methods

// const User = (function () {
//   // PRIVATE SCOPE
//   let id = 0
//   const all = []
//
//   function User(name, age) {
//     // Instance variables
//     this.id = id++
//     this.name = name
//     this.age = age
//     all.push(this)
//   }
//
//   User.all = function() {
//     return all
//   }
//
//   return User
// })()
//
// const andrew = new User('Andrew', 25)
// const howard = new User('Howard', 20)


// * `class` syntax
const User = (function () {
  // Private class variables
  let id = 0
  const all = []

  // Private methods
  function doSomething() {
    console.log('hello');
  }

  // The name here is optional, but if you leave it off, your object
  // constructors won't have names
  return class {
    // Instance methods
    constructor(name, age) {
      // Instance variables
      this.id = id++
      this.name = name
      this.age = age
      all.push(this)
    }

    greet(name) {
      doSomething()
      console.log('hi', name, ' -', this.name)
    }

    // Class methods
    static lastId() {
      return id
    }

    static all() {
      // Return a new copy of a non-primitive object
      return [...all]
    }

    static something() {
      console.log('something else');
    }
  }
})()

const andrew = new User('Andrew', 25)
const howard = new User('Howard', 20)
