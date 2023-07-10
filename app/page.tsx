"use client";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import * as React from 'react';

export default function Home() {
  return (
    <>
      <h1>Tool Rental</h1>
      <h3>Here are some things you can do</h3>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Link href="/rental"><Button>Rent a tool</Button></Link>
        
      </Box>
    </>
  );
}