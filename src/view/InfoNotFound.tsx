import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30vh',
  },
});

export const InfoNotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h2"
        color="textSecondary"
        gutterBottom
      >
        We are Sorry ...
      </Typography>
      <Typography variant="overline">
        Information not found
      </Typography>
      <Divider variant="middle" />
    </div>
  );
};
