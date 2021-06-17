/** @format */

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '170px',
    display: 'flex',
    flexDirection: 'column',
  },
  headerDev: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '170.98',
    alignItems: 'baseline',
    justifyContent: 'space-around',
  },
  title: {
    height: '112px',
    right: '57.72%',
    left: '0%',
    color: '#685DC5',
    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '48px',
    lineHeight: '56px',
    letterSpacing: ' -0.6px',
  },
  filterLabel: {
    width: '75px',

    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: ' -0.16px',

    textAlign: 'right',

    color: '#6A6A6A',
  },
  filter: {
    width: '235px',
    height: '58px',

    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: ' -0.16px',

    textAlign: 'right',

    color: '#6A6A6A',
  },

  filterText: {
    alignSelf: 'auto',
    width: '156px',
    height: '24px',
    top: '0%',
    right: '0%',

    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: ' -0.16px',

    textAlign: 'right',

    color: '#6A6A6A',
  },
  questionsDev: {
    marginLeft: '147px',
  },
  category: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  question: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  //Drop down
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'baseline !important',
  },
}));

export default useStyles;
