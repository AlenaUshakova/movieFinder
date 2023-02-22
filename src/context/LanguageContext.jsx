import { createContext, useEffect } from 'react';
import useLocalStorage from 'Hooks/useLocalStorage';

export const languageContext = createContext('en');

const LS_KEY = 'saveln';

export const LanguageContext = ({ children }) => {
  const [selectedOption, setSelectedOption] = useLocalStorage('saveln', {
    value: 'en',
    label: 'EN',
  });
  const options = [
    { value: 'en', label: 'EN' },
    { value: 'ru', label: 'RU' },
  ];
  const { value } = selectedOption;

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(selectedOption));
  }, [selectedOption]);

  return (
    <languageContext.Provider
      value={{ selectedOption, setSelectedOption, options, value }}
    >
      {children}
    </languageContext.Provider>
  );
};
