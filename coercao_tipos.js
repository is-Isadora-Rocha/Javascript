const num = 10; 

console.log(num, typeof num) //10 number

const numeroEmFormatoString = String(num)
console.log(numeroEmFormatoString, typeof numeroEmFormatoString) //10 string

console.log(Number('123456789'))
console.log(parseFloat('23456.54869'))
console.log(parseInt('23456.54869'))
console.log(Boolean(0)) //false
console.log(Boolean(123456)) //true

// != 0 => true
// == 0 => false 