import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container } from '@mui/system';


export default function BasicTable() {
  const [selectedCells, setSelectedCells] = useState([]);
  const [limit, setLimit] = useState([]);
  const [newLimit, setNewLimit] = useState([]);
  let total = 0;
  
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
    let newSelectedCells = [];
    //iterate through selected cells
    if (e.target.className.includes('hover') || e.target.className.includes('active') || e.target.className.includes('highlight')) {
      for (let cell of selectedCells) {
        //if cell exists
        if (cell.column === columnIndex && cell.row === rowIndex) {
          //save id of the obj in the selectedCells array
          let idOfCell = selectedCells.indexOf(cell);
          //filter the id
          newSelectedCells = selectedCells.filter(cell => selectedCells.indexOf(cell) !== idOfCell);
          if (rowIndex !== 3) {
            checkLimit(newSelectedCells);
          } if (newSelectedCells.length === 0) {
            setLimit([]);
          }
          return setSelectedCells(newSelectedCells);
        }
      }
      newSelectedCells = [...selectedCells, {'column': columnIndex, 'row': rowIndex}];
      if (rowIndex !== 3) {
        checkLimit(newSelectedCells);
      }
    }
    return setSelectedCells(newSelectedCells);
  }

    //check if cell is selected and return class
    function isCellSelected(e.rowId, columnId) {
      let classes = 'hover';
      selectedCells.forEach(cell => {
        if (rowId === 3) {
            classes = classes.replace('hover', 'highlight');
          if (cell.row === rowId && cell.column === columnId) {
            classes = classes.replace('highlight', 'active');
          }
          if (cell.row === rowId && cell.column !== columnId) {
            classes = classes.replace('highlight', '');
          }
        } else {
          limit.forEach(id => {
            if (id === columnId) {
              classes = classes.replace('hover', 'highlight');
            }
            if (cell.row === rowId && cell.column === columnId) {
              classes = classes.replace('highlight', 'active');
            }
            if (cell.row === rowId && cell.column !== id) {
              classes = classes.replace('highlight', '');
            }
          })
        }
      })
      return classes;
    }

  //save limitation
  function createLimit(collumnCell) {
      if (collumnCell === 6) {
        return [collumnCell - 2, collumnCell - 1, collumnCell, collumnCell + 1];
      } if (collumnCell === 7) {
        return [collumnCell - 2, collumnCell - 1, collumnCell];
      } if (collumnCell === 9) {
        return [collumnCell];
      } else {
        return [collumnCell - 2, collumnCell - 1, collumnCell, collumnCell + 1, collumnCell + 2];
      }
  }
 
  //create limitation
  function checkLimit(cells) {
    let limitValue;
    if (cells.length === 1) {
      if (cells[0]['row'] === 3) {
        console.log('hello')
        limitValue = [];
      }
      limitValue = createLimit(cells[0]['column']);
    }
    if (cells.length >= 2) {
      setNewLimit(createLimit(cells[cells.length - 1]['column']));
      limitValue = limit.filter(column => newLimit.includes(column))
      console.log('limit value', limitValue)
    }
    return setLimit(limitValue);
  }

  //generate random number
   if (selectedCells.length === 4) {
    total = Math.floor(Math.random() * 100) + 1;
   } else {
    total =  0;
   }

  return (
    <Container>
    <h1>Select plan</h1>
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
                    key={`row ${rowIndex}`}
                  >
                    {row.map((cell, columnIndex) => {
                      if (rowIndex === 3) {
                        return (
                          <TableCell align="center"
                          key={`column ${columnIndex}`}
                          className={isCellSelected(rowIndex, columnIndex)}
                          onClick={(e) => {
                              handleSelectedCells(e, columnIndex, rowIndex)
                          }}>
                            {cell}
                          </TableCell>)
                      }
                    return (
                      <TableCell align="center"
                      key={`column ${columnIndex}`}
                      className={limit.length === 0 || limit.includes(columnIndex) ? isCellSelected(rowIndex, columnIndex) : ''}
                      onClick={(e) => {
                        if (limit.length === 0 || limit.includes(columnIndex)) {
                          handleSelectedCells(e, columnIndex, rowIndex)
                        }
                      }}>
                        {cell}
                      </TableCell>)
                    })}   
                  </TableRow>
                  )
                  })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="total">
        <h2>Total: <span id="total-result">${total}</span></h2>
      </div>
    </Container>
  );
}