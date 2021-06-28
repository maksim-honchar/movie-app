import React, { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Typography } from '@material-ui/core';

interface ICastList {
    cast: { firstName: '', lastName: '' }[]
}

export const CastList: FC<ICastList> = ({ cast }) => {
  const content = cast.map(({ firstName, lastName }) => (
    <Typography key={nanoid()}>
      {`${firstName} ${lastName}`}
    </Typography>
  ));

  return (
    <>
      {content}
    </>
  );
};
