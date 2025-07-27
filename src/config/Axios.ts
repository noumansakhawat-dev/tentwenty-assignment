import { showMessage } from 'react-native-flash-message';
import Axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

import { appConfig } from '~/config/envConfig';

Axios.interceptors.request.use(
  (config) => {
    const token = ''; // Replace with actual token retrieval logic
    config.baseURL = appConfig.baseURL;
    config.headers['Authorization'] = 'Bearer ' + token;
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error.response ? error.request : error);
  }
);

Axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    showMessage({
      message: error.message || 'Something went wrong!',
      type: 'danger'
    });
    return Promise.reject(error);
  }
);
export default Axios;

const useAxios = makeUseAxios({
  axios: Axios.create({
    baseURL: appConfig.baseURL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${appConfig.theMovieDbApiKey}`
    }
  })
});

export { useAxios };
