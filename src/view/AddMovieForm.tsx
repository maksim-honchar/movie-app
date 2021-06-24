import React, { ChangeEvent, FC, SyntheticEvent } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    marginTop: 10,
  },
  inputDiv: {
    margin: '15px auto',
  },
  inputField: {
    width: 300,
  },
  inputDivActor: {
    margin: '15px auto',
    display: 'flex',
    width: 300,
    justifyContent: 'space-between',
  },
  inputFieldActor: {
    width: 140,
  },
  btnSubmit: {
    width: 300,
  },
});

interface IAddMovieForm {
    movieTitle: string
    handleSetMovie: (e: ChangeEvent<HTMLInputElement>) => void
    yearRelease:number | string
    handleSetRelease: (e: ChangeEvent<{ value: number | string }>) => void
    format: string
    handleSetFormat: (e: ChangeEvent<HTMLInputElement>) => void
    firstActor: {firstName: string, lastName: string}
    handleFirstActor: ({ target: { name, value } }:ChangeEvent<HTMLInputElement>) => void
    secondActor: {firstName: string, lastName: string}
    handleSecondActor: ({ target: { name, value } }:ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: SyntheticEvent) => void
}

export const AddMovieForm: FC<IAddMovieForm> = (props) => {
  const classes = useStyles();
  const {
    movieTitle,
    handleSetMovie,
    format,
    handleSetFormat,
    yearRelease,
    handleSetRelease,
    firstActor,
    handleFirstActor,
    secondActor,
    handleSecondActor,
    handleSubmit,
  } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>add movie</Typography>
      <form noValidate autoComplete="off">
        <div className={classes.inputDiv}>
          <TextField
            label="title"
            variant="outlined"
            className={classes.inputField}
            value={movieTitle}
            onChange={handleSetMovie}
          />
        </div>
        <div className={classes.inputDiv}>
          <TextField
            label="year"
            variant="outlined"
            className={classes.inputField}
            value={yearRelease}
            onChange={handleSetRelease}
            type="number"
          />
        </div>
        <FormControl variant="outlined">
          <InputLabel>format</InputLabel>
          <Select
            className={classes.inputField}
            value={format}
            onChange={handleSetFormat}
            label="format"
          >
            <MenuItem value="VHS">VHS</MenuItem>
            <MenuItem value="DVD">DVD</MenuItem>
            <MenuItem value="Blu-Ray">Blu-Ray</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.inputDivActor}>
          <TextField
            label="first name"
            variant="outlined"
            className={classes.inputFieldActor}
            name="firstName"
            value={firstActor.firstName}
            onChange={handleFirstActor}
          />
          <TextField
            label="last name"
            variant="outlined"
            className={classes.inputFieldActor}
            name="lastName"
            value={firstActor.lastName}
            onChange={handleFirstActor}
          />
        </div>
        <div className={classes.inputDivActor}>
          <TextField
            label="first name"
            variant="outlined"
            className={classes.inputFieldActor}
            name="firstName"
            value={secondActor.firstName}
            onChange={handleSecondActor}
          />
          <TextField
            label="last name"
            variant="outlined"
            className={classes.inputFieldActor}
            name="lastName"
            value={secondActor.lastName}
            onChange={handleSecondActor}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.btnSubmit}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
