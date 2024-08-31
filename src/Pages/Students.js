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

const Students = () => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const getStudents = async () => {
    try {
      const response = await axios.get(
        `https://freetestapi.com/api/v1/students`
      );
      if (response.status === 200) {
        setStudents(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const paginatedStudents = students.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Students
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={2} display="flex" justifyContent="flex-end" alignItems="center">
        <Pagination
          count={Math.ceil(students.length / rowsPerPage)}
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

export default Students;
