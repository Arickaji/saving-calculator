import create from 'zustand';
import shallow from 'zustand/shallow';
export const useStore = create(set => ({
    investedAmount: 2500,
    expectedReturn: 12,
    timePeriod: 15,
    locale: 'sv-SE',
    startingAmount: 100000,
    setStoreValue: (key, value) => {
        set(state => ({ ...state, [key]: value }));
    },
}));