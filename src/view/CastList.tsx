import React, { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Typography } from '@material-ui/core';

interface ICastList {
  actorStack: { firstName: '', lastName: '' }[]
}

export const CastList: FC<ICastList> = ({ actorStack }) => {
  const content = actorStack.map(({ firstName, lastName }) => (
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
