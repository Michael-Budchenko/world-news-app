import Axios, { AxiosInstance } from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const axiosClient: AxiosInstance = Axios.create({
  timeout: 5000,
  //baseURL: `http://192.168.10.182:8035/api/`,
  baseURL: `${apiUrl}/api/`,
  validateStatus: (status) => status >= 200 && status < 300,
});

export { axiosClient };
