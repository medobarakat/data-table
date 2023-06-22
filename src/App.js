import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress, Container } from "@mui/material";

export default function BasicTable() {
  const [quickRow, setQuickRow] = useState([]);
  const [fullRow, setFullRow] = useState([]);
  const [businessRow, setBusinessRow] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    QuickRowHandle();
    FullRowHandle();
    BusinessRowHandle();
  }, []);

  const QuickRowHandle = () => {
    setLoading(true);

    console.log("quick");
    setLoading(false);
  };

  const FullRowHandle = () => {
    setLoading(true);

    console.log("full");
    setLoading(false);
  };

  const BusinessRowHandle = () => {
    setLoading(true);

    setBusinessRow([
      {
        id: "20a3d3ba-0673-42d8-a080-9e96023dce89",
        email: "string@V.com",
        address1: "string",
        address2: "string",
        city: "string",
        state: "string",
        zipCode: "string",
        country: "string",
        businessName: "string",
        name: "string",
      },
      {
        id: "f45ac0ac-3844-4b53-9ce6-fa24868b68f1",
        email: "string@V2.com",
        address1: "string",
        address2: "string",
        city: "string",
        state: "string",
        zipCode: "string",
        country: "string",
        businessName: "string",
        name: "string",
      },
      {
        id: "00977a89-de5a-4f45-b97d-69b256aed610",
        email: "string@Va2.com",
        address1: "string",
        address2: "string",
        city: "string",
        state: "string",
        zipCode: "string",
        country: "string",
        businessName: "string",
        name: "string",
      },
      {
        id: "33b618a1-b26a-45e4-8e26-67a10706b5c8",
        email: "string@Va22.com",
        address1: "string",
        address2: "string",
        city: "string",
        state: "string",
        zipCode: "string",
        country: "string",
        businessName: "string",
        name: "string",
      },
    ]);
    setLoading(false);
  };

  // const handleFormSubmitApi = values => {
  //   setLoading(true);
  //   const url = Base_Url + Register_Api;
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   axios
  //     .get(url, config)
  //     .then(res => {
  //        console.log(res);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       setLoading(true);
  //       setRequestError(err.response.data[0].message);
  //     });
  // };

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
                    {quickRow.map((row) => (
                      <TableRow
                        key={row.name}
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
            <br />
            <h3>Full Registeration</h3>
            <Container>
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
                    {fullRow.map((row) => (
                      <TableRow
                        key={row.name}
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
            <br />
            <h3>Business Registeration</h3>
            <Container>
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
                        key={row.name}
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
