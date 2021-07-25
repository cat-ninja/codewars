class Dice {
  constructor(seed) {
    this._seed = seed
  }

  roll(parameters) {
    const dice = parameters.match(/(\d{1,}?d\d{1,})|(d\d{1,})/)

    const diceParameters = dice[0].split('d')
    const diceType = parseInt(diceParameters[1])
    const diceMultiplyer = parseInt(diceParameters[0])

    const rangeStart = parameters.includes('<=') ? parseInt(parameters.split(' ')[0]) : 1
    const rangeEnd = parameters.includes('=>') ? parseInt(parameters.split(' ')[4]) : NaN

    let value
    if (!isNaN(rangeEnd)) {
      value = Math.floor(Math.random() * (rangeEnd - rangeStart + 1) + rangeStart)
    } else {
      value = Math.floor(Math.random() * diceType)
      value = value === 0 ? value + 1 : value
    }
    if (!isNaN(diceMultiplyer)) {
      const max = diceMultiplyer * diceType
      value = Math.floor(Math.random() * (max - diceMultiplyer + 1) + diceMultiplyer)
    }

    return value
  }
}

const dice = new Dice()
dice.roll('1 <= d1 => 1')
dice.roll('1 <= d12 => 12')
dice.roll('d5+5')
dice.roll('2d6')
