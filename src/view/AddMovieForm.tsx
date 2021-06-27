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
    firstActor: {firstName: string, lastName: string}
    handleFirstActor: ({ target: { name, value } }:ChangeEvent<HTMLInputElement>) => void
    secondActor: {firstName: string, lastName: string}
    handleSecondActor: ({ target: { name, value } }:ChangeEvent<HTMLInputElement>) => void
    thirdActor: {firstName: string, lastName: string}
    handleThirdActor: ({ target: { name, value } }:ChangeEvent<HTMLInputElement>) => void
    fourthActor: {firstName: string, lastName: string}
    handleFourthActor: ({ target: { name, value } }:ChangeEvent<HTMLInputElement>) => void
    fifthActor: {firstName: string, lastName: string}
    handleFifthActor: ({ target: { name, value } }:ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: SyntheticEvent) => void
    canSubmit: boolean
    addCount: () => void
    moreThanZero: boolean
    counterEqualOne: boolean
    secondActorFilled: boolean
    moreThanOne: boolean
    counterEqualTwo: boolean
    thirdActorFilled: boolean
    moreThanTwo: boolean
    counterEqualThree: boolean
    fourthActorFilled: boolean
    moreThanThree: boolean
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
    thirdActor,
    handleThirdActor,
    fourthActor,
    handleFourthActor,
    fifthActor,
    handleFifthActor,
    handleSubmit,
    canSubmit,
    addCount,
    moreThanZero,
    secondActorFilled,
    counterEqualOne,
    moreThanOne,
    counterEqualTwo,
    thirdActorFilled,
    moreThanTwo,
    counterEqualThree,
    fourthActorFilled,
    moreThanThree,
  } = props;

  return (
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
              value={firstActor.firstName}
              onChange={handleFirstActor}
              required
            />
            <TextField
              label="last name"
              variant="outlined"
              className={classes.inputFieldActor}
              name="lastName"
              value={firstActor.lastName}
              onChange={handleFirstActor}
              required
            />
          </div>
          {
        !moreThanZero
        && (
        <div className={classes.plusButton}>
          <Tooltip title="Add actor" placement="right">
            <span>
              <IconButton onClick={addCount} disabled={!canSubmit}>
                <AddCircleOutlineIcon />
              </IconButton>
            </span>
          </Tooltip>
        </div>
        )
        }
          {
          moreThanZero
          && (
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
          )
        }
          {
        counterEqualOne
        && (
        <div>
          <Tooltip title="Add actor" placement="right">
            <span>
              <IconButton onClick={addCount} disabled={!secondActorFilled}>
                <AddCircleOutlineIcon />
              </IconButton>
            </span>
          </Tooltip>
        </div>
        )
        }
          {
          moreThanOne
          && (
          <div className={classes.inputDivActor}>
            <TextField
              label="first name"
              variant="outlined"
              className={classes.inputFieldActor}
              name="firstName"
              value={thirdActor.firstName}
              onChange={handleThirdActor}
            />
            <TextField
              label="last name"
              variant="outlined"
              className={classes.inputFieldActor}
              name="lastName"
              value={thirdActor.lastName}
              onChange={handleThirdActor}
            />
          </div>
          )
        }
          {
        counterEqualTwo
        && (
        <div>
          <Tooltip title="Add actor" placement="right">
            <span>
              <IconButton onClick={addCount} disabled={!thirdActorFilled}>
                <AddCircleOutlineIcon />
              </IconButton>
            </span>
          </Tooltip>
        </div>
        )
        }
          {
          moreThanTwo
          && (
          <div className={classes.inputDivActor}>
            <TextField
              label="first name"
              variant="outlined"
              className={classes.inputFieldActor}
              name="firstName"
              value={fourthActor.firstName}
              onChange={handleFourthActor}
            />
            <TextField
              label="last name"
              variant="outlined"
              className={classes.inputFieldActor}
              name="lastName"
              value={fourthActor.lastName}
              onChange={handleFourthActor}
            />
          </div>
          )
        }
          {
        counterEqualThree
        && (
        <div>
          <Tooltip title="Add actor" placement="right">
            <span>
              <IconButton onClick={addCount} disabled={!fourthActorFilled}>
                <AddCircleOutlineIcon />
              </IconButton>
            </span>
          </Tooltip>
        </div>
        )
        }
          {
          moreThanThree
          && (
          <div className={classes.inputDivActor}>
            <TextField
              label="first name"
              variant="outlined"
              className={classes.inputFieldActor}
              name="firstName"
              value={fifthActor.firstName}
              onChange={handleFifthActor}
            />
            <TextField
              label="last name"
              variant="outlined"
              className={classes.inputFieldActor}
              name="lastName"
              value={fifthActor.lastName}
              onChange={handleFifthActor}
            />
          </div>
          )
        }
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.btnSubmit}
          onClick={handleSubmit}
          disabled={!canSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
