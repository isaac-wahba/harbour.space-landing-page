/** @format */

import React from 'react';

import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './appBarStyles';
function handleClick(event) {
  event.preventDefault();
  console.info('Link to the main page of Harbour.Space university.');
}

export default function ApplicationBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Breadcrumbs className={classes.title} aria-label='breadcrumb'>
              <Link color='inherit' href='/' onClick={handleClick}>
                HARBOUR SPACE{' '}
              </Link>
              <Typography color='inherit'>INTERACTION DESIGN</Typography>
            </Breadcrumbs>{' '}
          </Typography>
          <Button color='inherit' className={classes.button}>
            Apply Now
          </Button>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
