/** @format */

import React from 'react';
import useStyles from './descriptionStyles';

const Description = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.title}>Interaction Design Apprenticeship</h2>
      <p className={classes.breif}>
        A fully funded work-study program to launch your tech career{' '}
      </p>
      <p className={classes.description}>
        Harbour.Space has partnered with SCG to empower driven talent and
        eliminate the barriers to accessing exceptional education and career
        opportunities through a Masters Fellowship.{' '}
      </p>
      <p className={classes.position}>
        <span className={classes.justBold}>Position: </span>Marketing
        Performance
      </p>
      <div>
        <button className={classes.button}>Apply Now</button>
      </div>
    </div>
  );
};

export default Description;
