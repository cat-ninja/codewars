// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Lua: returns a Table;
// Have fun!

// 6
// [
//     '     *     ',
//     '    ***    ',
//     '   *****   ',
//     '  *******  ',
//     ' ********* ',
//     '***********'
// ]

function towerBuilder(n) {
  return Array.from({ length: n }, (_, k) => {
    const spaces = " ".repeat(n - k - 1);
    return spaces + "*".repeat(2 * k + 1) + spaces;
  });
}

console.log(towerBuilder(6));
