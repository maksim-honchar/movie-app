import React, {
  ChangeEvent, FC, useState, SyntheticEvent,
} from 'react';
import { AddMovieForm } from '../view/AddMovieForm';

export const AddMovieController: FC = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [yearRelease, setYearRelease] = useState<number | string>('');
  const [format, setFormat] = useState('');
  const [firstActor, setFirstActor] = useState({ firstName: '', lastName: '' });
  const [secondActor, setSecondActor] = useState({ firstName: '', lastName: '' });

  const handleSetMovie = (e: ChangeEvent<HTMLInputElement>) => setMovieTitle(e.target.value);
  const handleSetRelease = (e: ChangeEvent<{ value: number}>) => setYearRelease(e.target.value);
  const handleSetFormat = (e: ChangeEvent<HTMLInputElement>) => setFormat(e.target.value);

  const handleFirstActor = (
    { target: { name, value } }:ChangeEvent<HTMLInputElement>,
  ) => setFirstActor({ ...firstActor, [name]: value });

  const handleSecondActor = (
    { target: { name, value } }:ChangeEvent<HTMLInputElement>,
  ) => setSecondActor({ ...secondActor, [name]: value });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const cast = [firstActor, secondActor];
    const film = {
      movieTitle, yearRelease, format, cast,
    };

    console.log(film);
  };

  return (
    <>
      <AddMovieForm
        movieTitle={movieTitle}
        handleSetMovie={handleSetMovie}
        yearRelease={yearRelease}
        handleSetRelease={handleSetRelease}
        format={format}
        handleSetFormat={handleSetFormat}
        firstActor={firstActor}
        handleFirstActor={handleFirstActor}
        secondActor={secondActor}
        handleSecondActor={handleSecondActor}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
