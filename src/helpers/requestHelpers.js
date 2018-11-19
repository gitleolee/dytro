import io from 'socket.io-client';
import { URL } from '../constants';

export const token = () =>
  typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

export const auth = () => ({
  headers: {
    authorization: token()
  }
});

export const socket = io.connect(URL);
