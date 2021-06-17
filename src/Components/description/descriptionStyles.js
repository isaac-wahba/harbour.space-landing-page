/** @format */

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  title: {
    height: '96px',
    right: '55.56%',
    left: '13.89%',
    top: '261px',
    color: '#685DC5',
    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '48px',
    lineHeight: '56px',
    letterSpacing: ' -0.6px',
  },
  justBold: {
    fontWeight: '500',
  },
  breif: {
    height: '64px',
    width: '440px',
    left: '201px',
    top: ' 405px',

    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '22px',
    lineHeight: '32px',
    letterSpacing: ' -0.33px',
    color: '#535353',
  },

  description: {
    height: '160px',
    width: '440px',
    left: '200px',
    top: '509px',

    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '22px',
    lineHeight: '32px',

    letterSpacing: ' -0.33px',

    color: '#535353',
  },

  position: {
    height: '33px',
    width: '438px',
    left: '202px',
    top: '709px',
    //    border-radius: nullpx;
  },

  button: {
    backgroundColor: '#685DC5',
    borderRadius: '29px',
    height: '58px',
    width: '170px',
    //mixBlendMode: "Pass through",
    border: '0',

    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '24px',
    textAlign: 'center',
    letterSpacing: ' -0.18px',
    color: '#FFFFFF',
    paddingLeft: '40.96px',
    paddingRight: '40.96px',
    paddingTop: '16px',
    paddingBottom: '18px',
  },
}));
export default useStyles;
