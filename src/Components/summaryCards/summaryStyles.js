/** @format */

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  //Container
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '210px',
    marginTop: '78.82px',
    marginButtom: '170px',
    flexWrap: 'wrap',
  },

  //Card 1: Fees & Studying costs
  feesCard: {
    width: '320px',
    height: '524px',
    top: '1540px',
    left: '201px',

    backgroundColor: '#FFFFFF',
    border: '1px solid #DADADA',
    borderRadius: '4px',
    boxSizing: 'border-box',
    marginButtom: '170px',
  },

  title: {
    height: '24px',
    right: '23.75%',
    left: '0%',
    color: '#685DC5',
    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: ' -0.145455px',
    marginLeft: '44px',
  },

  details: {
    height: '49px',
    right: '25.17%',
    left: '0%',
    color: '#535353',
    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.16px',
    marginLeft: '44px',
  },

  detailTitle: {
    color: '#685DC5',
  },
  scholarshipValue: {
    height: '34px',
    right: '0%',
    left: '0%',
    color: '#535353',
    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '48px',
    display: 'flex',
    alignItems: 'center',
    lineHeight: '24px',
    letterSpacing: '-0.436364px',
    marginLeft: '44px',
  },
  divider: {
    width: '265.75px',
    height: '1px',
    left: '228px',
    top: '1851px',
    border: '1px solid #DADADA',
    marginTop: '188px',
  },

  livingAndTuition: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    jsutifyContent: 'stretch',
  },

  tuition: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '61px',
    flexWrap: 'wrap',
  },

  living: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginButtom: '13px',
  },

  commitmentAndContractDev: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  //Commitment Cards
  commitmentDev: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
  },

  //Stydies Card

  studycommitmentCard: {
    width: '320px',
    height: '274px',
    top: '1540px',
    left: '561px',

    backgroundColor: '#FFFFFF',
    border: '1px solid #DADADA',
    borderRadius: '4px',
    boxSizing: 'border-box',

    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',

    marginLeft: '40px',
  },

  commitmentTitle: {
    height: '24px',
    right: '50%',
    left: '0%',
    color: '#685DC5',
    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: ' -0.145455px',
    marginLeft: '25px',
  },

  commitmentDivider: {
    right: '89.7%',
    left: '0%',
    top: '44.06%',
    buttom: '55.45%',
    border: '1px solid #DADADA',
    marginTop: '22px',
    marginButtom: '16px',
    width: '27.82px',
  },

  numbers: {
    height: '35px',
    right: '45.19%',
    left: '0%',
    color: '#6A6A6A',

    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '26px',
    lineHeight: '35px',
    letterSpacing: '-0.185714pxx',
    display: 'flex',
    alignItems: 'center',

    marginTop: '8px',
    marginLeft: '25px',
  },
  text: {
    top: '52.48%',
    right: '0%',
    left: '0%',
    color: '#535353',
    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.16px',
    marginButtom: '40px',
    marginLeft: '40px',
  },
  //Work Commitment Card
  workCommitmentCard: {
    width: '320px',
    height: '274px',
    top: '1540px',
    left: '921px',

    backgroundColor: '#FFFFFF',
    border: '1px solid #DADADA',
    borderRadius: '4px',
    boxSizing: 'border-box',
    marginLeft: '40px',
  },

  //Graduation Dev
  graduationDev: {
    marginTop: '36px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  graduationLeftDivider: {
    width: '265.75px',
    height: '1px',
    left: '0%',
    right: '60.69%',
    top: '50%',
    buttom: '45.83%',
    border: '1px solid #DADADA',
  },

  graduationtext: {
    width: '95px',
    right: '42.92%',
    left: '43.03%',
    color: '#535353',
    fontFamily: 'Apercu Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: ' -0.145455px',
  },
  graduationRightDivider: {
    width: '265.75px',
    height: '1px',
    left: '60.65%',
    right: '0.04%',
    top: '48.97%',
    buttom: '46.86%',
    border: '1px solid #DADADA',
  },
  contractCard: {
    width: '680px',
    height: '178px',
    top: '1886px',
    left: '561px',

    backgroundColor: '#FFFFFF',
    border: '1px solid #DADADA',
    borderRadius: '4px',
    boxSizing: 'border-box',
    marginLeft: '40px',
  },
}));

export default useStyles;
