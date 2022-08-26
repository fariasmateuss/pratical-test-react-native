import axios from 'axios';

export const clientNYTimes = axios.create({
  baseURL: 'https://api.nytimes.com/svc/books/v3/lists',
  params: {
    'api-key': 'vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR',
  },
});
