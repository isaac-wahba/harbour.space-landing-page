/** @format */

import React from 'react';

import useStyles from './appInfoStyles';
import Logo from '../../assets/images/logo.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const AppInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.credentials}>
        <img src={Logo} alt='Logo' className={classes.image} />
        <p>
          <span className={classes.credentialsTitle}>Powered by:</span>
          <br />
          Zeptolab
        </p>
      </div>
      <Card className={classes.counterCard}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom>
            Application closes in
          </Typography>

          <Typography
            variant='body2'
            component='p'
            className={classes.countingDown}>
            6 Day : 22 Hrs : 56 Min : 13 Seg <br />
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.moreInfoCard}>
        <CardContent className={classes.locationAndDuration}>
          <Typography color='textSecondary' gutterBottom>
            <span className={classes.detail}>Location</span> <br />
            Bangkok
          </Typography>
          <Typography color='textSecondary' gutterBottom>
            <span className={classes.detail}>Duration</span>
            <br />1 Year <br />
            Full-Time
          </Typography>
        </CardContent>
        <CardContent className={classes.dates}>
          <Typography color='textSecondary' gutterBottom>
            <span className={classes.detail}>Start date</span> <br />
            30 June 2020
          </Typography>
          <Typography color='textSecondary' gutterBottom>
            <span className={classes.detail}>End date</span> <br />3 Aug 2020
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppInfo;
