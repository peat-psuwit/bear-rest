import axios from 'axios';

const BEAR_API_URL = 'http://localhost:8000/api/bears';

export let fetchBears = function() {
  return (dispatch) => {
    return axios.get(BEAR_API_URL)
      .then( (response) => {
        console.log('fetchBears payload: ', response.data);

        dispatch({ type: 'FETCH_BEAR', payload: response.data });
      });
  };
};