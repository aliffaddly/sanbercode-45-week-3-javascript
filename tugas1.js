const prompt = require('prompt-sync')({sigint: true})

// input number
const number = prompt('input number: ');

if (number < 0) { // condition 1: jika number yang diinput < 0
    console.log('Tidak bisa input bilangan negatif');
} else if (number % 2 != 0) { // condition 2: jika number yang diinput adalah ganjil
    console.log('Tidak bisa input bilangan ganjil');
} else { // condition 3: jika number yang diinput adalah genap
    num_sqrt = Math.sqrt(number)
    console.log('the square root of '+number+' is '+num_sqrt)
}