import React, { FC, useEffect } from 'react';
import { deleteMovie, getMovies } from '../redux/moviesSlice';
import useHooks from '../utils/hooks';
import { TableMovies } from '../view/TableMovies';

export const ShowMoviesController: FC = () => {
  const { useAppDispatch, useAppSelector } = useHooks();
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.movies.status);
  const allMovies = useAppSelector((state) => state.movies.setMovies);

  const sortedMovies = allMovies.slice().sort((a, b) => a.movieTitle.localeCompare(b.movieTitle));

  const deleteFilm = (id: string) => dispatch(deleteMovie(id));

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getMovies());
    }
  }, [dispatch, status]);

  return (
    <TableMovies
      sortedMovies={sortedMovies}
      deleteFilm={deleteFilm}
    />
  );
};
