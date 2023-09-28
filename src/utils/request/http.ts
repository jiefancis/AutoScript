import axios from 'axios';

const timeout = 1000 * 10;

const http = axios.create({
  timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { http, axios };
