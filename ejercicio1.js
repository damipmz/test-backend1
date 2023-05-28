// Destructurin porque lo pasa como objeto
/** import { sum } from './utils.js' **/

/** console.log(sum(3, 5)) **/

import fs from 'node:fs'

const data = fs.readFileSync('./datos.txt', 'utf-8')

const nums = data.split(' ')

const evenNumbers = []

for (let i = 0; i < nums.length; i++) {
  const numbers = parseInt(nums[i], 10)
  if (numbers % 2 === 0) {
    evenNumbers.push(numbers)
  }
}
fs.writeFileSync('./respuestaej1.txt', `${evenNumbers}`)
// 
