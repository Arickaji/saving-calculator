import { useMemo, useCallback } from 'react';
import shallow from 'zustand/shallow';
import { useStore } from '../useStore';

const NO_OF_MONTHS = 12;

export const useCalculateGain = () => {


    const { investedAmount, expectedReturn, timePeriod, startingAmount } = useStore(
      useCallback(
        ({ expectedReturn, timePeriod, investedAmount, startingAmount }) => ({
          expectedReturn,
          timePeriod,
          investedAmount,
          startingAmount,
        }),
        [],
      ),
      shallow,
    );

    const monthlyROI = useMemo(() => expectedReturn / (100 * NO_OF_MONTHS), [expectedReturn]);
    const months = useMemo(() => timePeriod * NO_OF_MONTHS, [timePeriod]);

    const totalReturnsOnStartingAmount = useMemo(
      () => Math.round(startingAmount * Math.pow(1 + expectedReturn / 100, timePeriod)),
      [expectedReturn, startingAmount, timePeriod],
    );

    const totalReturnsOnMonthlyAmount = useMemo(
      () =>
        Math.round(
          investedAmount * ((Math.pow(1 + monthlyROI, months) - 1) / monthlyROI) * (1 + monthlyROI),
        ),
      [investedAmount, monthlyROI, months],
    );

    const totalInvestment = useMemo(
      () => investedAmount * timePeriod * NO_OF_MONTHS + startingAmount,
      [investedAmount, timePeriod, startingAmount],
    );

    const wealthGained = useMemo(
      () => totalReturnsOnMonthlyAmount + totalReturnsOnStartingAmount - totalInvestment,
      [totalInvestment, totalReturnsOnMonthlyAmount, totalReturnsOnStartingAmount],
    );

    return {
      totalReturns: totalReturnsOnStartingAmount + totalReturnsOnMonthlyAmount,
      totalInvestment,
      wealthGained,
    };

    // const {startingAmount, expectedReturn, timePeriod, locale} = useStore();
    // const monthlyRate = useMemo(() => expectedReturn / 100 / NO_OF_MONTHS, [expectedReturn]);
    // const months = useMemo(() => timePeriod * NO_OF_MONTHS, [timePeriod]);

    // const totalReturnsOnMonthlyAmount = useMemo(
    //     () =>
    //       Math.round(
    //         startingAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate),
    //       ),
    //     [startingAmount, monthlyRate, months],
    // );

    // const totalInvestment = useMemo(() => startingAmount * timePeriod * expectedReturn,
    //       [startingAmount,timePeriod,expectedReturn],
    // );

    // const wealthGained = useMemo(
    //     () => totalReturnsOnMonthlyAmount - totalInvestment,
    //     [totalInvestment, totalReturnsOnMonthlyAmount],
    //   );
    

    // const monthlyRate = expectedReturn / 100 / NO_OF_MONTHS;
    // console.log("monthly rate : " + monthlyRate);
          
    // const firstPart = useMemo(() =>Math.pow((1 + monthlyRate),NO_OF_MONTHS * timePeriod) - 1)

    // // const firstPart = Math.pow((1 + monthlyRate),24) - 1;
    // console.log("first part : " + firstPart);

        
    // const secondPart = useMemo(() => ( 1 + monthlyRate ) / monthlyRate)

    // // const secondPart = ( 1 + monthlyRate ) / monthlyRate
    // console.log("second part : " + secondPart);

    // const totalWealth = useMemo(() => Math.round(startingAmount * firstPart * secondPart), [startingAmount,firstPart,secondPart]);

    // // const totalWealth = Math.round(startingAmount * firstPart * secondPart);
    // console.log("total wealth : " + totalWealth);

    
        
    // const estReturnAmount = useMemo(() => totalWealth - totalInvestment,[totalWealth,totalInvestment]);

    // return {
    //     totalReturn : totalReturnsOnMonthlyAmount,
    //     totalInvestment,
    //     wealthGained,
    // }
};