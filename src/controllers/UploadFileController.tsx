import React, { ChangeEvent, useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { addMovieList } from '../redux/moviesSlice';
import useHooks from '../utils/hooks';
import { AddMovieList } from '../view/AddMovieList';

export const UploadFileController = () => {
  const { useAppDispatch } = useHooks();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [file, setFile] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const canDispatch = file.length > 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    fileReader.onload = (event: ProgressEvent<FileReader> & { target: { result: string } }) => {
      setFile(JSON.parse(event.target.result));
    };
    dispatch(addMovieList(file));
  };

  useEffect(() => {
    const dispatchFile = async () => {
      try {
        setErrorMessage('');
        const resultAction = await dispatch(addMovieList(file));
        unwrapResult(resultAction);
        history.push('/');
      } catch (error) {
        setErrorMessage(error);
      }
    };

    if (canDispatch) {
      dispatchFile();
    }
  }, [canDispatch, dispatch, file, history]);

  const clearTarget = (
    event: { currentTarget: { reset: () => void } },
  ) => event.currentTarget.reset();

  return (
    <AddMovieList
      handleChange={handleChange}
      clearTarget={clearTarget}
      errorMessage={errorMessage}
    />
  );
};
