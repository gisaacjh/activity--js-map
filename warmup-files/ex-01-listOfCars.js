
/*
 * listOfCars.map(...)
 *
 * (a) Map over `listOfCars` array and return an array of objects
 *      with this format: `{ make: '...', model: '...' }
 *
 * (b) combine `.map()` with `.join()` to put the models on the DOM
 *     in '<span>' elements inside the `<div class="cars-container"></div>` element
 *
 *      '<span>Accord</span><span>Pathfinder</span><span>Corolla</span>...'
**/


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

// (a) make the .map function work
var listOfCarObjects = listOfCars.map(function (cars) {
   var idCar = cars.split(" ")
   var make = idCar[0]
   var model = idCar[1]
   var  carrito = {'make': make,
                  'model': model
                };
document.querySelector('.cars-container').innerHTML += `<span>${carrito.model}</span>
                                                        <span>${carrito.make}</span>
  `;
                return carrito
});


// console.log(carrito);
// (b) you code for part-b below...


// console.log(listOfCarObjects);


//--------- Tests for part (a) ---------//

// +1 Check that listOfCarObjects is an array
console.assert(Array.isArray(listOfCarObjects) === true)

// +2 Check that each element in listOfCarObjects is an object
if ( Array.isArray(listOfCarObjects) ){
  console.assert(typeof listOfCarObjects[0] === 'object')
  console.assert(typeof listOfCarObjects[1] === 'object')
}

// +3 Check that each object-element in listOfCarObjects has correct values for
//   `make` and `model` properties
if ( Array.isArray(listOfCarObjects) && typeof listOfCarObjects[0] === 'object'){
  console.assert(listOfCarObjects[0].make === 'Honda')
  console.assert(listOfCarObjects[0].model === 'Accord')

  console.assert(listOfCarObjects[1].make === 'Nissan')
  console.assert(listOfCarObjects[1].model === 'Pathfinder')

  console.assert(listOfCarObjects[2].make === 'Toyota')
  console.assert(listOfCarObjects[2].model === 'Corolla')
}
