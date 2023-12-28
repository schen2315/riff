import axios, { AxiosInstance } from 'axios';

const endpoint = 'https://fuzzy-guacamole-jjqgjqqg942rwx-8080.preview.app.github.dev';

const client: AxiosInstance = axios.create({
  baseURL: endpoint + '/api/riffs'
});

const requestRiff = async (queryParams: string) => {
  return await client.get(`?${queryParams}`);
}

export default requestRiff;