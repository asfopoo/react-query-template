import { getRequest } from '../axios';

export async function fetchUser() {
  return await getRequest('user');
}
