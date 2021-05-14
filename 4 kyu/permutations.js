function permutations(string) {
  return string.length <= 1
    ? [string]
    : Array.from(
        new Set(
          string
            .split('')
            .map((char, i) => permutations(string.substr(0, i) + string.substr(i + 1)).map((p) => char + p))
            .reduce((r, x) => r.concat(x), [])
        )
      )
}

console.log(permutations('aabb'))
