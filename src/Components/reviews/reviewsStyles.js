/** @format */

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    //position: "relative",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: '136.78px',
    marginTop: '109.08px',
    width: '800px',
    height: ' 459.92px',
    left: '272px',
    top: '2343.08px',
    radius: '4px',
    background: '#FFFFFF',
    border: '1px solid #DADADA',
    boxSizing: 'border-box',
    borderRadius: '4px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },

  cardHeaderDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginButtom: '56.02px',
    marginTop: '19.65px',
    marginLeft: '19.65px',
  },

  reviewer: {
    display: 'flex',

    alignContent: 'flex-start',
  },
  image: {
    width: '117.93px',
    height: '117.93px',
    border: '1px solid #EEEEEE',
    borderRadius: '438px',
    left: '245px',
    top: '2362.74px',
  },

  identity: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'flex-start',
    marginLeft: '18px',
  },
  title: {
    height: '24px',
    left: '0%',
    right: '49.74%',
    top: '0%',

    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',

    letterSpacing: ' -0.145455px',

    color: '#535353',
  },

  subTitle: {
    height: '24px',
    left: '0%',
    right: '0%',
    top: '22px',

    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '24px',

    letterSpacing: '-0.16p',

    color: '#535353',
  },
  iconItem: {
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
  },

  review: {
    height: '137.58px',
    width: '561px',
    left: '0%',
    right: '0%',
    top: '0%',
    buttom: '28.21%',

    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '26px',
    lineHeight: '35px',

    letterSpacing: '  -0.185714px',

    color: '#6A6A6A',

    marginTop: '66.83px',
    marginLeft: '120px',
  },

  education: {
    height: '24px',
    width: '212px',
    left: '0%',
    right: '0%',

    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '24px',

    letterSpacing: '-0.16px',

    color: '#535353',

    marginTop: '31.42px',
    marginLeft: '120px',
  },
}));

export default useStyles;
