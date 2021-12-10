import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
const Counter = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
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
          <Grid>
            <Button
              variant="contained"
              onClick={() => {
                depositMoney(50);
              }}
            >
              +
            </Button>
            <Typography variant="h5">Add To Balance</Typography>
            <Button
              variant="contained"
              onClick={() => {
                withdrawMoney(50);
              }}
            >
              -
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Counter;
