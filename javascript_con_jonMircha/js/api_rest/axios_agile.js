import axios from "axios";

const optionsGet = {method: 'GET', url: 'http://localhost:3000/caballeros'};

axios.request(optionsGet).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


import axios from "axios";

const optionsPut = {
  method: 'PUT',
  url: 'http://localhost:3000/caballeros',
  headers: {Authorization: 'Basic Og=='},
  data: {query: 'query {}', variables: {}}
};

axios.request(optionsPut).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});



import axios from "axios";

const optionsDelete = {
  method: 'DELETE',
  url: 'http://localhost:3000/caballeros',
  headers: {Authorization: 'Basic Og=='},
  data: {query: 'query {}', variables: {}}
};

axios.request(optionsDelete).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});