import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useCalculateGain } from '../hooks/useCalculateGain';


function Result() {

  const { totalInvestment } = useCalculateGain();

  return (
    <Container maxWidth="xs">
      <Grid container marginTop={3}>
        <Grid container>
          <Grid item flex="1" color={(t) => t.palette.info.main}>
            <Typography fontWeight={300}>Total invested amount</Typography>
            <Typography variant="h6">
              {totalInvestment}
            </Typography>
          </Grid>
          <Grid item color={(t) => t.palette.primary.main}>
            <Typography fontWeight={300}>Est. returns</Typography>
            <Typography variant="h6">
              Temp2
            </Typography>
          </Grid>
        </Grid>
        <Grid marginTop={2} container justifyContent="center" alignContent="center">
          <Grid item>
            <Typography fontWeight={300}>{'totalValue'}</Typography>
            <Typography variant="h6" alignSelf="center">
              Temp3
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Result