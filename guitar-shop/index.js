import crypto from 'crypto'
/** Constants */
EMOJI_DICT = {
  0: '💥',
  1: '🤘',
  2: '🎵',
  3: '📢',
  4: '💢',
  5: '🕺',
}

SOUND_DICT = {
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
    //random id based on crypto package
    this.id = crypto.randomBytes(2).toString('hex')
  }

  static detectSound(sound) {
    console.log(sound)
    return SOUND_DICT[sound]
  }

  play() {
    return `🎶🎶🎶`
  }

  set price(num) {
    this.price = num
  }

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
  constructor(mfgYear, brand, price, stringNum = 6, isUsed, longNecked) {
    super(mfgYear, brand, price, stringNum, isUsed)
    this.isLongNeck = longNecked
  }
  play() {
    return `🎸🎸🎸`
  }
}

//*** Bass Guitar Subclass **/
class BassGuitar extends ClassicGuitar {
  constructor(mfgYear, brand, price, stringNum = 4, isUsed) {
    super(mfgYear, brand, price, stringNum, isUsed)
  }
  playSolo() {
    const soloArr = []
    for (let i = 0; i < 6; i++) {
      soloArr.push(EMOJI_DICT[getRandomNum(6)])
    }
    return soloArr
  }
}

/****** TESTING ******/
const gibsonSG = new ClassicGuitar(1975, `Gibson`, 12000, 6, false)
const ibanezSR = new BassGuitar(1975, `Ibanez`, 12000, 6, false)

console.log(ClassicGuitar.detectSound(gibsonSG.play()))
console.log(ibanezSR.playSolo())
console.log(gibsonSG.play())
console.log(gibsonSG.id)
console.log(Object.entries(ibanezSR))
