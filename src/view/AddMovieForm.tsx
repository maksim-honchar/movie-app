import React, { ChangeEvent, FC, SyntheticEvent } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Tooltip from '@material-ui/core/Tooltip';
import { ErrorMessage } from './ErrorMessage';
import { CastList } from './CastList';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    marginTop: 20,
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
    justifyContent: 'space-evenly',
  },
  inputFieldActor: {
    width: 120,
  },
  plusButton: {
    margin: '-10px 0 5px 0',
  },
  btnSubmit: {
    width: 300,
  },
  castWrapper: {
    border: '1px solid #e0e0e0',
    borderRadius: 5,
    width: 300,
    margin: '1px auto 15px auto',
  },
  titleCast: {
    marginTop: 15,
  },
});

interface IAddMovieForm {
    movieTitle: string
    handleSetMovie: (e: ChangeEvent<HTMLInputElement>) => void
    yearRelease:number | string
    handleSetRelease: (e: ChangeEvent<{ value: number | string }>) => void
    format: string
    handleSetFormat: (e: ChangeEvent<HTMLInputElement>) => void
    actor: { firstName: string, lastName: string }
    handleChangeActor: ({ target: { name, value } }:ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: SyntheticEvent) => void
    addActor: () => void
    errorMessage?: string
    actorStack: { firstName: '', lastName: '' }[]
    titleError: boolean
    yearError: boolean
    formatError: boolean
    actorError: boolean
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
    actor,
    handleChangeActor,
    handleSubmit,
    addActor,
    errorMessage,
    actorStack,
    titleError,
    yearError,
    formatError,
    actorError,
  } = props;

  return (
    <>
      <div className={classes.root}>
        <Typography
          variant="h5"
          gutterBottom
          color="textSecondary"
        >
          fill the form
        </Typography>
        <form noValidate autoComplete="off">
          <div className={classes.inputDiv}>
            <TextField
              label="title"
              variant="outlined"
              className={classes.inputField}
              value={movieTitle}
              onChange={handleSetMovie}
              required
              error={titleError}
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
              required
              error={yearError}
            />
          </div>
          <FormControl variant="outlined">
            <InputLabel required>format</InputLabel>
            <Select
              className={classes.inputField}
              value={format}
              onChange={handleSetFormat}
              label="format"
              required
              error={formatError}
            >
              <MenuItem value="VHS">VHS</MenuItem>
              <MenuItem value="DVD">DVD</MenuItem>
              <MenuItem value="Blu-Ray">Blu-Ray</MenuItem>
            </Select>
          </FormControl>
          <Typography
            color="textSecondary"
            className={classes.titleCast}
          >
            cast
          </Typography>
          <div className={classes.castWrapper}>
            <div className={classes.inputDivActor}>
              <TextField
                label="first name"
                variant="outlined"
                className={classes.inputFieldActor}
                name="firstName"
                value={actor.firstName}
                onChange={handleChangeActor}
                required
                error={actorError}
              />
              <TextField
                label="last name"
                variant="outlined"
                className={classes.inputFieldActor}
                name="lastName"
                value={actor.lastName}
                onChange={handleChangeActor}
                required
                error={actorError}
              />
            </div>
            <div>
              <CastList actorStack={actorStack} />
            </div>
            <div className={classes.plusButton}>
              <Tooltip title="Add actor" placement="right">
                <span>
                  <IconButton onClick={addActor}>
                    <AddCircleOutlineIcon color="primary" />
                  </IconButton>
                </span>
              </Tooltip>
            </div>
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
      <ErrorMessage errorMessage={errorMessage} />
    </>
  );
};
