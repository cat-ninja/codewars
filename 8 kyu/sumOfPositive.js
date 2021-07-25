// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

const sumOfPositive = (array) => {
  return array.filter((e) => e > 0).reduce((acc, value) => acc + value, 0)
}

sumOfPositive([-1, -2, -3, -4, -5])
