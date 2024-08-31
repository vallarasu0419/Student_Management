import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [teachersCount, setTeachersCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);
  const navigate = useNavigate();

  const getTeachersCount = async () => {
    try {
      const response = await axios.get(
        `https://freetestapi.com/api/v1/teachers`
      );
      if (response.status === 200) {
        setTeachersCount(response.data.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getStudentsCount = async () => {
    try {
      const response = await axios.get(
        `https://freetestapi.com/api/v1/students`
      );
      if (response.status === 200) {
        setStudentsCount(response.data.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getEventsCount = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      if (response.status === 200) {
        setEventsCount(response.data.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeachersCount();
    getStudentsCount();
    getEventsCount();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Teachers</Typography>
              <Typography variant="h4">{teachersCount}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => navigate("/dashboard/teachers")}
              >
                View Teachers
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Students</Typography>
              <Typography variant="h4">{studentsCount}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => navigate("/dashboard/students")}
              >
                View Students
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Events</Typography>
              <Typography variant="h4">{eventsCount}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => navigate("/dashboard/events")}
              >
                View Events
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
