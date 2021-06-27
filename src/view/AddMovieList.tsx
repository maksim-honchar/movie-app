import React, { FC, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop: 30,
    textAlign: 'center',
  },
  title: {
    marginTop: 10,
  },
  input: {
    display: 'none',
  },
});

interface IAddMovieList {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  clearTarget: (event: { currentTarget: { reset: () => void } }) => void
}

export const AddMovieList: FC<IAddMovieList> = ({ handleChange, clearTarget }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider />
      <Typography
        className={classes.title}
        variant="h5"
        gutterBottom
        color="textSecondary"
        paragraph
      >
        ...or upload file
      </Typography>
      <label htmlFor="button-file">
        <form onClick={clearTarget} aria-hidden="true">
          <input
            accept="*"
            className={classes.input}
            id="button-file"
            type="file"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<CloudUploadIcon />}
            component="span"
          >
            Upload
          </Button>
        </form>
      </label>
    </div>
  );
};
