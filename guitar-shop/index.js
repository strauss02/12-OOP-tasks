import crypto from 'crypto'

/** Constants */
const EMOJI_DICT = {
  0: '💥',
  1: '🤘',
  2: '🎵',
  3: '📢',
  4: '💢',
  5: '🕺',
}

const EMOJI_ARR = ['💥', '🤘', '🎵', '📢', '💢', '🕺']

const SOUND_DICT = {
  '🎸🎸🎸': 'Electric Guitar',
  '🔊🔊🔊': 'Bass Guitar',
  '🎶🎶🎶': 'Classic Guitar',
}

/** Utility Functions */

/**
 *  Generates a random number between zero and the number passed as argument.
 * @param {num} max the maximal value to be generated
 * @returns a random number between zero and the {max} number.
 */
const getRandomNum = (max) => {
  const res = Math.floor(Math.random() * max)
  return res
}

/** Guitar store classes */

class ClassicGuitar {
  //public fields
  yearOfManufacting
  numberOfStrings
  price
  isUsed
  brand
  id

  constructor(mfgYear, brand, price, stringNum = 6, isUsed) {
    this.yearOfManufacting = mfgYear
    this.numberOfStrings = stringNum
    this.price = price
    this.isUsed = isUsed
    this.brand = brand
    //random id based on crypto module
    this.id = crypto.randomBytes(2).toString('hex')
  }

  //*** METHODS ***//
  /**Gets a guitar sound and returns matching guitar type. */
  static detectSound(sound) {
    return SOUND_DICT[sound]
  }

  becomeWorn = (object) => {
    object.isUsed = true
    const newPrice = object.price * 0.9
    object.price = newPrice
  }

  play() {
    this.becomeWorn(this)
    return `🎶🎶🎶`
  }

  //*** SETTERS ***//
  set price(num) {
    this.price = num
  }

  //*** GETTERS ***//

  get price() {
    return this.price
  }

  get brandName() {
    return this.brand
  }

  get manufactureYear() {
    return this.yearOfManufacting
  }

  get id() {
    return this.id
  }
}

//*** Electric Guitar Subclass **/
class ElectricGuitar extends ClassicGuitar {
  isLongNeck
  constructor(mfgYear, brand, price, stringNum = 6, isUsed, longNecked) {
    super(mfgYear, brand, price, stringNum, isUsed)
    this.isLongNeck = longNecked
  }
  play() {
    this.becomeWorn(this)
    return `🎸🎸🎸`
  }
}

//*** Bass Guitar Subclass **/
class BassGuitar extends ClassicGuitar {
  constructor(mfgYear, brand, price, stringNum = 4, isUsed) {
    super(mfgYear, brand, price, stringNum, isUsed)
  }

  play() {
    this.becomeWorn(this)
    return '🔊🔊🔊'
  }

  playSolo() {
    // const soloArr = []
    // for (let i = 0; i < 6; i++) {
    //   soloArr.push(EMOJI_DICT[getRandomNum(6)])
    // }

    //for each emoji item, pick a random emoji, (randomized according to array length) and add it to the array
    const soloArr = EMOJI_ARR.map(() => {
      return EMOJI_ARR[Math.floor(Math.random() * EMOJI_ARR.length)]
    })
    return soloArr
  }
}
/****** TESTING ******/
const gibsonSG = new ElectricGuitar(1975, `Gibson`, 12000, 6, false)
const ibanezSR = new BassGuitar(1998, `Ibanez`, 4600, 4, false)
const rickenbacker = new BassGuitar(1972, `Rickenbacker`, 12000, 4, true)

console.log(gibsonSG.isUsed)
console.log(gibsonSG.price)
console.log(ClassicGuitar.detectSound(gibsonSG.play()))
console.log(gibsonSG.price)
console.log(gibsonSG.isUsed)
console.log(ibanezSR.playSolo())
console.log(ibanezSR.price)
console.log(ibanezSR.play())
console.log(ibanezSR.price)
console.log(gibsonSG.id)
console.log(rickenbacker.isUsed)
console.log(Object.entries(ibanezSR))
