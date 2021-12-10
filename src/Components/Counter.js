import React from "react";
import { Grid, Typography, Button } from "@mui/material";

const Counter = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3} alignItems="center">
          <Typography variant="h4" align="center">
            Diposit Money / Widhdrawl Money - Amount 50 INR
          </Typography>
          <Grid direction="row">
            <Button variant="contained">+</Button>
            <Typography variant="h5">Add To Balance</Typography>
            <Button variant="contained">-</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Counter;
