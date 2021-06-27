import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20vh',
  },
  titleIntro: {
    marginTop: 70,
  },
});

export const EmptyStorage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h2"
        color="textSecondary"
        gutterBottom
      >
        Please add content
      </Typography>
      <Typography variant="overline">
        fill the form or upload file
      </Typography>
      <Divider variant="middle" />
      <Typography
        variant="h6"
        color="textSecondary"
        align="center"
        gutterBottom
        className={classes.titleIntro}
      >
        Application architecture
      </Typography>
      <Typography color="textSecondary">
        The application uses the following technology stack:
        TypeScript, React, Redux, Material-UI, Firebase, react-router-dom, webpack.
        <br />
        The src folder contains folders and files responsible for UI and application logic.
        <br />
        The controllers folder contains components responsible for the application logic.
        <br />
        The view folder contains components that are responsible for displaying UI.
        <br />
        The redux folder contains a store and a reducer
        <br />
        The utils folder, as the name implies, contains constants, interfaces, a custom hook.
        <br />
        Firebase folder is responsible for firebase settings
      </Typography>
    </div>
  );
};
