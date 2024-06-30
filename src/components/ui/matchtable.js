import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow, { tableRowClasses} from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'purple',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)':{
        backgroundColor: '#f7ddbb'
    },
    '&:nth-of-type(odd)': {
        backgroundColor: '#F5F5DC',
      },
}));
export default function matchtable({matchFacts}) {
  return (
    <>
    <TableContainer component={Paper} sx = {{maxHeight:250}}>
      <Table sx={{ minWidth: 450 }}  aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell align='left'>Home</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Match Facts</StyledTableCell>
            <StyledTableCell align='right'>Away</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matchFacts.map((fact) => (
            <StyledTableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" >{fact.home}</TableCell>
              <TableCell align="center" colSpan={3}>{fact.stat}</TableCell>
              <TableCell align="right">{fact.away}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
