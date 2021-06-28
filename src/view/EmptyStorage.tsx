import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { ErrorMessage } from './ErrorMessage';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20vh',
  },
  titleIntro: {
    marginTop: 50,
  },
});

interface IEmptyStorage {
  errorMessage: string
}

export const EmptyStorage:FC<IEmptyStorage> = ({ errorMessage }) => {
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
      <ErrorMessage errorMessage={errorMessage} />
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
        <br />
        For the sake of ease of use of this application,
        I am not using private transfer of the .env file with passwords.
      </Typography>
    </div>
  );
};
