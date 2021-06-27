import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import { IMovie } from '../utils/types';
import { ShowActors } from './ShowActors';
import { InfoNotFound } from './InfoNotFound';
import { EmptyStorage } from './EmptyStorage';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  table: {
    minWidth: 650,
  },
  deliteIcon: {
    '&:hover': {
      background: '#fbe9e7',
    },
  },
  spiner: {
    marginTop: '20vh',
  },
});

interface ITableMovies {
    sortedMovies: IMovie[]
    deleteFilm: (id: string) => void
    tableIsLoaded: boolean
    searchIsFailed?: boolean
    emptySorage?: boolean
  }

export const TableMovies: FC<ITableMovies> = (props) => {
  const classes = useStyles();

  const {
    sortedMovies, deleteFilm, tableIsLoaded, searchIsFailed, emptySorage,
  } = props;

  const table = (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Format</TableCell>
            <TableCell align="right">Stars</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedMovies?.map(({
            movieTitle, year, format, id, cast,
          }) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {movieTitle}
              </TableCell>
              <TableCell align="right">{year}</TableCell>
              <TableCell align="right">{format}</TableCell>
              <TableCell align="right">
                <ShowActors cast={cast} />
              </TableCell>
              <TableCell align="right">
                <IconButton
                  className={classes.deliteIcon}
                  onClick={() => deleteFilm(id)}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  let content;

  if (emptySorage) {
    content = <EmptyStorage />;
  } else if (tableIsLoaded) {
    content = table;
  } else if (searchIsFailed) {
    content = <InfoNotFound />;
  } else {
    content = <CircularProgress className={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      {content}
    </div>
  );
};
