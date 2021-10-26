/** Guitar store classes */

class ClassicGuitar {
  constructor(_mfgYear, _brand, _price, _stringNum = 6, _isUsed) {
    this.yearOfManufacting = _mfgYear
    this.brand = _brand
    this.price = _price
    this.numberOfStrings = _stringNum
    this.isUsed = _isUsed
    // this.id = //randomID
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

  get manufactureYear() {
    return this.yearOfManufacting
  }

  get brand() {
    return this.brand
  }
  get id() {
    return this.id
  }
}

const gibsonSG = new ClassicGuitar(1975, `Gibson`, 12000, 6, false)

console.log(gibsonSG.play())
