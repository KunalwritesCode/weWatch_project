import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

export const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
          <IconButton color="inherit" edge="start" style={{ outline: 'none' }} onClick={() => {}} className={classes.menuButton}>
            <Menu />
          </IconButton>
          )}
        </Toolbar>

      </AppBar>
    </>
  );
};

