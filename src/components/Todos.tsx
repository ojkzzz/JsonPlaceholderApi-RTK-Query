import styled from "@emotion/styled";
import {
  Avatar,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import {
  useGetPhotosQuery,
  useGetTodosQuery,
} from "../RTKQ/api/jsonPlaceholder.api";
import Loader from "./Loader";

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "black",
    color: "white",
  },
}));

const Todos = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const { data, isLoading } = useGetTodosQuery();
  const { data: photosData, isLoading: photosIsLoading } = useGetPhotosQuery();

  if (isLoading) return <Loader />;
  if (photosIsLoading) return <Loader />;

  return (
    <Stack alignItems="center" m={4}>
      <TableContainer
        component={Paper}
        elevation={24}
        sx={{
          minWidth: 600,
          maxWidth: 1400,
          borderRadius: "20px",
        }}
      >
        <Table sx={{ minWidth: 400, maxWidth: "1200" }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Avatar</StyledTableCell>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Completed</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((todo) => (
                <TableRow key={todo.id} hover>
                  <TableCell>
                    <Avatar src={photosData && photosData[todo.id].url} />
                  </TableCell>
                  <TableCell>{todo.id}</TableCell>
                  <TableCell>{todo.title}</TableCell>
                  <TableCell>
                    {todo.completed ? (
                      <Chip
                        label="Выполнена"
                        color="success"
                        sx={{ color: "grey.0" }}
                      />
                    ) : (
                      <Chip
                        label="Не выполнена"
                        color="error"
                        sx={{ color: "grey.0" }}
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={data ? data?.length : 1}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          }}
        />
      </TableContainer>
    </Stack>
  );
};

export default Todos;
