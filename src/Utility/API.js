import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: `https://rcp.codeinsomnia.com`,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

instance.interceptors.request.use(async config => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error('Error retrieving token:', error);
  }
  return config;
});

export {instance};
