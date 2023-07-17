// refactor this code into a function and other methods you may wish to use from javascript
// maybe think how you could add to this dataset too.

const listOfRunners = []

listOfRunners.push(
  {name: 'John', sex: 'male', event: '5k', ranThisYear: 10},
  {name: 'Julie', sex: 'female', event: 'Marathon', ranThisYear: 5},
  {name: 'Sandra', sex: 'female', event: 'Half-Marathon', ranThisYear: 15},
  {name: 'Frank', sex: 'male', event: '5k', ranThisYear: 5},
  {name: 'Uncle Bob', sex: 'male', event: 'Marathon', ranThisYear: 10},
)

console.log(`Number of Runners: ${listOfRunners.length}`)

console.log(`There are ${listOfRunners.filter((r) => r.sex === 'female').length} female runners`);

console.log(`There are ${listOfRunners.filter((r) => r.sex === 'male').length} male runners`);

console.log(`There are ${listOfRunners.filter((r) => r.event === '5k').length} 5K runners`);

console.log(`There are ${listOfRunners.filter((r) => r.event === 'Marathon').length} Marathon runners`);

console.log(`There are ${listOfRunners.filter((r) => r.event === 'Half-Marathon').length} Half-Marathon runners`);