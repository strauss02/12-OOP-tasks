// SELECT ELEMENTS
const createGuitarButton = document.querySelector('#create-guitar-button')
const guitarTypeSelector = document.querySelector('#type-select')
const guitarBrandSelector = document.querySelector('#brand-select')
const guitarStringSelector = document.querySelector('#strings-selector')
const guitarPriceSelector = document.querySelector('#price-selector')
//
function getRes() {
  axios
    .get('http://localhost:8080/')
    .then((res) => console.log(`who is defined?`, res))
    .catch((err) => {
      console.log('ERROR MAN')
      return err
    })
}

function storeGuitar(guitar) {
  //collect guitar information
  //send it to the server
}
