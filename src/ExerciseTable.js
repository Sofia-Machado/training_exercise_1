import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function BasicTable() {
  const [classes, setClasses] = useState('');
  const [isActive, setIsActive] = useState();
  const [selectedColumn, setSelectedColumn] = useState('')
  const [selectedIndex, setSelectedIndex] = useState('')
  const [selectedCells, setSelectedCells] = useState([])
  
  const rows = [
    1,
    2,
    3,
    4, 
    5
  ];

  function handleClasses(e, index) {
    console.log('column ', e.target.id)
    let id = e.target.id;
    setSelectedColumn(e.target.id);
    setSelectedCells([...selectedCells, {'column': e.target.id, 'row': index + 1}]);
    console.log('selected column ', selectedColumn);
    console.log('row ', index + 1);
    console.log(selectedCells)
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
              className={''}
               onClick={(e) => {
                if (e.target.id === selectedColumn) {
                  setClasses(!classes ? 'active' : '');
                }
                handleClasses(e, index)}}
               id={1}>
                {row}
              </TableCell>
              <TableCell align="center"
              className={classes}
              onClick={(e) => handleClasses(e, index)}
              id={2}>
                {row}
              </TableCell>
              <TableCell align="center"
              className={classes}
              onClick={(e) => handleClasses(e, index)}
              id={3}>
                {row}
              </TableCell>
              <TableCell align="center"
              className={selectedColumn === index ? 'active' : ''}
              onClick={(e) => handleClasses(e, index)}
              id={4}>
                {row}
              </TableCell>
              <TableCell align="center"
              className={selectedColumn === index ? 'active' : ''}
              onClick={(e) => handleClasses(e, index)}
              id={5}>
                {row}
              </TableCell>
              <TableCell align="center"
              className={selectedColumn === index ? 'active' : ''}
              onClick={(e) => handleClasses(e, index)}
              id={6}>
                {row}
              </TableCell>
              <TableCell align="center"
              className={selectedColumn === index ? 'active' : ''}
              onClick={(e) => handleClasses(e, index)}
              id={7}>
                {row}
              </TableCell>
              <TableCell align="center"
              className={selectedColumn === index ? 'active' : ''}
              onClick={(e) => handleClasses(e, index)}
              id={8}>
                {row}
              </TableCell>
              <TableCell align="center"
              className={selectedColumn === index ? 'active' : ''}
              onClick={(e) => handleClasses(e, index)}
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
