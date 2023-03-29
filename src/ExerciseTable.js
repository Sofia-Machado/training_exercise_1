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
    1,
    2,
    3,
    4
  ];

  function handleSelectedCells(e, index) {
    let newSelectedCells = [];
    //iterate through selected cells
    if (e.target.className.includes('hover') || e.target.className.includes('active') || e.target.className.includes('highlight')) {
      for (let cell of selectedCells) {
        //if cell exists
        if (cell.column === parseInt(e.target.id, 10) && cell.row === index) {
          //save id of the obj in the selectedCells array
          let idOfCell = selectedCells.indexOf(cell);
          //filter the id
          newSelectedCells = selectedCells.filter(cell => selectedCells.indexOf(cell) !== idOfCell);
          return setSelectedCells(newSelectedCells);
        }
      }
      newSelectedCells = [...selectedCells, {'column': parseInt(e.target.id, 10), 'row': index}];
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
      if (cell.row !== 3) {
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
      } else {

      }
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
          {rows.map((row, index) => {
            if (index === 3) {
              return (
                <TableRow
                  className={''}
                    key={index}
                  >
                    <TableCell align="center"
                    className={isCellSelected(index, 1)}
                    onClick={(e) => handleSelectedCells(e, index)}
                    id={1}>
                      {row}
                    </TableCell>
                    <TableCell align="center"
                    className={isCellSelected(index, 2)}
                    onClick={(e) => handleSelectedCells(e, index)}
                    id={2}>
                      {row}
                    </TableCell>
                    <TableCell align="center"
                    className={isCellSelected(index, 3)}
                    onClick={(e) => handleSelectedCells(e, index)}
                    id={3}>
                      {row}
                    </TableCell>
                    <TableCell align="center"
                    className={isCellSelected(index, 4)}
                    onClick={(e) => handleSelectedCells(e, index)}
                    id={4}>
                      {row}
                    </TableCell>
                  </TableRow>
                )
              } 
              return (
                <TableRow
                className={''}
                  key={index}
                >
                  <TableCell align="center"
                  className={limit.length === 0 || limit.includes(1) ? isCellSelected(index, 1) : ''}
                  onClick={(e) => {
                    if (limit.length === 0 || limit.includes(1)) {
                      handleSelectedCells(e, index)
                    }
                  }}
                  id={1}>
                    {row}
                  </TableCell>
                  <TableCell align="center"
                  className={limit.length === 0 || limit.includes(2) ? isCellSelected(index, 2) : ''}
                  onClick={(e) => {
                    if (limit.length === 0 || limit.includes(2)) {
                      handleSelectedCells(e, index)
                    }
                  }}
                  id={2}>
                    {row}
                  </TableCell>
                  <TableCell align="center"
                  className={limit.length === 0 || limit.includes(3) ? isCellSelected(index, 3) : ''}
                  onClick={(e) => {
                    if (limit.length === 0 || limit.includes(3)) {
                      handleSelectedCells(e, index)
                    }
                  }}
                  id={3}>
                    {row}
                  </TableCell>
                  <TableCell align="center"
                  className={limit.length === 0 || limit.includes(4) ? isCellSelected(index, 4) : ''}
                  onClick={(e) => {
                    if (limit.length === 0 || limit.includes(4)) {
                      handleSelectedCells(e, index)
                    }
                  }}
                  id={4}>
                    {row}
                  </TableCell>
                  <TableCell align="center"
                  className={limit.length === 0 || limit.includes(5) ? isCellSelected(index, 5) : ''}
                  onClick={(e) => {
                    if (limit.length === 0 || limit.includes(5)) {
                      handleSelectedCells(e, index)
                    }
                  }}
                  id={5}>
                    {row}
                  </TableCell>
                  <TableCell align="center"
                  className={limit.length === 0 || limit.includes(6) ? isCellSelected(index, 6) : ''}
                  onClick={(e) => {
                    if (limit.length === 0 || limit.includes(6)) {
                      handleSelectedCells(e, index)
                    }
                  }}
                  id={6}>
                    {row}
                  </TableCell>
                  <TableCell align="center"
                  className={limit.length === 0 || limit.includes(7) ? isCellSelected(index, 7) : ''}
                  onClick={(e) => {
                    if (limit.length === 0 || limit.includes(7)) {
                      handleSelectedCells(e, index)
                    }
                  }}
                  id={7}>
                    {row}
                  </TableCell>
                  <TableCell align="center"
                  className={limit.length === 0 || limit.includes(8) ? isCellSelected(index, 8) : ''}
                  onClick={(e) => {
                    if (limit.length === 0 || limit.includes(8)) {
                      handleSelectedCells(e, index)
                    }
                  }}
                  id={8}>
                    {row}
                  </TableCell>
                  <TableCell align="center"
                  className={limit.length === 0 || limit.includes(9) ? isCellSelected(index, 9) : ''}
                  onClick={(e) =>  {
                    if (limit.length === 0 || limit.includes(9)) {
                      handleSelectedCells(e, index)
                    }
                  }}
                  id={9}>
                    {row}
                  </TableCell>
                </TableRow>
                )
                })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}