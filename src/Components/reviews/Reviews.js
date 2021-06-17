/** @format */

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import useStyles from './reviewsStyles';
import ScrollContainer from 'react-indiana-drag-scroll';
import Image from '../../assets/images/Image.png';

//import ScrollMenu from 'react-horizontal-scrolling-menu';

export default function Reviews() {
  const classes = useStyles();

  return (
    <ScrollContainer
      horizontal='true'
      className='scroll-container'
      nativeMobileScroll='true'>
      <div className={classes.container}>
        <div>
          <Card className={classes.root}>
            <CardContent>
              <div className={classes.cardHeaderDiv}>
                <div className={classes.reviewer}>
                  <img src={Image} alt='R' className={classes.image} />
                  <div className={classes.identity}>
                    <Typography
                      className={classes.title}
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Irene Pereyra
                    </Typography>
                    <Typography
                      className={classes.subTitle}
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Interaction Design Fellow ‘19{' '}
                    </Typography>
                  </div>
                </div>

                <IconButton className={classes.iconItem} aria-label='settings'>
                  <LinkedInIcon />
                </IconButton>
              </div>
              <Typography
                className={classes.review}
                variant='body2'
                color='textSecondary'
                component='p'>
                This Fellowship was a turning point in my career. I wouldn’t be
                where I am today without the financial support and experienced
                offered through the program.
              </Typography>
              <Typography
                className={classes.education}
                variant='body2'
                color='textSecondary'
                component='p'>
                Education · B.A. Visual Design{' '}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className={classes.root}>
            <CardContent>
              <div className={classes.cardHeaderDiv}>
                <div className={classes.reviewer}>
                  <img src={Image} alt='R' className={classes.image} />
                  <div className={classes.identity}>
                    <Typography
                      className={classes.title}
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Irene Pereyra
                    </Typography>
                    <Typography
                      className={classes.subTitle}
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Interaction Design Fellow ‘19{' '}
                    </Typography>
                  </div>
                </div>

                <IconButton className={classes.iconItem} aria-label='settings'>
                  <LinkedInIcon />
                </IconButton>
              </div>
              <Typography
                className={classes.review}
                variant='body2'
                color='textSecondary'
                component='p'>
                This Fellowship was a turning point in my career. I wouldn’t be
                where I am today without the financial support and experienced
                offered through the program.
              </Typography>
              <Typography
                className={classes.education}
                variant='body2'
                color='textSecondary'
                component='p'>
                Education · B.A. Visual Design{' '}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          {' '}
          <Card className={classes.root}>
            <CardContent>
              <div className={classes.cardHeaderDiv}>
                <div className={classes.reviewer}>
                  <img src={Image} alt='R' className={classes.image} />
                  <div className={classes.identity}>
                    <Typography
                      className={classes.title}
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Irene Pereyra
                    </Typography>
                    <Typography
                      className={classes.subTitle}
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Interaction Design Fellow ‘19{' '}
                    </Typography>
                  </div>
                </div>

                <IconButton className={classes.iconItem} aria-label='settings'>
                  <LinkedInIcon />
                </IconButton>
              </div>
              <Typography
                className={classes.review}
                variant='body2'
                color='textSecondary'
                component='p'>
                This Fellowship was a turning point in my career. I wouldn’t be
                where I am today without the financial support and experienced
                offered through the program.
              </Typography>
              <Typography
                className={classes.education}
                variant='body2'
                color='textSecondary'
                component='p'>
                Education · B.A. Visual Design{' '}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollContainer>
  );
}
