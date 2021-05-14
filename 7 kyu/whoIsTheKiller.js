// Who is the killer?
// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

// function killer(suspectInfo, dead) {
//   return Object.keys(suspectInfo)
//     .map((suspect) => {
//       const obj = {}
//       obj.name = suspect
//       obj.met = suspectInfo[suspect].filter((d) => dead.includes(d))
//       obj.isKiller = obj.met.length === dead.length
//       return obj
//     })
//     .find((p) => p.isKiller).name
// }

// Smarter solution
function killer(suspectInfo, dead) {
  return Object.keys(suspectInfo).find((x) => dead.every((y) => suspectInfo[x].includes(y)))
}

console.log(
  killer({ James: ['Jacob', 'Bill', 'Lucas'], Johnny: ['David', 'Kyle', 'Lucas'], Peter: ['Lucy', 'Kyle'] }, [
    'Lucas',
    'Bill',
  ])
)
