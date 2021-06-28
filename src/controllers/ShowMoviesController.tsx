import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { deleteMovie, getMovies } from '../redux/moviesSlice';
import useHooks from '../utils/hooks';
import { TableMovies } from '../view/TableMovies';

export const ShowMoviesController = () => {
  const { useAppDispatch, useAppSelector } = useHooks();
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState('');

  const status = useAppSelector((state) => state.movies.status);
  const allMovies = useAppSelector((state) => state.movies.setMovies);

  const sortedMovies = allMovies.slice().sort((a, b) => a.movieTitle.localeCompare(b.movieTitle));

  const tableIsLoaded = sortedMovies.length > 0;
  const emptySorage = status === 'succeeded' && allMovies.length === 0;

  const deleteFilm = (id: string) => dispatch(deleteMovie(id));

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setErrorMessage('');
        const resultAction = await dispatch(getMovies());
        unwrapResult(resultAction);
      } catch (error) {
        setErrorMessage(error);
      }
    };

    if (status === 'idle') {
      fetchMovies();
    }
  }, [dispatch, status]);

  return (
    <TableMovies
      sortedMovies={sortedMovies}
      deleteFilm={deleteFilm}
      tableIsLoaded={tableIsLoaded}
      emptySorage={emptySorage}
      errorMessage={errorMessage}
    />
  );
};
