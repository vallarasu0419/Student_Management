import React, { useContext } from "react";
import { Typography, TextField, Button, Box, Grid } from "@mui/material";
import { UserContext } from "../UserContext";

const Settings = () => {
  const { user } = useContext(UserContext);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            value={user.email}
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            value={user.firstName}
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            value={user.lastName}
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Password"
            type="password"
            value={user.password}
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
