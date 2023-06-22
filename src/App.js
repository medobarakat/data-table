import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress, Container } from "@mui/material";
import axios from "axios";

export default function BasicTable() {
  const [quickRow, setQuickRow] = useState([]);
  const [fullRow, setFullRow] = useState([]);
  const [businessRow, setBusinessRow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    QuickRowHandle();
    FullRowHandle();
    BusinessRowHandle();
  }, []);

  const QuickRowHandle = () => {
    setLoading(true);
    const url =
      "http://44.202.140.227:8081/community/api/v1/registration/get?registrationType=EMAIL";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .get(url, config)
      .then((res) => {
        setQuickRow(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        setError(err.response.data[0].message);
      });
  };

  const FullRowHandle = () => {
    setLoading(true);
    const url =
      "http://44.202.140.227:8081/community/api/v1/registration/get?registrationType=FULL_REGISTRATION";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .get(url, config)
      .then((res) => {
        setFullRow(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        setError(err.response.data[0].message);
      });
  };

  const BusinessRowHandle = () => {
    setLoading(true);
    const url =
      "http://44.202.140.227:8081/community/api/v1/registration/get?registrationType=BUSINESS";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .get(url, config)
      .then((res) => {
        setBusinessRow(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        setError(err.response.data[0].message);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ margin: "20px 0" }}>Data Table</h1>

      <>
        {loading === true ? (
          <CircularProgress style={{ margin: "20px" }} />
        ) : (
          <>
            <h3>Quick Registeration</h3>
            <Container>
              <TableContainer component={Paper}>
                <Table sx={{ maxWidth: "100%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#9999", color: "white" }}>
                      <TableCell sx={{textAlign:"center"}}>Email</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {quickRow.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell sx={{textAlign:"center"}}>{row.email}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
            <br />
            <h3>Full Registeration</h3>
            <Container>
              <TableContainer component={Paper}>
                <Table sx={{ maxWidth: "100%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#9999", color: "white" }}>
                      <TableCell>Email</TableCell>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Address 1</TableCell>
                      <TableCell>Address 2</TableCell>
                      <TableCell>City</TableCell>
                      <TableCell>State</TableCell>
                      <TableCell>Zip Code</TableCell>
                      <TableCell>Country</TableCell>
                      <TableCell>phone</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fullRow.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.firstName}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.address1}</TableCell>
                        <TableCell>{row.address2}</TableCell>
                        <TableCell>{row.city}</TableCell>
                        <TableCell>{row.state}</TableCell>
                        <TableCell>{row.zipCode}</TableCell>
                        <TableCell>{row.country}</TableCell>
                        <TableCell>{row.phoneNo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
            <br />
            <h3>Business Registeration</h3>
            <Container sx={{ marginBottom: 20 }}>
              <TableContainer component={Paper}>
                <Table sx={{ maxWidth: "100%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#9999", color: "white" }}>
                      <TableCell>Email</TableCell>
                      <TableCell>Address 1</TableCell>
                      <TableCell>Address 2</TableCell>
                      <TableCell>City</TableCell>
                      <TableCell>State</TableCell>
                      <TableCell>Zip Code</TableCell>
                      <TableCell>Country</TableCell>
                      <TableCell>Business Name</TableCell>
                      <TableCell>Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {businessRow.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.address1}</TableCell>
                        <TableCell>{row.address2}</TableCell>
                        <TableCell>{row.city}</TableCell>
                        <TableCell>{row.state}</TableCell>
                        <TableCell>{row.zipCode}</TableCell>
                        <TableCell>{row.country}</TableCell>
                        <TableCell>{row.businessName}</TableCell>
                        <TableCell>{row.name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </>
        )}
      </>
    </div>
  );
}
