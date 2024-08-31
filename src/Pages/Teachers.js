import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Pagination,
} from "@mui/material";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const getTeachers = async () => {
    try {
      const response = await axios.get(
        `https://freetestapi.com/api/v1/teachers`
      );
      if (response.status === 200) {
        setTeachers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeachers();
  }, []);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const paginatedTeachers = teachers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Teachers
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Subject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedTeachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.age}</TableCell>
                <TableCell>{teacher.subjects.join(", ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={2} display="flex" justifyContent="right" alignItems="center">
        <Pagination
          count={Math.ceil(teachers.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
        />
        <Select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          sx={{ minWidth: 120 }}
        >
          {[5, 10, 25].map((rows) => (
            <MenuItem key={rows} value={rows}>
              {rows} rows per page
            </MenuItem>
          ))}
        </Select>
      </Box>
    </div>
  );
};

export default Teachers;
