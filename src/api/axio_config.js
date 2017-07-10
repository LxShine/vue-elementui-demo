import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080/ssm';
axios.defaults.headers = {
  'Content-Type': 'application/json;charset=utf-8',
  'Access-Control-Allow-Methods': 'GET, POST',
  'Access-Control-Allow-Origin': '*'
};

axios.interceptors.response.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default axios
