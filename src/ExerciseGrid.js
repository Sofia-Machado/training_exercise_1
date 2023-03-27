import { useState } from 'react';
import { Box, Container, Grid, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

export default function ExerciseGrid() {
  const [selectedRows, setSelectedRows] = useState('');

  function handleSelected(event, newSelectionOfRows) {
    console.log(event.target.value + ' changed');
    console.log(selectedRows);
    setSelectedRows(newSelectionOfRows);
  }

  const FormRow =  [
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='1' key='1'>
              1
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='2' key='2'>
              2
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='3' key='3'>
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
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='1' key='lastRow-1'>
              1
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='2' key='lastRow-2'>
              2
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='3' key='lastRow-3'>
              3
          </ToggleButton>,
          <ToggleButton size="large" sx={{width:'80px'}} variant="outlined" value='4' key='lastRow-4'>
              4
          </ToggleButton>
  ]

  const select = {
    value: selectedRows,
    onChange: handleSelected,
    exclusive: true
  };

 

  return (
    <Container maxWidth="lg">
      <Typography align='center' variant='h3' component='h1'>Select Rows</Typography>
      <Stack spacing={2} alignItems="center">
          <ToggleButtonGroup {...select} row={'first-row'}>
            {FormRow}
          </ToggleButtonGroup>
            <ToggleButtonGroup {...select} >
            {FormRow}
          </ToggleButtonGroup>
            <ToggleButtonGroup {...select} >
            {FormRow}
          </ToggleButtonGroup>
          <ToggleButtonGroup {...select} sx={{ paddingRight: '395px'}} >
            {LastFormRow}
          </ToggleButtonGroup>
      </Stack>
    </Container>
  );
}