/** @format */

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    //position: "relative",
    display: 'flex',
    flexDirection: 'row',

    //marginLeft: '136.78px',
  },
  title: {
    height: '112px',
    right: '13.96%',
    left: '52.78%',
    top: '1106px',
    color: '#685DC5',
    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '48px',
    lineHeight: '56px',
    letterSpacing: ' -0.6px',
    marginButtom: '40px',
  },

  description: {
    height: '160px',
    left: '52.78%',
    right: '13.96%',
    top: '1258px',

    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '22px',
    lineHeight: '32px',

    letterSpacing: ' -0.33px',

    color: '#535353',
  },
  imageDiv: {
    width: '602.18px',
    height: '402.18px',
    left: '136.78px',
    top: '1059px',
    paddingLeft: '66.22px',
    paddingRight: '97.96px',
    paddingButtom: '6.82px',
    paddingTop: '29px',
  },
  image: {
    width: '438px',
    height: '438px',
    border: '1px solid #EEEEEE',
    borderRadius: '438px',
    left: '203px',
    top: '1030px',
  },
  aboutProgram: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
}));

export default useStyles;
