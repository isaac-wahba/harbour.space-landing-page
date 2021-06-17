/** @format */

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  credentials: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '27px',
  },
  credentialsTitle: {
    opacity: 0.5,
    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: ' -0.18px',
    color: '#000000',
    mixBlendMode: 'normal',
  },
  image: {
    marginBottom: '27px',
    marginRight: '40px',
    height: '80px',
    left: '55.56%',
    right: '38.89%',
    top: '261px',
  },

  counterCard: {
    width: '480px',
    height: '116px',
    top: '368px',
    left: '800px',
    backgroundColor: '#FFFFFF',
    border: '1px',
    borderRadius: '4px',
    solid: '#DADADA',
    boxSizing: 'border-box',
    marginBottom: '30px',
  },

  title: {
    height: '24px',
    right: '0%',
    left: '0%',
    color: '#685DC5',
    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: ' -0.145455px',
    marginLeft: '40px',
  },
  countingDown: {
    marginLeft: '40px',
    height: '24px',
    right: '1.84%',
    left: '0%',
    color: '#535353',
    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '27px',
    lineHeight: '24px',
    letterSpacing: ' -0.27px',
  },
  moreInfoCard: {
    display: 'flex',
    flexFlow: 'column',
    width: '480px',
    height: '200px',
    top: '514px',
    left: '800px',
    backgroundColor: '#FFFFFF',
    border: '1px',
    borderRadius: '4px',
    solid: '#DADADA',
    boxSizing: 'border-box',
  },

  detail: {
    height: '24px',
    right: '0%',
    left: '0%',
    color: '#685DC5',
    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: ' -0.145455px',
  },
  locationAndDuration: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dates: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}));

export default useStyles;
