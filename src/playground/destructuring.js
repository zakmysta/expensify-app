//
// Object destructuring
//

// const person = {
//   name: 'Zaki',
//   age: 25,
//   location : {
//     city: 'Toronto',
//     temp: 18
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);  
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

// const address = ['372 Bay Street', 'Toronto', 'Ontario', 'M1K 4D4'];
// const [, city, province = 'New York'] = address;
// console.log(`You are in ${city}, ${province}`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75' ];
const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
