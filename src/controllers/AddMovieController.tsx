import React, {
  ChangeEvent, FC, useState, SyntheticEvent,
} from 'react';
import { nanoid, unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { addMovie } from '../redux/moviesSlice';
import { AddMovieForm } from '../view/AddMovieForm';
import useHooks from '../utils/hooks';
import { AddMovieList } from '../view/AddMovieList';

export const AddMovieController: FC = () => {
  const { useAppDispatch } = useHooks();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [movieTitle, setMovieTitle] = useState('');
  const [yearRelease, setYearRelease] = useState<number | string>('');
  const [format, setFormat] = useState('');
  const [firstActor, setFirstActor] = useState({ firstName: '', lastName: '' });
  const [secondActor, setSecondActor] = useState({ firstName: '', lastName: '' });
  const [thirdActor, setThirdActor] = useState({ firstName: '', lastName: '' });
  const [fourthActor, setFourthActor] = useState({ firstName: '', lastName: '' });
  const [fifthActor, setFifthActor] = useState({ firstName: '', lastName: '' });
  const [actorCounter, setActorCounter] = useState(0);

  const year = +yearRelease;

  const yearLength = yearRelease.toString().length > 3;

  const canSubmit = [
    movieTitle, yearLength, format, firstActor.firstName, firstActor.lastName,
  ].every(Boolean);

  const moreThanZero = canSubmit && actorCounter > 0;
  const counterEqualOne = moreThanZero && actorCounter === 1;
  const secondActorFilled = [
    moreThanZero, secondActor.firstName, secondActor.lastName,
  ].every(Boolean) && actorCounter === 1;

  const moreThanOne = moreThanZero && actorCounter > 1;
  const counterEqualTwo = moreThanOne && actorCounter === 2;
  const thirdActorFilled = [
    moreThanOne, thirdActor.firstName, thirdActor.lastName,
  ].every(Boolean) && actorCounter === 2;

  const moreThanTwo = moreThanOne && actorCounter > 2;
  const counterEqualThree = moreThanTwo && actorCounter === 3;
  const fourthActorFilled = [
    moreThanTwo, fourthActor.firstName, fourthActor.lastName,
  ].every(Boolean) && actorCounter === 3;

  const moreThanThree = moreThanTwo && actorCounter > 3;

  const handleSetMovie = (e: ChangeEvent<HTMLInputElement>) => setMovieTitle(e.target.value);
  const handleSetRelease = (e: ChangeEvent<{ value: number}>) => setYearRelease(e.target.value);
  const handleSetFormat = (e: ChangeEvent<HTMLInputElement>) => setFormat(e.target.value);

  const handleFirstActor = (
    { target: { name, value } }:ChangeEvent<HTMLInputElement>,
  ) => setFirstActor({ ...firstActor, [name]: value });

  const handleSecondActor = (
    { target: { name, value } }:ChangeEvent<HTMLInputElement>,
  ) => setSecondActor({ ...secondActor, [name]: value });

  const handleThirdActor = (
    { target: { name, value } }:ChangeEvent<HTMLInputElement>,
  ) => setThirdActor({ ...thirdActor, [name]: value });

  const handleFourthActor = (
    { target: { name, value } }:ChangeEvent<HTMLInputElement>,
  ) => setFourthActor({ ...fourthActor, [name]: value });

  const handleFifthActor = (
    { target: { name, value } }:ChangeEvent<HTMLInputElement>,
  ) => setFifthActor({ ...fifthActor, [name]: value });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const cast = [
      firstActor, secondActor, thirdActor, fourthActor, fifthActor,
    ].filter((actor) => actor.firstName && actor.lastName);

    const film = {
      movieTitle, year, format, cast, id: nanoid(),
    };

    try {
      const resultAction = await dispatch(addMovie(film));
      unwrapResult(resultAction);
      history.push('/');
      setMovieTitle('');
      setYearRelease('');
      setFormat('');
      setFirstActor({ firstName: '', lastName: '' });
      setSecondActor({ firstName: '', lastName: '' });
      setThirdActor({ firstName: '', lastName: '' });
      setFourthActor({ firstName: '', lastName: '' });
      setFifthActor({ firstName: '', lastName: '' });
      setActorCounter(0);
    } catch (error) {
      console.error('Failed to save the post: ', error);
    }
  };

  const addCount = () => setActorCounter(actorCounter + 1);

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
        thirdActor={thirdActor}
        handleThirdActor={handleThirdActor}
        handleSubmit={handleSubmit}
        canSubmit={canSubmit}
        addCount={addCount}
        moreThanZero={moreThanZero}
        counterEqualOne={counterEqualOne}
        secondActorFilled={secondActorFilled}
        moreThanOne={moreThanOne}
        counterEqualTwo={counterEqualTwo}
        thirdActorFilled={thirdActorFilled}
        fourthActor={fourthActor}
        handleFourthActor={handleFourthActor}
        moreThanTwo={moreThanTwo}
        counterEqualThree={counterEqualThree}
        fourthActorFilled={fourthActorFilled}
        fifthActor={fifthActor}
        moreThanThree={moreThanThree}
        handleFifthActor={handleFifthActor}
      />
      <AddMovieList />
    </>
  );
};
