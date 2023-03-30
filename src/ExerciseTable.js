import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';


export default function BasicTable() {
  const [selectedCells, setSelectedCells] = useState([]);
  const [limit, setLimit] = useState([]);
  const [total, setTotal] = useState('');
  
  const headers = [
    'Column 1',
    'Column 2',
    'Column 3',
    'Column 4',
    'Column 5',
    'Column 6',
    'Column 7',
    'Column 8',
    'Column 9',
  ]
  const rows = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4]
  ];

  //save selected cells
  function handleSelectedCells(e, columnIndex, rowIndex) {
    if (limit.length > 0 && !limit.includes(columnIndex) && rowIndex !== 3) {
      return;
    }
    let newSelectedCells = [];
    //iterate through selected cells
    for (let i = 0; i < selectedCells.length; i++) {
      let cell = selectedCells[i];
      if (rowIndex === cell.row && columnIndex !== cell.column) {
        return;
      }
      //if cell exists
      if (cell.column === columnIndex && cell.row === rowIndex) {
        //filter the id
        newSelectedCells = selectedCells.filter((cell, index) => index !== i);
        //set limit
        if (newSelectedCells.length === 0) {
          setLimit([]);
        } else {
          checkLimit(newSelectedCells);
        }
        return setSelectedCells(newSelectedCells);
      }
    }
    newSelectedCells = [...selectedCells, {'column': columnIndex, 'row': rowIndex}];
    //set limit
      checkLimit(newSelectedCells);
    return setSelectedCells(newSelectedCells);
  }

    //check if cell is selected and return class
    function isCellSelected(rowId, columnId) {
      let classes = 'hover';
      //if last row and any other cell is selected
      if (rowId === 3) {
        if (selectedCells.length > 0) {
          classes = 'highlight';
          for (let cell of selectedCells) {
            if (cell.row === rowId) {
              classes = cell.column === columnId ? 'active' : '';
            } 
          } 
        }
      } else {
        // not the last row
        if (limit.length > 0) {
          // set 'highlight' if (and only if) within limits
          classes = limit.includes(columnId) ? 'highlight' : '';
          for (let cell of selectedCells) {
            if (cell.row === rowId) {
              classes = cell.column === columnId ? 'active' : '';
            }
          }
        }
      }
      return classes;
    }

  //save limitation
  function createLimit(collumnCell) {
    let limitValue = [];
    if (collumnCell !== 8) {
      limitValue = [collumnCell - 2, collumnCell - 1, collumnCell, collumnCell + 1, collumnCell + 2];
      let newLimit = [];
      //check if limit is bellow 0 or above 7
      for (let i = 0; i < limitValue.length; i++) {
          if (limitValue[i] < 0 || limitValue[i] > 7) {
            newLimit.push(limitValue[i]);
          }
        }
        //filter those values
        newLimit.map(n => {
          return limitValue = limitValue.filter(v => v !== n)
        })
      } else if (collumnCell === 8) {
        limitValue = [collumnCell];
      }
    return limitValue;
  }
 
  //create limitation
  function checkLimit(cells) {
    let limitValue = [];
    if (cells.length === 1) {
      limitValue = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      if (cells[0]['row'] !== 3) {
        limitValue = createLimit(cells[0]['column']);
      }
    } else if (cells.length > 1) {
      //if first cell is the last row set limit to all
      limitValue = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      for (let cell of cells) {
        if (cell.row !== 3) {
          let newLimit = createLimit(cell.column);
          limitValue = limitValue.filter(column => newLimit.includes(column));
        }
      }
    }
    console.log(limitValue);
    return setLimit(limitValue)
  }

  //generate random number
  useEffect(() => {
   if (selectedCells.length === 4) {
    setTotal(Math.floor(Math.random() * 100) + 1);
   } else {
    setTotal(0);
   }
  }, [selectedCells])

  return (
    <Container>
    <Typography component='h1' variant='h1' textAlign='center' mt={4} mb={3}>Select cells</Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow >
              {headers.map((header, index) => {
              return <TableCell align="center" key={index}>{header}</TableCell>
              })} 
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => {
            return (
              <TableRow
              className={''}
                key={rowIndex}
              >
                {row.map((cell, columnIndex) => {
                  return (
                    <TableCell align="center"
                    key={columnIndex}
                    className={isCellSelected(rowIndex, columnIndex)}
                    onClick={(e) => {
                        handleSelectedCells(e, columnIndex, rowIndex)}}>
                      {cell}
                    </TableCell>)
                  })}   
                </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Typography component='h2' variant='h2' mt={3} ml={2}>Total: <span className={total > 0 ? 'total' : 'not-total'}>${total}</span></Typography>
      </Box>
    </Container>
  );
}
