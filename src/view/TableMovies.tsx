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
import { IMovie } from '../utils/types';
import { ShowActors } from './ShowActors';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  deliteIcon: {
    '&:hover': {
      background: '#fbe9e7',
    },
  },
});

interface ITableMovies {
    sortedMovies: IMovie[]
    deleteFilm: (id: string) => void
}

export const TableMovies: FC<ITableMovies> = ({ sortedMovies, deleteFilm }) => {
  const classes = useStyles();

  return (
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
          {sortedMovies.map(({
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
};
