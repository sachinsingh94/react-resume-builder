import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

export default function KeySkillsForm({ register }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">Key Skills</Typography>
      
      <TextField
        label="Skills (Comma separated)"
        variant="outlined"
        fullWidth
        placeholder="React.js, JavaScript, Tailwind CSS, Git"
        {...register("skills")}
      />
      
      <Typography variant="caption" color="textSecondary">
        Enter your skills separated by commas.
      </Typography>
    </Box>
  );
}