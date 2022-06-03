import { useMemo, useCallback } from 'react';
import shallow from 'zustand/shallow';
import { useStore } from '../useStore';

const NO_OF_MONTHS = 12;

export const useCalculateGain = () => {
    const {startingAmount, expectedReturn, timePeriod, locale} = useStore();
    console.log(timePeriod);

    
    const totalInvestment = startingAmount * timePeriod * expectedReturn;

    return {
        totalInvestment,
    }
};