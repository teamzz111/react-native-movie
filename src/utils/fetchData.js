import { baseURL, imageURL, token } from '../constants/functionsURLs';

const axios = require('axios');

export const fetchData = {
  OpenGet: async function(url) {
    return await axios
      .get(baseURL + url)
      .then(res => createOkResponse(res))
      .catch(err => createErrorResponse(err));
  },
  Get: async function(url) {
    return await axios
      .get(baseURL + url, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => createOkResponse(res))
      .catch(err => createErrorResponse(err));
  },
  Post: async function(url, body) {
    return await axios
      .post(baseURL + url, body, {
      headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => createOkResponse(res))
      .catch(err => createErrorResponse(err));

  },
  Put: async function(url, body) {
    return await axios
      .put(baseURL + url, body, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => createOkResponse(res))
      .catch(err => createErrorResponse(err));
  },
};

const createOkResponse = response => {
  return {
    ok: response.status === 200,
    data: response.data.results,
  };
};

const createErrorResponse = err => {
  return {
    ok: false,
    error: err,
  };
};
