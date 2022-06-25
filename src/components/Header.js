import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../img/logogot.png'


const Header = (props) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div" sx={{ mx: "auto" }}>
           <a href="/"><img src={logo} alt="GoT" height={100} width={350} /></a>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header