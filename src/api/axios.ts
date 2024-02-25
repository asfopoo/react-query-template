import axios from 'axios';

import { url } from '../../variables';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = url;

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

export async function getRequest(route: string) {
  const response = await axiosClient.get(`/${route}`);
  return response;
}

export async function postRequest(route: string, payload: any) {
  const response = await axiosClient.post(`/${route}`, payload);
  return response;
}

export async function patchRequest(route: string, payload: any) {
  const response = await axiosClient.patch(`/${route}`, payload);
  return response;
}

export async function deleteRequest(route: string) {
  const response = await axiosClient.delete(`/${route}`);
  return response;
}
