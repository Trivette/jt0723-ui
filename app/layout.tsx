"use client";
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, Link, Typography, createTheme } from '@mui/material'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Container from '@mui/material/Container';
import Navbar from './navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tool Rental Application',
  description: 'Rent tools from us !',
}

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://cardinalfinancial.com/">
        Cardinal Financial
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={defaultTheme}>
          <Navbar />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
              {children}
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  )
}
