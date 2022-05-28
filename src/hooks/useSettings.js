   
import React from 'react';
import { SupportedCurrency, SupportedLang } from '../types';

const STORAGE_KEY = 'settings';

// const Settings = {
//   language: SupportedLang,
//   currency: SupportedCurrency,
// };

const getSettingsStorage = () =>
  JSON.parse((typeof window !== 'undefined' && window.localStorage.getItem(STORAGE_KEY)) || '{}');

export const useSettings = () => {
  const [settingsState, setSettingsState] = React.useState({
    language: getSettingsStorage().language,
    currency: getSettingsStorage().currency,
  });
  const setSettings = (value) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    // hack to trigger stroage event
    window.dispatchEvent(new Event('storage'));
  };

  React.useEffect(() => {
    const onStorageChange = () => {
      setSettingsState(getSettingsStorage());
    };

    window.addEventListener('storage', onStorageChange, false);
    return () => window.removeEventListener('storage', onStorageChange);
  }, []);

  return {
    settings: settingsState,
    setSettings,
  };
};