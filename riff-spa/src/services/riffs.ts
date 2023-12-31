import axios, { AxiosInstance } from 'axios';

const endpoint = 'https://fuzzy-guacamole-jjqgjqqg942rwx-8000.preview.app.github.dev';
// const endpoint = 'https://9lifi75hriduod-3000.proxy.runpod.net/';

const client: AxiosInstance = axios.create({
  baseURL: endpoint + '/api/musicgen'
});

const requestRiff = async (queryParams: string) => {
  try {
    const resp = await client.get(`?${queryParams}`)
    if (resp.status >= 400) {
      return { error: new Error(`Encountered ${resp.status} error.`), data: null }
    }
    return { error: null, data: resp.data }
  } catch (error) {
    return { error: error }
  }
}

export default requestRiff;
export { endpoint };