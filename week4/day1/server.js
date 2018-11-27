const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/animalz', {
  useNewUrlParser: true,
});

mongoose.connection.on('connected', () => console.log('Mongo Connnected'));

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

// const o = {
//   a: 'this is a',
//   b: 'this is b'
// };

// const a = 'this is already A'

// const { a: c, b } = o;

// console.log(a, b, c)
const AnimalSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
    minlength: [3, 'Name must be longer than 3 chars']
  },
  legs: {
    type: Number,
    required: [true, 'Legs are required'],
    min: [0, 'You must have more legs than that!!!!!!!!!!']
  },
  species: {
    type: String,
    required: [true, 'Provide a species'],
    enum: ['Dog', 'Cat', 'Lizard']
  },
  isPet: {
    type: Boolean,
    required: true,
    default: true
  },
});

const Animal = mongoose.model('Animal', AnimalSchema);

const animal = new Animal({
  name: 'Sally',
  legs: 4,
  species: 'Dog',
});

animal.save()
  .then(savedAnimal => {
    console.log('saved', savedAnimal)
  })
  .catch(error => {

    // const keys = Object.keys(error.errors)
    const errors = Object.keys(error.errors).map(key => error.errors[key].message);

    // for (let index = 0; index < keys.length; index++) {
    //   console.log(keys[index]);
    //   console.log(error.errors[keys[index]].message);

    //   errors.push(error.errors[keys[index]].message);
    // }


    console.log(errors)
  })


Animal.findById('5bfc910891594d46fd16b4b7')
  .then(animal => {
    console.log('animal', animal);

    animal.name = 'Harv';

    return animal.save()
      .then(saved => console.log(saved));
  })
  .catch(error => console.log(error));
