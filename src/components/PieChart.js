import React from 'react'
import { Grid, Typography, useTheme } from '@mui/material';
import { PieChart as PChart } from 'react-minimal-pie-chart';
import { Box } from '@mui/system';
import useTranslation from 'next-translate/useTranslation';
import { useCalculateGain } from '../hooks/useCalculateGain';

function PieChart() {
    const { totalInvestment, wealthGained } = useCalculateGain();
    const theme = useTheme();
    return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item mr={1}>
          <Box sx={{ width: 20, height: 10, backgroundColor: theme.palette.info.main }} />
        </Grid>
        <Grid item mr={1}>
          <Typography variant="subtitle2">Total Invested</Typography>
        </Grid>
        <Grid item mr={1}>
          <Box sx={{ width: 20, height: 10, backgroundColor: "#8bc34a"}} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">Est. Return</Typography>
        </Grid>
      </Grid>
      <PChart
        animate
        lineWidth={35}
        paddingAngle={5}
        data={[
          { title: "Total Invested", value: totalInvestment, color: theme.palette.primary.main    },
          { title: "Est. Return", value: wealthGained, color: "#8bc34a"},
        ]}
      />
    </>
  )
}

export default PieChart