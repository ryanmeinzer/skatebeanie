import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import SkateBeanieImage from '@/components/SkateBeanieImage'

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          SkateBeanie
        </Typography>
        {/* <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page
        </Link> */}
        <SkateBeanieImage />
      </Box>
    </Container>
  );
}
