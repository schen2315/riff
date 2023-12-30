import axios, { AxiosInstance } from 'axios';

// const endpoint = 'https://fuzzy-guacamole-jjqgjqqg942rwx-8080.preview.app.github.dev';
const endpoint = 'https://9lifi75hriduod-3000.proxy.runpod.net/';

const client: AxiosInstance = axios.create({
  baseURL: endpoint + 'api/musicgen'
});

const requestRiff = async (queryParams: string) => {
  return await client.get(`?${queryParams}`);
}

export default requestRiff;