import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow, { tableRowClasses} from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Checkbox } from '@mui/material';


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
export default function Datatable({plays, setSelectedPlays, selectedPlays}) {
  
  const handleSelect = (event, play)=>{
      const selected = selectedPlays.indexOf(play)
      let newSelected =[]

      if(selected === -1){
        newSelected = newSelected.concat(selectedPlays, play)
      }
      else if(selected === 0){
        newSelected = newSelected.concat(selectedPlays.slice(1))
      }
      else if(selected === selectedPlays.length -1){
        newSelected = newSelected.concat(selectedPlays.slice(0,-1))
      }
      else if(selected > 0){
        newSelected = newSelected.concat(        
        selectedPlays.slice(0, selected),
        selectedPlays.slice(selected + 1))
      }

      setSelectedPlays(newSelected)
  }


  React.useEffect(() => {
    console.log('Selected Plays:', selectedPlays);
  }, [selectedPlays]);

  const isSelected = (play)=>selectedPlays.indexOf(play) !== -1
  return (
    <>
    <TableContainer component={Paper} sx = {{maxHeight:250}}>
      <Table sx={{ minWidth: 450 }}  aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell >Half</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Team</StyledTableCell>
            <StyledTableCell align="right">Player</StyledTableCell>
            <StyledTableCell align="right">Event</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plays.map((play) => {
          const isItemSelected = isSelected(play)
          return (
            
            <StyledTableRow
            key={play.time}
            selected = {isItemSelected}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell padding='checkbox'>
                <Checkbox
                color='primary'
                checked={isItemSelected}
                onChange={(event)=>handleSelect(event,play)}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {play.half}
              </TableCell>
              <TableCell align="right">{play.time}</TableCell>
              <TableCell align="right">{play.team}</TableCell>
              <TableCell align="right">{play.player}</TableCell>
              <TableCell align="right">{play.event}</TableCell>
            </StyledTableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
