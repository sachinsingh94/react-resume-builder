import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

export default function WorkExperienceForm({ register }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">Work Experience</Typography>
      
      <TextField
        label="Role / Job Title"
        variant="outlined"
        fullWidth
        {...register("experience.role")}
      />
      
      <TextField
        label="Company Name"
        variant="outlined"
        fullWidth
        {...register("experience.company")}
      />
      
      <TextField
        label="Duration (e.g. Jan 2023 - Present)"
        variant="outlined"
        fullWidth
        {...register("experience.duration")}
      />
      
      <TextField
        label="Description"
        variant="outlined"
        multiline
        rows={3}
        fullWidth
        {...register("experience.description")}
      />
    </Box>
  );
}