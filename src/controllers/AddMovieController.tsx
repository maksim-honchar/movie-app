import React, { ChangeEvent, useState, SyntheticEvent } from 'react';
import { nanoid, unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { addMovie } from '../redux/moviesSlice';
import { AddMovieForm } from '../view/AddMovieForm';
import useHooks from '../utils/hooks';

export const AddMovieController = () => {
  const { useAppDispatch } = useHooks();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [movieTitle, setMovieTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [yearRelease, setYearRelease] = useState<number | string>('');
  const [yearError, setYearError] = useState(false);
  const [format, setFormat] = useState('');
  const [formatError, setFormatError] = useState(false);
  const [actor, setActor] = useState({ firstName: '', lastName: '' });
  const [actorError, setActorError] = useState(false);
  const [actorStack, setActorStack] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const year = +yearRelease;
  const yearLength = yearRelease.toString().length > 3;
  const actorStackLength = actorStack.length > 0;
  const isActorFilled = (actor.firstName && actor.lastName) || actorStackLength;

  const handleSetMovie = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleError(false);
    setMovieTitle(e.target.value);
  };
  const handleSetRelease = (e: ChangeEvent<{ value: number}>) => {
    setYearError(false);
    setYearRelease(e.target.value);
  };
  const handleSetFormat = (e: ChangeEvent<HTMLInputElement>) => {
    setFormatError(false);
    setFormat(e.target.value);
  };

  const handleChangeActor = (
    { target: { name, value } }:ChangeEvent<HTMLInputElement>,
  ) => {
    setActorError(false);
    setActor({ ...actor, [name]: value });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!movieTitle) {
      setTitleError(true);
    } else if (!yearLength) {
      setYearError(true);
    } else if (!format) {
      setFormatError(true);
    } else if (!isActorFilled) {
      setActorError(true);
    } else {
      const cast = actorStackLength ? actorStack : [actor];
      const film = {
        movieTitle, year, format, cast, id: nanoid(),
      };
      try {
        setErrorMessage('');
        const resultAction = await dispatch(addMovie(film));
        unwrapResult(resultAction);
        history.push('/');
        setMovieTitle('');
        setYearRelease('');
        setFormat('');
        setActor({ firstName: '', lastName: '' });
        setActorStack([]);
      } catch (error) {
        setErrorMessage(error);
      }
    }
  };

  const addActor = () => {
    setActorStack([...actorStack, actor]);
    setActor({ firstName: '', lastName: '' });
  };

  return (
    <AddMovieForm
      movieTitle={movieTitle}
      handleSetMovie={handleSetMovie}
      yearRelease={yearRelease}
      handleSetRelease={handleSetRelease}
      format={format}
      handleSetFormat={handleSetFormat}
      actor={actor}
      handleChangeActor={handleChangeActor}
      handleSubmit={handleSubmit}
      addActor={addActor}
      errorMessage={errorMessage}
      actorStack={actorStack}
      titleError={titleError}
      yearError={yearError}
      formatError={formatError}
      actorError={actorError}
    />
  );
};
