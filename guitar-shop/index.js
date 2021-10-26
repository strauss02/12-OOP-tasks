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
}
