import * as React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

function FormRow() {
  return (
    <>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="outlined">
            1
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="outlined">
            2
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="outlined">
            3
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="outlined">
            4
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="outlined">
            5
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="outlined">
            6
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="outlined">
            7
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="outlined">
            8
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="outlined">
            9
        </Button>
      </Grid>
    </>
  );
}

function LastFormRow() {
  return (
    <>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="outlined">
            1
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="outlined">
            2
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="outlined">
            3
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button size="large" fullWidth variant="outlined">
            4
        </Button>
      </Grid>
    </>
  )
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
          <Grid container sx={{ display:'flex', justifyContent:"center", alignItems:"center", paddingRight:'360px' }} item spacing={1}>
            <LastFormRow />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}