// SCOPE DEFINES WHERE
// EXECUTION CONTEXT DEFINES HOW

function showMap(userName) {
  console.log(`Hello, ${userName}`);
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

// * `call` and `apply`
// showMap.call(googleMaps, 'tim')
// showMap.apply(appleMaps, ['tim'])

// * Bound functions `bind`
const showGoogleMaps = showMap.bind(googleMaps)
const showAppleMaps = showMap.bind(appleMaps)

// Arrow functions
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
