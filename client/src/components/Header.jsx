import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

export default function Header() {
  return (
    <Box >
      <Grid container justifyContent="center" alignItem="center">
        <Grid item>
          <Typography variant="h1" textAlign='center' gutterBottom>
            Retrieval System
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}