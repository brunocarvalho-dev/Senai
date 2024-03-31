const axios = require('axios');
const pais = toString(window.document.querySelector('#pais').value);
const ano = Number(window.document.querySelector("#ano").value);
const btnBuscar = window.document.querySelector("#btnBuscar");

btnBuscar.addEventListener("click", () => {
axios.get('https://api.getfestivo.com/v2/holidays', {
    params: {
      api_key: "cb4c0961b05c5bf7521369b97bea79ed",
      country: pais,
      year: ano,
      language: "pt",
      after: 1
    }
  })
  .then(function (response) {
    // handle success
    console.log(holidays.name);
    console.log(feriados.data);
    //console.log(response)
  })
  .catch(function (error) {
    // handle error

    console.log(error)
  })
  .then(function () {
    // always executed
  })
} )
  
  	
/*
const axios = require('axios');

axios.get('https://api.getfestivo.com/v2/countries', {
  params: {
    api_key: "XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXX"
  }
})
.then(function (response) {
  // handle success
  console.log(response)
})
.catch(function (error) {
  // handle error
  console.log(error)
})
.then(function () {
  // always executed
})
*/