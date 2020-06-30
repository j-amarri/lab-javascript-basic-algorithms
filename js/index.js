// Iteration 1: Names and Input

let hacker1 = 'Steve';
let hacker2 = 'Elon';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1 

let nameSpaced = '';

for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    nameSpaced += hacker1[i].toUpperCase();
  } else {
    nameSpaced += hacker1[i].toUpperCase() + ' ';
  }
}

// 3.2

console.log(nameSpaced);

let nameReversed = '';

for (let i = hacker1.length - 1; i >= 0; i--) {
  nameReversed += hacker1[i];
}

console.log(nameReversed);

// 3.3 


if (hacker1 < hacker2) {
  console.log('The driver\'s name goes first.');
} else if (hacker1 > hacker2) {
  console.log('Yo, the navigator goes first definitely.')
} else {
  console.log('What?! You both have the same name?')
}


// Bonus 1 

let loremIpsum = 'Pellentesque elit eget gravida cum sociis natoque penatibus et. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Ante metus dictum at tempor commodo ullamcorper a. Molestie at elementum eu facilisis. Ut eu sem integer vitae justo eget magna fermentum. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Massa enim nec dui nunc mattis enim. Massa tincidunt nunc pulvinar sapien et ligula. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Accumsan lacus vel facilisis volutpat est. Netus et malesuada fames ac turpis egestas integer. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. In fermentum et sollicitudin ac orci phasellus. In fermentum et sollicitudin ac orci phasellus egestas. Morbi leo urna molestie at elementum.'

let totalWords = 0;

for (let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === ' ') {
    totalWords++;
  }
}

if (loremIpsum.length) {
  totalWords--;
}

console.log(totalWords);


let totalEt = 0;

for (let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === ' ' &&
    loremIpsum[i + 1] === 'e' &&
    loremIpsum[i + 2] === 't' &&
    !(loremIpsum[i + 3] >= 'A' && loremIpsum[i + 3] <= 'z')) {
    totalEt++;
  }
}

console.log(totalEt);