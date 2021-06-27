import React, {
  ChangeEvent, FC, useEffect, useState,
} from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { addMovieList } from '../redux/moviesSlice';
import useHooks from '../utils/hooks';
import { AddMovieList } from '../view/AddMovieList';

export const UploadFileController: FC = () => {
  const { useAppDispatch } = useHooks();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [file, setFile] = useState([]);
  const canDispatch = file.length > 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    fileReader.onload = (event: any) => {
      setFile(JSON.parse(event.target.result));
    };
  };

  useEffect(() => {
    const dispatchFile = async () => {
      if (canDispatch) {
        try {
          const resultAction = await dispatch(addMovieList(file));
          unwrapResult(resultAction);
          history.push('/');
        } catch (error) {
          console.error(error);
        }
      }
    };

    dispatchFile();
  }, [canDispatch, dispatch, file, history]);

  return (
    <AddMovieList
      handleChange={handleChange}
    />
  );
};