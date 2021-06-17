/** @format */

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#685dc5',
    color: 'white',
  },
  menuButton: {
    marginLeft: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
    color: 'white',
  },

  button: {
    backgroundColor: '#00e676',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    fontSize: '5',
    position: 'absolute',
    top: '11px',
    right: '100px',
    '&:hover': {
      backgroundColor: '#00e676',
      boxShadow: 'none',
    },
  },
}));

export default useStyles;
