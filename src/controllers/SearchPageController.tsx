import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { deleteMovie } from '../redux/moviesSlice';
import useHooks from '../utils/hooks';
import { TableMovies } from '../view/TableMovies';

interface MatchParams {
    query: string;
}

export const SearchPageController: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { query } = match.params;

  const { useAppSelector, useAppDispatch } = useHooks();
  const dispatch = useAppDispatch();

  const allMovies = useAppSelector((state) => state.movies.setMovies);

  const searchByTitle = allMovies
    .slice()
    .sort((a, b) => a.movieTitle.localeCompare(b.movieTitle))
    .filter(({ movieTitle }) => movieTitle.toLowerCase() === query.toLowerCase());

  const searchByActor = allMovies
    .slice()
    .sort((a, b) => a.movieTitle.localeCompare(b.movieTitle))
    .filter(({ cast }) => cast
      .find(({ firstName }) => firstName.toLowerCase() === query.toLowerCase()));

  let sortedMovies;

  if (searchByTitle.length > 0) {
    sortedMovies = searchByTitle;
  } else if (searchByActor.length > 0) {
    sortedMovies = searchByActor;
  }

  const deleteFilm = (id: string) => dispatch(deleteMovie(id));

  return (
    <>
      <TableMovies
        sortedMovies={sortedMovies}
        deleteFilm={deleteFilm}
      />
    </>
  );
};