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
  function createLimit(newSelectedCells) {
    if (newSelectedCells.length > 0) {
      let columnId = newSelectedCells[0]['column'];
      if (columnId === 6) {
        setLimit([columnId - 2, columnId - 1, columnId, columnId + 1]);
      } if (columnId === 7) {
        setLimit([columnId - 2, columnId - 1, columnId]);
      } if (columnId === 9) {
        setLimit([columnId])
      } else {
        setLimit([columnId - 2, columnId - 1, columnId, columnId + 1, columnId + 2]);
      }
      console.log(limit);
    } else {
      setLimit([]);
    }
  }
 
   useEffect(() => {
    
    createLimit(selectedCells);
    //check column id of the last selected cell
    if (selectedCells.length > 1) {
      let columnId = selectedCells[selectedCells.length - 1]['column']
      console.log('qieiztuk ',limit.indexOf(columnId))
      if (limit.includes(columnId + 2)) {

      }
      /* if (limit.indexOf(columnId) === 0) {
        let newLimit = limit.slice(0, limit.length -2);
        setLimit(newLimit)
      } */
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
            <TableCell align="center">Column 1</TableCell>
            <TableCell align="center">Column 2</TableCell>
            <TableCell align="center">Column 3</TableCell>
            <TableCell align="center">Column 4</TableCell>
            <TableCell align="center">Column 5</TableCell>
            <TableCell align="center">Column 6</TableCell>
            <TableCell align="center">Column 7</TableCell>
            <TableCell align="center">Column 8</TableCell>
            <TableCell align="center">Column 9</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}