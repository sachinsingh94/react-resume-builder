import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

export default function EducationForm({ register }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">Education</Typography>
      
      <TextField
        label="Degree / Qualification"
        variant="outlined"
        fullWidth
        {...register("education.degree")}
      />
      
      <TextField
        label="Institution / University"
        variant="outlined"
        fullWidth
        {...register("education.institution")}
      />
      
      <TextField
        label="Year (e.g. 2020 - 2023)"
        variant="outlined"
        fullWidth
        {...register("education.year")}
      />
    </Box>
  );
}