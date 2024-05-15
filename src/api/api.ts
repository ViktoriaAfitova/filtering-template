import axios from 'axios';

const BASE_URL = 'https://logiclike.com/docs/courses.json';

export const getCourse = () => {
  return axios.get(`${BASE_URL}`);
};
