/* 
An array of integers is given, in which there are missing elements. 
Collapse all segments of numbers in which there are no gaps. 
  
Input: array of integers with missing elements: [1, 2, 3, 5, 6, 8, 9, ...] 
Output: ["1-3", "5-6", "8-..."]. 
*/

const collapse = (array) => {
  const result = []
  let start = 0,
    end
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] + 1 !== array[i + 1]) {
      if (array[start] !== array[i]) {
        result.push(`${array[start]}-${array[i]}`)
      } else {
        result.push(`${array[i]}`)
      }
      start = i + 1
      end = i
    }
  }
  return result
}

collapse([1, 2, 3, 5, 6, 8, 9, 10, 12, 13, 14, 16])
