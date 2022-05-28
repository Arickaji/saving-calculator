import { Container } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';
import SliderInput from './SliderInput'
import PieChart from './PieChart';


function Calculator() {

  return (
      <Container maxWidth="md">
        <Grid container pt={4} spacing={4}>
            <Grid item flex="1" md={6} xs={12} sm={6}>
                <SliderInput
                  label='Starting Amount'
                  max={1000000}
                  step={500}
                  fieldName="startingAmount"
                  endAdornment={'₹'}
                  defaultValue={100000}
                />
                <SliderInput
                  label='Expected return rate'
                  max={100}
                  step={1}
                  fieldName="ExpectedReturnRate"
                  endAdornment='%'
                  defaultValue={12}
                />
                <SliderInput
                  label='Time period'
                  max={50}
                  step={1}
                  fieldName="timePeriod"
                  defaultValue = {10}
                  endAdornment='Years'
                />
            </Grid>
            <Grid item md={6} xs={12} sm={6}>
                <PieChart/>
            </Grid>
        </Grid>
      </Container>
  )
}

export default Calculator