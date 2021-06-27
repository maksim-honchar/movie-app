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
  description: {
    marginTop: 20,
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
      <Typography
        paragraph
        color="textSecondary"
        variant="caption"
        className={classes.description}
      >
        make sure to enter the correct actor&#39;s first name or movie title
      </Typography>
    </div>
  );
};
