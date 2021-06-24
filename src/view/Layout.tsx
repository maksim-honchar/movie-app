import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { TopBar } from './TopBar';
import { AddMovieController } from '../controllers/AddMovieController';

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
    border: '1px solid',
  },
});

export const Layout: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <TopBar />
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
