import React, { FC, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import db from '../firebase/firebaseInitial';
import { movies } from '../utils/constants';
import testJson from '../utils/test.json';

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    textAlign: 'center',
  },
  input: {
    display: 'none',
  },
});

export const AddMovieList: FC = () => {
  const classes = useStyles();

  let fileList;

  const uploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    fileList = e.currentTarget.files;
    if (!fileList) return;

    if (fileList) {
      console.log(fileList);
    }
  };

  return (
    <div className={classes.root}>
      <input
        accept="*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={uploadPhoto}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>

    </div>
  );
};

//   const uploadFile = () => {
//     testJson.map((movie) => db.collection(movies).doc(movie.id).set(movie));
//   };
