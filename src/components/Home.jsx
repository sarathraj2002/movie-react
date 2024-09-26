import React from 'react'
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Home = () => {
const mov_obj=[{MovieName:"ARM",Description:"Action",Director:"Jithin",Language:"Malayalam",Year:2024},{MovieName:"Pulimurugan",Description:"Action",Director:"Vyshakh",Language:"Malayalam",Year:2016},{MovieName:"KGF2",Description:"Action",Director:"Neel",Language:"Tamil",Year:2018},{MovieName:"Bahubali2",Description:"Epic",Director:"Rajamouli",
    Language:"Kannada",Year:2017}] 
 
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h2>MOVIE LIST</h2></TableCell>
            <TableCell align="left">MovieName</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Director</TableCell>
            <TableCell align="left">Language</TableCell>
            <TableCell align="left">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mov_obj.map((row) => (
            <TableRow
            //   key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                
              </TableCell>
              <TableCell align="left">{row.MovieName}</TableCell>
              <TableCell align="left">{row.Description}</TableCell>
              <TableCell align="left">{row.Director}</TableCell>
              <TableCell align="left">{row.Language}</TableCell>
              <TableCell align="left">{row.Year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}


export default Home
