/** @format */

import React from 'react';
import useStyles from './aboutStyles';

import Student from '../../assets/images/student.png';

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imageDiv}>
        <img src={Student} alt='Student_Photo' className={classes.image} />
      </div>

      <div className={classes.aboutProgram}>
        <h2 className={classes.title}>About the apprenticeship</h2>
        <div className={classes.description}>
          <p>
            Our scholarships are designed to give talented and driven young
            people from any background access to top-class education, experience
            and network. We offer a fully-funded master’s degree alongside an
            apprenticeship and a guaranteed job upon graduation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
