import axios from 'axios'

let data;
axios({
    method: 'get',
    url: 'http://localhost:3000/getBudget/5e31b2150393b87862452bd0/',
    responseType: 'json'
  }).then(function (response) {
    // handle success
    data = response.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

export default data;