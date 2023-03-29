import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function BasicTable() {
  const [selectedCells, setSelectedCells] = useState([]);
  const [limit, setLimit] = useState([])
  const [newLimit, setNewLimit] = useState([])
  
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

  function handleSelectedCells(e, columnIndex, rowIndex) {
    let newSelectedCells = [];
    console.log(rowIndex)
    //iterate through selected cells
    if (e.target.className.includes('hover') || e.target.className.includes('active') || e.target.className.includes('highlight')) {
      for (let cell of selectedCells) {
        //if cell exists
        if (cell.column === columnIndex && cell.row === rowIndex) {
          //save id of the obj in the selectedCells array
          let idOfCell = selectedCells.indexOf(cell);
          //filter the id
          newSelectedCells = selectedCells.filter(cell => selectedCells.indexOf(cell) !== idOfCell);
          return setSelectedCells(newSelectedCells);
        }
      }
      newSelectedCells = [...selectedCells, {'column': columnIndex, 'row': rowIndex}];
      setSelectedCells(newSelectedCells);
    }
  }

  //save selected cells
  function createLimit(collumnCell, limitfunction) {
      if (collumnCell === 6) {
        limitfunction([collumnCell - 2, collumnCell - 1, collumnCell, collumnCell + 1]);
      } if (collumnCell === 7) {
        limitfunction([collumnCell - 2, collumnCell - 1, collumnCell]);
      } if (collumnCell === 9) {
        limitfunction([collumnCell])
      } else {
        limitfunction([collumnCell - 2, collumnCell - 1, collumnCell, collumnCell + 1, collumnCell + 2]);
      }
      console.log(limit);
  }
 
  useEffect(() => {
    if (selectedCells.length > 0) {
      createLimit(selectedCells[0]['column'], setLimit);
    } else {
      setLimit([]);
    }
    //check column id of the last selected cell
    if (selectedCells.length > 1) {
      let columnId = selectedCells[selectedCells.length - 1]['column']
      createLimit(columnId, setNewLimit)
      console.log('new limit = ',newLimit)
      console.log('limit = ',limit)
      let newColumnLimit = limit.filter(column => newLimit.includes(column))
      console.log('hello ',newColumnLimit)
      setLimit(newColumnLimit)
    }
  }, [selectedCells])
 

  function isCellSelected(rowId, columnId) {
    //select cell
    let classes = 'hover';
    selectedCells.forEach(cell => {
        limit.forEach(id => {
          if (id === columnId) {
            classes = classes.replace('hover', 'highlight');
          }
          if (cell.row === rowId && cell.column === columnId) {
            classes = classes.replace('highlight', 'active');
          }
          if (cell.row === rowId && cell.column !== columnId) {
            classes = classes.replace('highlight', '');
          }
        })
    })
    return classes;
  }

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow >
            {headers.map(header => {
            return <TableCell align="center">{header}</TableCell>
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
                    return(
                     <TableCell align="center"
                     key={columnIndex}
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
  );
}