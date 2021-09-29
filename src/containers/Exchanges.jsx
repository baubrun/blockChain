import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { readNum } from "../helper";
import { showLoader, showToaster } from "../redux/layoutSlice";
import { useGetExchangesQuery } from "../services/currency";
import { STATUS_ERROR } from "../constants/layout";

const Exchanges = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { data, isFetching, isError, error } = useGetExchangesQuery("");
  const exchangesList = data?.data?.exchanges;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    dispatch(showLoader(isFetching));
  }, [isFetching]);

  useEffect(() => {
    if (isError) {
      dispatch(showToaster({ message: error, status: STATUS_ERROR }));
    }
  }, [isError]);

  if (isFetching) return null;

  return (
    <Paper sx={{ width: "100%", overflow: "auto" }}>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 350 }} align="right">
                Exchanges
              </TableCell>
              <TableCell style={{ minWidth: 350 }} align="right">
                Markets
              </TableCell>
              <TableCell style={{ minWidth: 350 }} align="right">
                Change
              </TableCell>
              <TableCell style={{ minWidth: 350 }} align="right">
                24h trade volume
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exchangesList
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Grid container justifyContent="space-between">
                      <Grid item xs={4}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          {`${row.rank}.`}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Avatar
                          variant="circular"
                          src={row.iconUrl}
                          alt={row.name}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          {row.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell align="right">
                    {readNum(row.numberOfMarkets)}
                  </TableCell>
                  <TableCell align="right">{`${readNum(
                    row.marketShare
                  )}%`}</TableCell>
                  <TableCell align="right">{readNum(row.volume)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={exchangesList?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Exchanges;
