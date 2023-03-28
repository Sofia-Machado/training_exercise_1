import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function BasicTable() {
  const [selectedCells, setSelectedCells] = useState([]);
  const [firstSelection, setFirstSelection] = useState([])
  
  const rows = [
    1,
    2,
    3,
    4, 
    5
  ];

  /* useEffect(() => {
    let columnId = selectedCells[0][0];
    setFirstSelection([columnId - 2, columnId - 1, columnId, columnId + 1, columnId + 2])
    console.log(firstSelection);
  }, [selectedCells]) */

  function handleSelectedCells(e, index) {
    let newSelectedCells = [];
    //iterate through selected cells
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

  //save selected cells
  function firstLimitation(newSelectedCells) {
    if (newSelectedCells.length > 0) {
      let columnId = newSelectedCells[0]['column'];
      setFirstSelection([columnId - 2, columnId - 1, columnId, columnId + 1, columnId + 2]);
    }
  }

  useEffect(() => {
    firstLimitation(selectedCells);
  }, [selectedCells])

  function isCellSelected(rowId, columnId) {
    //select cell
    let classes = '';
    selectedCells.forEach(cell => {
      firstSelection.forEach(id => {
        if (id === columnId) {
          classes = 'highlight';
        }
      })
      if (cell.row === rowId && cell.column === columnId) {
        classes = 'active';
      }
    })
    //highlightcells
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
              <TableCell align="center"
              className={isCellSelected(index, 5)}
              onClick={(e) => handleSelectedCells(e, index)}
              id={5}>
                {row}
              </TableCell>
              <TableCell align="center"
              className={isCellSelected(index, 6)}
              onClick={(e) => handleSelectedCells(e, index)}
              id={6}>
                {row}
              </TableCell>
              <TableCell align="center"
              className={isCellSelected(index, 7)}
              onClick={(e) => handleSelectedCells(e, index)}
              id={7}>
                {row}
              </TableCell>
              <TableCell align="center"
              className={isCellSelected(index, 8)}
              onClick={(e) => handleSelectedCells(e, index)}
              id={8}>
                {row}
              </TableCell>
              <TableCell align="center"
              className={isCellSelected(index, 9)}
              onClick={(e) => handleSelectedCells(e, index)}
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