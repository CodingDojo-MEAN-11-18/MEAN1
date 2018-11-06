
var myStr = 'some content';
// console.log(myStr);

myStr = 2134234;

// console.log(myStr);

var array = ['cat', 'dog', 'horse'];

if (array.push('another string') > 10) {
  // do stuff
}

// console.log('index before', index);


// for (let index = 0; index < array.length; index++) {
//   console.log('index is ', index);
//   console.log('index', array[index]);

//   var hoist = 'hoist';
//  }

// console.log('after loop', hoist);


// for (var index in array) {
//   console.log('index', index);
//   console.log('content', array[index]);
// }

// for (var [index, item] of array.entries()) {
//   // console.log('element ', element);
//   // var index = element[0];
//   // var item = element[1];


//   console.log('item index', item, index)
// }

// var person = [23, 6.3, 'brown'];

var person = {
  age: 23,
  height: 6.3,
  hairColor: 'brown'
};

person.gender = 'female';



// for (var key in person) {
//   console.log('key ', key, person[key])
// }

function sayHello(name) {
  var hello = 'hello';

  console.log(hello + ' ' + name);
  console.log(`${hello} ${name}`);

  return hello;
}


console.log(sayHello('Jason'));
