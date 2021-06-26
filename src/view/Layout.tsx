import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { AddMovieController } from '../controllers/AddMovieController';
import { HeaderController } from '../controllers/HeaderController';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  children: {
    flex: 8,
  },
  rightBlock: {
    flex: 3,
    height: '100vh',
    borderLeft: '1px solid #e0e0e0',
  },
});

export const Layout: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <HeaderController />
      <div className={classes.root}>
        <div className={classes.children}>
          {children}
        </div>
        <div className={classes.rightBlock}>
          <AddMovieController />
        </div>
      </div>
    </>
  );
};
