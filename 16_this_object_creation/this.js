// VARIABLE SCOPE defines WHERE a variable is defined
// EXECUTION CONTEXT defines HOW a function is called
function showMap(userName) {
  console.log(`Hello, ${userName}`)
  console.log(this.name, this.coordinates)
}

const googleMaps = {
  name: 'Google Maps',
  coordinates: [1,2]
}

const appleMaps = {
  name: 'Apple Maps',
  coordinates: [2,3]
}


// BASELESS function call - executed with GLOBAL CONTEXT
showMap('alex')


// BOUND functions and function calls – `bind` defines context
const showGoogleMaps = showMap.bind(googleMaps)
const showAppleMaps = showMap.bind(appleMaps)

showGoogleMaps('fred')
showAppleMaps('nohemi')


// IMMEDIATELY INVOKED BOUND functions – `call` and `apply` define context
showMap.call(googleMaps, 'matthias')
showMap.apply(appleMaps, ['joné'])


// METHOD defined on an object – object is context
googleMaps.showMap = showMap
googleMaps.showMap('steven')


// ARROW FUNCTIONS - functions bound to the value of `this` in scope where defined
const arrowWithMultipleLines = () => {
  console.log(this)
  return 1 + 3
}
const arrowWithImplicitReturn = name => name // returns name
const arrowWithoutReturn = name => { console.log(this) } // returns `undefined`
const arrowWithOneParameter = name => { console.log(this) }
const arrowWithNoParameters = () => { console.log(this) }
const arrowWithTwoParameters = (name, age) => { console.log(this) }
const arrowReturningObject = (name, age) => ({ name, age })


Array.prototype.each = function(callback, context) {
	for (let i = 0; i < this.length; i++) {
		const el = this[i]
		const currArr = this

		// baseless function call
		// `this` is set to Window
		callback.call(context, el, i, currArr)
	}
}

[1,2,3].each(function(el, i, arr) {
	console.log(el, this[i])
}, [9,8,7])

[1,2,3].each(function(el, i, arr) {
	console.log(el, this[i])
}.bind([9,8,7]))
