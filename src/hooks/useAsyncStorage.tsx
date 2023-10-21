import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default function useAsyncStorage(key: string, initialValue: any) {
  const initialValueString = initialValue.toString();
  const [getData, setData] = useState(initialValueString);

  const getStoredData = async () => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setData(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async (value: any) => {
    try {
      const valueString = value.toString();
      await AsyncStorage.setItem(key, valueString);
      setData(valueString);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getStoredData();
  }, []);

  return { getData, storeData };
}
