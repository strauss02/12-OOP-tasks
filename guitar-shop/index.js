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
    return sound === `🎸` ? 'ElectricGuitar' : 'BassGuitar'
  }

  play() {
    return `🎶🎶🎶`
  }

  set price(num) {
    this._price = num
  }

  get price() {
    return this.price
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

const gibsonSG = new ClassicGuitar(1975, `Gibson`, 12000, 6, false)

console.log(gibsonSG.play())
