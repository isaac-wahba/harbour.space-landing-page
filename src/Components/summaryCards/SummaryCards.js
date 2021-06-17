/** @format */

import React from 'react';
//import  './Logo.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import useStyles from './summaryStyles';

const SummaryCards = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.feesCard}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom>
            Scholarship value
          </Typography>

          <Typography
            variant='body2'
            component='p'
            className={classes.scholarshipValue}>
            €31,300
          </Typography>
          <Divider className={classes.divider} variant='middle' />

          <div className={classes.livingAndTuition}>
            <div className={classes.tuition}>
              <Typography
                className={classes.details}
                color='textSecondary'
                gutterBottom>
                <span className={classes.detailTitle}>Tuition covered</span>{' '}
                <br />
                €20,900
              </Typography>

              <Typography
                className={classes.details}
                color='textSecondary'
                gutterBottom>
                <span className={classes.detailTitle}>Remaining</span> <br />
                €2,000
              </Typography>
            </div>
            <div className={classes.living}>
              <Typography
                className={classes.details}
                color='textSecondary'
                gutterBottom>
                <span className={classes.detailTitle}>Living stipend</span>{' '}
                <br />
                €8,400 (€700/month)
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className={classes.commitmentAndContractDev}>
        <div className={classes.commitmentDev}>
          <Card className={classes.studycommitmentCard}>
            <CardContent>
              <Typography
                className={classes.commitmentTitle}
                color='textSecondary'
                gutterBottom>
                Study commitment
              </Typography>

              <Typography
                variant='body2'
                component='p'
                className={classes.numbers}>
                3 hours / day
              </Typography>
              <Divider className={classes.commitmentDivider} variant='middle' />

              <Typography
                variant='body2'
                component='p'
                className={classes.text}>
                You will complete 15 modules to graduate. Daily classes are 3
                hours, plus coursework to complete in your own time.
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.workCommitmentCard}>
            <CardContent>
              <Typography
                className={classes.commitmentTitle}
                color='textSecondary'
                gutterBottom>
                Work commitment
              </Typography>

              <Typography
                variant='body2'
                component='p'
                className={classes.numbers}>
                4 hours / day
              </Typography>
              <Divider className={classes.commitmentDivider} variant='middle' />

              <Typography
                variant='body2'
                component='p'
                className={classes.text}>
                Immerse yourself in the professional world during your
                apprenticeship. You’ll learn the ropes from the best and get to
                apply your newly acquired knowledge in the field from day one.{' '}
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className={classes.graduationDev}>
          <Divider className={classes.graduationLeftDivider} variant='middle' />

          <Typography
            className={classes.graduationtext}
            color='textSecondary'
            gutterBottom>
            Graduation
          </Typography>
          <Divider
            className={classes.graduationRightDivider}
            variant='middle'
          />
        </div>
        <Card className={classes.contractCard}>
          <CardContent>
            <Typography
              className={classes.commitmentTitle}
              color='textSecondary'
              gutterBottom>
              A full-time contract
            </Typography>

            <Typography
              variant='body2'
              component='p'
              className={classes.numbers}>
              1 Year / Full-Time
            </Typography>
            <Divider className={classes.commitmentDivider} variant='middle' />

            <Typography variant='body2' component='p' className={classes.text}>
              You’ll be guaranteed a 1 year contract with SCG upon graduation.{' '}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SummaryCards;
