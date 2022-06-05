import { SupportedCurrency, SupportedLang } from '../types';

export const formatter = ({
  number ,
  lang ,
  currency = 'IN' }) => {
  return new Intl.NumberFormat(`${lang}-${currency.substr(0, 2)}`, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  }).format(number);
};