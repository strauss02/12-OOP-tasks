const createGuitarButton = document.querySelector('#create-guitar-button')

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
