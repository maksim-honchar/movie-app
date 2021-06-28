import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import db from '../firebase/firebaseInitial';
import {
  failed, succeeded, loading, movies,
} from '../utils/constants';
import { IMovie, InitialState } from '../utils/types';

const initialState: InitialState = {
  setMovies: [],
  status: 'idle',
  error: null,
};

export const getMovies = createAsyncThunk('movies/getMovies', async () => {
  const allMovies: IMovie[] = [];
  const response = await db.collection(movies).get();
  response.forEach((doc) => allMovies.push(doc.data() as IMovie));
  return allMovies;
});

export const addMovie = createAsyncThunk('movies/addMovie', async (movie: IMovie) => {
  await db.collection(movies).doc(movie.id).set(movie);
  const response = await db.collection(movies).doc(movie.id).get();
  const result = response.data() as IMovie;
  return result;
});

export const deleteMovie = createAsyncThunk('movies/deleteMovie', async (id: string) => {
  await db.collection(movies).doc(id).delete();
  const allMovies: IMovie[] = [];
  const response = await db.collection(movies).get();
  response.forEach((doc) => allMovies.push(doc.data() as IMovie));
  return allMovies;
});

export const addMovieList = createAsyncThunk('movies/addMovieList', async (list: IMovie[]) => {
  list.forEach((movie) => db.collection(movies).doc(movie.id).set(movie));
  const allMovies: IMovie[] = [];
  const response = await db.collection(movies).get();
  response.forEach((doc) => allMovies.push(doc.data() as IMovie));
  return allMovies;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state.status = loading;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.status = succeeded;
      state.setMovies.push(...action.payload);
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      state.status = failed;
      state.error = action.error.message;
    });

    builder.addCase(addMovie.pending, (state) => {
      state.status = loading;
    });
    builder.addCase(addMovie.fulfilled, (state, action) => {
      state.status = succeeded;
      state.setMovies.push(action.payload);
    });
    builder.addCase(addMovie.rejected, (state, action) => {
      state.status = failed;
      state.error = action.error.message;
    });

    builder.addCase(deleteMovie.pending, (state) => {
      state.status = loading;
    });
    builder.addCase(deleteMovie.fulfilled, (state, action) => {
      state.status = succeeded;
      state.setMovies = action.payload;
    });
    builder.addCase(deleteMovie.rejected, (state, action) => {
      state.status = failed;
      state.error = action.error.message;
    });

    builder.addCase(addMovieList.pending, (state) => {
      state.status = loading;
    });
    builder.addCase(addMovieList.fulfilled, (state, action) => {
      state.status = succeeded;
      state.setMovies = action.payload;
    });
    builder.addCase(addMovieList.rejected, (state, action) => {
      state.status = failed;
      state.error = action.error.message;
    });
  },
});

export default moviesSlice.reducer;
