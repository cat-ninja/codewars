// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// describe("Example tests",_=>{
//     Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
//     Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano');
//     Test.assertEquals(high('take me to semynak'), 'semynak');
//     Test.assertEquals(high('aa b'), 'aa');
//     Test.assertEquals(high('b aa'), 'b');
//     Test.assertEquals(high('bb d'), 'bb');
//     Test.assertEquals(high('d bb'), 'd');
//     Test.assertEquals(high('aaa b'), 'aaa');
//     });

function high(sentence) {
  const alphabet = {}
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach((letter, index) => (alphabet[letter] = index + 1))
  return sentence
    .split(' ')
    .map((word) => {
      return {
        word: word,
        score: word
          .split('')
          .map((l) => alphabet[l])
          .reduce((acc, cur) => acc + cur),
      }
    })
    .sort((a, b) => b.score - a.score)[0].word
}

console.log(high('what time are we climbing up the volcano'))
