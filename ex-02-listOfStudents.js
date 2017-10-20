
/*
 * listOfStudents.map(...)
 *
 * (a) Map an `listOfStudents` to an array of numbers w/ the values of ages
 *
 * (b) Map over `listOfStudents` and add a an 'email' property for each element
 *   - format for 'email' value is first initial + last name + '@happygroup.com'.
 *   - example: 'mhart@happygroup.com', 'dwyckoff@happygroup.com', 'lying@happygroup.com'
 *
 *   resulting array example:
 *   [
 *      {
 *        first: 'Mary',
 *        last: 'Hart',
 *        ...
 *        email: 'mhart@happygroup.com'
 *       },
 *      {
 *        first: 'Drew',
 *        last: 'Wyckoff',
 *        ...
 *        email: 'dwyckoff@happygroup.com'
 *      },
 *      ...
 *    ]
**/

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
