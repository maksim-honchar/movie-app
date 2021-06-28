import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 20,
    marginTop: 10,
  },
});

interface IErrorMessage {
    errorMessage: string
}

export const ErrorMessage:FC<IErrorMessage> = ({ errorMessage }) => {
  const classes = useStyles();

  const content = (
    <Typography
      color="error"
      paragraph
      align="center"
      variant="caption"
    >
      {`An error occured: ${errorMessage}`}
    </Typography>
  );

  return (
    <div className={classes.root}>
      {errorMessage && content}
    </div>
  );
};
