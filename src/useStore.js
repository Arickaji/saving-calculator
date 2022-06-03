import create from 'zustand';
import shallow from 'zustand/shallow';
export const useStore = create(set => ({
    timePeriod: 10,
    locale: 'sv-SE',
    startingAmount: 15000,
    expectedReturn: 12,
    setStoreValue: (key, value) => {
        console.log(key);
        console.log(value);
        set(state => ({ ...state, [key]: value }));
    },
}));