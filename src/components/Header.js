import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import { Dialog, DialogTitle } from './Dialog';
import { DialogContent, DialogActions } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import SettingForm from './SettingForm';
import useTranslation from 'next-translate/useTranslation';

function Header() {

    const { t, lang: currentLanguage } = useTranslation('home');
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDialog = React.useCallback(() => {
      setIsOpen(true);
      console.log("Open Dialog");
      console.log(isOpen);
    }, [isOpen]);

    const handleCloseDialog = React.useCallback(() => {
      setIsOpen(false);  
      console.log("Close Dialog");
      console.log(isOpen);
    }, [isOpen]);

    const methods = useForm();

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar  position="static" style={{backgroundColor : '#8bc34a', color : "white"}}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <StackedLineChartIcon />
              </IconButton>
              <Typography pl={1}  variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontSize : "20px", fontWeight : "500"}}  >
                Saving Calculator
              </Typography>
              <Button color="inherit" onClick={handleOpenDialog}>ENGLISH | INR</Button>
              <Dialog
                onClose={handleCloseDialog}
                aria-labelledby="customized-dialog-title"
                open={isOpen}
              >
                <DialogTitle  id="customized-dialog-title" onClose={handleCloseDialog}>
                  Change language & currency
                </DialogTitle >
                <DialogContent dividers>
                <FormProvider {...methods}>
                    <SettingForm />
                </FormProvider>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleCloseDialog}>
                    Save changes
                  </Button>
                </DialogActions>
              </Dialog>
            </Toolbar>
          </AppBar>
        </Box>
    );
}

// const style = {
//   background : '#8bc34a',
//   fontsize : 25,
//   fontweight : 500
// };


export default Header
