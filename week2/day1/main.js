

// function call(cb) {
//   if (typeof cb === 'function') {
//     cb()
//   }

// }


// call(function () {
//   console.log('inside our callback');

// });



// function addArray(array) {
//   const results = [];

//   for (let index = 0; index < array.length; index++) {
//     const result = index + array[index];

//     results.push(result);
//   }

//   return results;
// }

// function square(array) {
//   const results = [];

//   for (let index = 0; index < array.length; index++) {
//     const result = array[index] * array[index];

//     results.push(result);
//   }

//   return results;
// }

function map(array, callback) {
  const results = [];

  for (let index = 0; index < array.length; index++) {
    const result = callback(array[index], index, array)

    console.log(result);
    results.push(result);
  }

  return results;
}

const numArray = [999, 234, 543, 2398];

// console.log('num array', addArray(numArray));
// console.log('sq array', square(numArray));
// const res = map(numArray, function (element, index) {
//   return element + index;
// });
// console.log('res', res)

// const rez = map(numArray,  element => element * element);

// console.log('rez', rez)


// console.log('before');

// function sayHello(name) {
//   setTimeout(function () {
//     console.log(`Hello ${name}`);
//   }, 3000)
// }

// sayHello('Jason')


// console.log('after');

function getThingsFromDB(query, callback) {

  return setTimeout(function () {
    console.log('callback', callback);
    const data = ['thing1', 'thing2', 'thing3'];
    callback(data);
  }, 4000);
}


getThingsFromDB('select * from things;', function (things) {

  console.log('running in the future!', things);

  const res = map(things, thing => thing + ' this is a thing');


  console.log(res);
 });

