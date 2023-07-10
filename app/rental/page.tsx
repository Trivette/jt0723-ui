"use client";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Handyman from '@mui/icons-material/Handyman';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import RentalAgreement, { RentalAgreementType } from '../rental-agreement';

export default function Rental() {
  const [rentalAgreement, setRentalAgreement] = useState<RentalAgreementType>();
  const [rentalError, setRentalError] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      toolCode: data.get('toolCode'),
      days: data.get('days'),
      startDate: data.get('startDate'),
      discount: data.get('discount')
    });

    let rentalRequest = {
      toolCode: data.get('toolCode'),
      days: data.get('days'),
      startDate: data.get('startDate'),
      discount: data.get('discount')
    };

    await fetch(`http://localhost:8080/rental`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rentalRequest)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log('data', data);
      data.errors ? setRentalError(data.errors) : setRentalAgreement(data);
    }).catch((err) => {
      console.log('err', err);
    })
  };

  return (
    <>
        {!rentalAgreement &&
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            ".error": {
              margin: 0
            }
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <Handyman />
          </Avatar>
          <Typography component="h1" variant="h5">
            Tool Rental Application
          </Typography>
          {rentalError && 
            <Typography component="h1" variant="h6" sx={{color: 'red', }}>
              <ul>
                {rentalError.map((error: string, index) => (
                  <li key={index} className="error">{error}</li>
                ))}
              </ul>
            </Typography>
          }
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="toolCode"
                  label="Tool Code"
                  name="toolCode"
                  defaultValue="CHNS"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="days"
                  label="Days Required"
                  type="number"
                  id="days"
                  autoComplete="days"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="startDate"
                  label="Start Date"
                  type="date"
                  id="startDate"
                  autoComplete="date"
                  defaultValue={new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'numeric', day: 'numeric'})}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="discount"
                  label="Discount"
                  type="number"
                  id="discount"
                  autoComplete="discount"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  required
                  control={<Checkbox value="agreement" color="primary" />}
                  label="I agree to the Rental terms and conditions"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Rent
            </Button>
          </Box>
        </Box>
        }

        {rentalAgreement && 
          <>
            <RentalAgreement {...rentalAgreement}/>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2}}
              onClick={() => {setRentalAgreement(undefined); setRentalError([]);}}
            >
              Rent Another Tool
            </Button>
          </>
        }
    </>
  );
}