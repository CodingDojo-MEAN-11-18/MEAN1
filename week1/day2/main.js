


function Person(name, items) {
  if (!(this instanceof Person)) {
    console.log(name + ' is nota person ')
    return new Person(name, items);
  }

  // const person = { name };
  this.name = name;

  //  dont do this
  // this = {}

  // console.log('this is ', this);

  this.items = items;

}

Person.prototype.take = function take(item, target) {

  console.log(`${this.name} is taking`);
  if (!target || !Array.isArray(target.items)) {
    throw new Error('target must have an items array');
  }


  for (let index = 0; index < target.items.length; index++) {
    if (item === target.items[index]) {
      console.log('found ', item);
      // slice ['glue', 'paint', 'gold'] => ['glue', 'paint', 'gold'] -- makes copy
      //splice [] => ['glue', 'paint', 'gold'] -> mutates

      target.items.splice(index, 1);
      this.items.push(item);

      return true;
    }
  }

  return false;
};

const bob = Person('Bob', ['glue', 'paint', 'gold']);
const sally = new Person('Sally', ['crackers', 'money', 'sand']);

console.log(bob)
console.log(sally)
// console.log(bob.name)




sally.take('gold', bob);

// // console.log(parseInt('1') === 1);
console.log(bob)
console.log(sally)
bob.take('sand', sally);


console.log(bob)
console.log(sally)


const backpack = {
  items: ['compass', 'map', 'snacks']
};

// backpack.take = bob.take;
console.log(backpack);
bob.take('compass', backpack);

console.log(bob)
console.log(backpack);

// backpack.take('sand', bob);

bob.take.apply(backpack, ['gold', sally]);

console.log(bob)
console.log(sally)
console.log(backpack);
