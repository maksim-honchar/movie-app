import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { AddMovieController } from '../controllers/AddMovieController';
import { HeaderController } from '../controllers/HeaderController';
import { UploadFileController } from '../controllers/UploadFileController';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  children: {
    flex: 8,
  },
  rightBlock: {
    flex: 3,
    minHeight: '100vh',
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
          <UploadFileController />
        </div>
      </div>
    </>
  );
};
