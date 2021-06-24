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

export const addMovie = createAsyncThunk('movies/addMovie', async (movie: IMovie) => {
  await db.collection(movies).doc(movie.id).set(movie);
  const response = await db.collection(movies).doc(movie.id).get();
  const result = response.data() as IMovie;
  return result;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
});

export default moviesSlice.reducer;
