import API from '@/services';

interface ILogin {
  username: string;
  password: string;
}
export async function postLogin(data: ILogin) {
  const response = await API.post('/auth/login', data);

  return response?.data;
}
