import * as React from 'react';

import Box from '@mui/material/Box';
import { Grid, Input, Slider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useStore } from '../useStore';

const StyledInput = styled(Input)`
  width: 100px;
  padding: 0;
`;

export default function SliderSizes({min = 0,max = 100,step = 1,label,endAdornment,fieldName}) {
  
  // const [value, setValue] = React.useState(defaultValue);
  const setValue = useStore(React.useCallback((state) => state.setStoreValue, []));
  const value = useStore(React.useCallback((state) => state[fieldName], [fieldName]));

  // console.log(value);

  const handleInputChange = (event) =>{
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  }
  
  
  const handleBlur = React.useCallback(() => {
    if (value < min) {
      setValue(fieldName, min);
    } else if (value > max) {
      setValue(fieldName, max);
    }
  }, [value, min, max, setValue, fieldName]);
  
  // const handleSliderChange = (event , newValues) =>{
  //   setValue(newValues);
  // }

  const handleSliderChange = React.useCallback(
    (_, newValue) => {
      setValue(fieldName, newValue);
    },
    [fieldName, setValue],
  );
  

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
