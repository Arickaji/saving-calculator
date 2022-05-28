import * as React from 'react';

import Box from '@mui/material/Box';
import { Grid, Input, Slider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledInput = styled(Input)`
  width: 100px;
  padding: 0;
`;

export default function SliderSizes({min = 0,max = 100,step = 1,label,endAdornment,fieldName,defaultValue}) {
  const [value, setValue] = React.useState(defaultValue);


  const handleInputChange = (event) =>{
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  }
  
  
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  
  const handleSliderChange = (event , newValues) =>{
    setValue(newValues);
  }
  


  return (
    <Box paddingTop={3}>
        <Grid container>
            <Grid item flex="1">
              <Typography variant="h6" >{label}</Typography>
            </Grid>
            <Grid item justifySelf="flex-end">
            <StyledInput
                size="small"
                onChange={handleInputChange}
                onBlur={handleBlur}
                value={value}
                inputProps={{
                  step,
                  min,
                  max,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                  style: { padding: '0' },
                }}
                
                endAdornment={endAdornment && <Box marginRight={1}>{endAdornment}</Box>}
              />
            </Grid>
        </Grid>
        <Grid container spacing={4} paddingTop={1} alignItems="center">
          <Grid item xs>
            <Slider
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              min={min}
              max={max}
              step={step}
              value={value}
            />
          </Grid>
        </Grid>
    </Box>
  );
}
