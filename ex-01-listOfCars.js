
/*
 * listOfCars.map(...)
 *
 * (a) Map over `listOfCars` array and return an array of objects
 *      with this format: `{ make: '...', model: '...' }
 *
 * (b) combine `.map()` with `.join()` to put the models on the DOM
 *     in '<span>' elements
 *     example: '<span>Accord</span><span>Pathfinder</span><span>Corolla</span>...'
**/



//I listOfNames
var listOfCars = [
  'Honda Accord',
  'Nissan Pathfinder',
  'Toyota Corolla',
  'Volkswagen Jetta',
  'Porsche Cayenne',
  'Toyota 4Runner',
  'Ford Focus',
  'Nissan Versa',
  'Cadillac Escalade'
]



// II listOfStudents
var listOfStudents = [
  { first: 'Mary', last: 'Hart', gender: 'female', age: 24 },
  { first: 'Drew', last: 'Wyckoff', gender: 'male', age: 33 },
  { first: 'Andrew', last: 'Green', gender: 'male', age: 13 },
  { first: 'Cameron', last: 'Bolus', gender: 'female', age: 66 },
  { first: 'Peggy', last: 'Wood', gender: 'female', age: 8 },
  { first: 'Graham', last: 'Jones', gender: 'male', age: 40 },
  { first: 'Elliot', last: 'Corn', gender: 'male', age: 15},
  { first: 'Jane', last: 'Gooden', gender: 'female', age: 85},
  { first: 'Satoshi', last: 'Abe', gender: 'male', age: 73 },
  { first: 'Atushi', last: 'Eto', gender: 'male', age: 25 },
  { first: 'Lin', last: 'Ying', gender: 'female', age: 35 },
  { first: 'Yao', last: 'Ling', gender: 'male', age: 45 },
]


// (II) `listOfStudents`
// - (c) Map an array of ages
//
// - (d) Map names to and add a new property of that includes an 'email' property for each element
//   - format for 'email' value is first initial + last name + '@happygroup.com'.
//   - example: 'mhart@happygroup.com', 'dwyckoff@happygroup.com', 'lying@happygroup.com'
