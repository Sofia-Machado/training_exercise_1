import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';

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
        <Button size="large" fullWidth variant="contained">
            1
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="contained">
            2
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="contained">
            3
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="contained">
            4
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="contained">
            5
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="contained">
            6
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="contained">
            7
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="contained">
            8
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="contained">
            9
        </Button>
      </Grid>
    </>
  );
}

export default function ExerciseGrid() {
  return (
    <Container maxWidth="lg">
      <Typography align='center' variant='h3' component='h1'>Select Rows</Typography>
      <Box sx={{ flexGrow: 1 }} mt={2} wrap>
        <Grid container justifyContent="center" spacing={1}>
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