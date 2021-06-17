/** @format */

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    height: '4358px',
    flexGrow: 1,
  },

  appbar: {
    height: '130.08px',
    left: '0px',
    top: '0px',
  },

  firstSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    marginLeft: '200px',
    marginRight: '160px',
    marginTop: '190.92px',
  },

  aboutSection: {
    display: 'flex',
    flexDirection: 'row',
    margin: '189px 0px 72px 0px',
  },

  reviewsSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: '200px',
    marginRight: '160px',
    marginTop: '170px',
  },
  thirdSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionsSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: '160px',
    marginTop: '170px',
    marginButtom: '200px',
  },
}));

export default useStyles;
