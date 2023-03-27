import { useState } from 'react';
import {useRef} from 'react';
import { Container, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

export default function ExerciseGrid() {
  const [selectedCells, setSelectedCells] = useState(['']);
  const [warning, setWarning] = useState('');
  const [selectedRow, setSelectedRow] = useState([]);
  const ref = useRef('');

  function handleSelected(event, newSelectionOfCells) {
    console.log(event.currentTarget.value)
    setSelectedCells(newSelectionOfCells);
  }

  const FormRow =  [
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='1' key='1'>
              1
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='2' key='2'>
              2
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" color={warning} value='3' key='3'>
              3
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='4' key='4'>
              4
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='5' key='5'>
              5
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='6' key='6'>
              6
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='7' key='7'>
              7
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='8' key='8'>
              8
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='9' key='9'>
              9
          </ToggleButton>
      ];

  const LastFormRow = [
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='10' key='lastRow-1'>
              1
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='11' key='lastRow-2'>
              2
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='12' key='lastRow-3'>
              3
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='13' key='lastRow-4'>
              4
          </ToggleButton>
  ]

  const select = {
    value: selectedCells,
    onChange: handleSelected,
  };


  return (
    <Container maxWidth="lg">
      <Typography mt={4} align='center' variant='h3' component='h1'>Select Rows</Typography>
      <Stack spacing={2} mt={4} alignItems="center">
          <ToggleButtonGroup {...select} id='row-1'>
            {FormRow}
          </ToggleButtonGroup>
          <ToggleButtonGroup {...select} id='row-2' >
            {FormRow}
          </ToggleButtonGroup>
          <ToggleButtonGroup {...select} id='row-3' >
            {FormRow}
          </ToggleButtonGroup>
          <ToggleButtonGroup {...select} id='row-4' >
            {FormRow}
          </ToggleButtonGroup>
          <ToggleButtonGroup {...select} sx={{ paddingRight: '395px'}}  id='row 5' >
            {LastFormRow}
          </ToggleButtonGroup>
      </Stack>
    </Container>
  );
}