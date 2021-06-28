import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { TopBar } from '../view/TopBar';

export const HeaderController = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (searchQuery) {
      history.push(`/search/${searchQuery}`);
      setSearchQuery('');
    }
  };

  const toHome = () => history.push('/');

  return (
    <TopBar
      searchQuery={searchQuery}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      toHome={toHome}
    />
  );
};
