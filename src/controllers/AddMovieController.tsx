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
  const [yearRelease, setYearRelease] = useState<number | string>('');
  const [format, setFormat] = useState('');
  const [actor, setActor] = useState({ firstName: '', lastName: '' });
  const [cast, setCast] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const year = +yearRelease;
  const yearLength = yearRelease.toString().length > 3;
  const castLength = cast.length > 0;
  const canSave = [movieTitle, yearLength, format, castLength].every(Boolean);

  const handleSetMovie = (e: ChangeEvent<HTMLInputElement>) => setMovieTitle(e.target.value);
  const handleSetRelease = (e: ChangeEvent<{ value: number}>) => setYearRelease(e.target.value);
  const handleSetFormat = (e: ChangeEvent<HTMLInputElement>) => setFormat(e.target.value);

  const handleChangeActor = (
    { target: { name, value } }:ChangeEvent<HTMLInputElement>,
  ) => setActor({ ...actor, [name]: value });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
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
      setCast([]);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const addActor = () => {
    setCast([...cast, actor]);
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
      cast={cast}
      canSave={canSave}
    />
  );
};
