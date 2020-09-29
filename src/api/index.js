import axios from 'axios';

const apiRequest = (method, url) => {
  return axios({
    method,
    url: `https://api.covidtracking.com/v1/${url}`,
  });
}

export default {
  USData() {
    return apiRequest('get', 'us/daily.json');
  },

  USDataByDate(date) {
    return apiRequest('get', `us/${date}.json`);
  },
  
  stateData(state) {
    return apiRequest('get', `states/${state}/current.json`);
  },
};