import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <>
      <Grid item lg={1}>
        <Item>1</Item>
      </Grid>
      <Grid item lg={1}>
        <Item>2</Item>
      </Grid>
      <Grid item lg={1}>
        <Item>3</Item>
      </Grid>
      <Grid item lg={1}>
        <Item>4</Item>
      </Grid>
      <Grid item lg={1}>
        <Item>5</Item>
      </Grid>
      <Grid item lg={1}>
        <Item>6</Item>
      </Grid>
      <Grid item lg={1}>
        <Item>7</Item>
      </Grid>
      <Grid item lg={1}>
        <Item>8</Item>
      </Grid>
      <Grid item lg={1}>
        <Item>9</Item>
      </Grid>
    </>
  );
}

export default function ExerciseGrid() {
  return (
    <Container maxWidth="lg">
      <Typography align='center' variant='h3' component='h1'>Select Rows</Typography>
      <Box sx={{ flexGrow: 1 }} mt={2} wrap>
        <Grid container justifyContent="center" spacing={2}>
          <Grid container sx={{ display:'flex', justifyContent:"center", alignItems:"center" }} item spacing={1}>
            <FormRow />
          </Grid>
          <Grid container sx={{ display:'flex', justifyContent:"center", alignItems:"center" }} item spacing={1}>
            <FormRow />
          </Grid>
          <Grid container sx={{ display:'flex', justifyContent:"center", alignItems:"center" }} item spacing={1}>
            <FormRow />
          </Grid>
          <Grid container sx={{ display:'flex', justifyContent:"center", alignItems:"center" }} item spacing={1}>
            <FormRow />
          </Grid>
          <Grid container sx={{ display:'flex', justifyContent:"center", alignItems:"center" }} item spacing={1}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}