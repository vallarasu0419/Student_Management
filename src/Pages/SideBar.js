import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        backgroundColor: "#f5f5f5",
        p: 2,
        boxShadow: 3,
      }}
    >
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/students">
          <ListItemText primary="Students" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/teachers">
          <ListItemText primary="Teachers" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/events">
          <ListItemText primary="Upcoming Events" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/settings">
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
