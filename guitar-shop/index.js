/** Constants */
EMOJI_DICT = {
  1: '💥',
  2: '🤘',
  3: '🎵',
  4: '📢',
  5: '💢',
  6: '🕺',
}

/** Utility Functions */
const getRandomNum = () => {
  const res = Math.floor((Math.random() * 10) / 6)
  console.log(res)
  return res
}

/** Guitar store classes */

class ClassicGuitar {
  constructor(_mfgYear, _brand, _price, _stringNum = 6, _isUsed) {
    this.yearOfManufacting = _mfgYear
    console.log(`test`)
    this.numberOfStrings = _stringNum
    this.price = _price
    this.isUsed = _isUsed
    this.brand = _brand
    // this.id = //randomID
  }

  static detectSound(sound) {
    return sound.includes(`🎸`) ? 'ElectricGuitar' : 'BassGuitar'
  }

  play() {
    return `🎶🎶🎶`
  }

  set price(num) {
    this._price = num
  }

  get price() {
    return this._price
  }

  get brandName() {
    return this._brand
  }

  get manufactureYear() {
    return this.yearOfManufacting
  }

  get id() {
    return this.id
  }
}

class ElectricGuitar extends ClassicGuitar {
  constructor(_mfgYear, _brand, _price, _stringNum = 6, _isUsed, _longNecked) {
    super(_mfgYear, _brand, _price, _stringNum, _isUsed)
    this.isLongNeck = _longNecked
  }
  play() {
    return `🎸🎸🎸`
  }
}

class BassGuitar extends ClassicGuitar {
  constructor(_mfgYear, _brand, _price, _stringNum = 4, _isUsed, _longNecked) {
    super(_mfgYear, _brand, _price, _stringNum, _isUsed)
  }
  playSolo() {
    const soloArr = []
    for (let i = 0; i < 6; i++) {
      soloArr.push(EMOJI_DICT[getRandomNum()])
    }
    return soloArr
  }
}
const gibsonSG = new ClassicGuitar(1975, `Gibson`, 12000, 6, false)
const ibanezSR = new BassGuitar(1975, `Gibson`, 12000, 6, false)

console.log(ClassicGuitar.detectSound(gibsonSG.play()))
console.log(ibanezSR.playSolo())

console.log(gibsonSG.play())
