import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
  },
  education: [],
  experience: [],
  skills: [],
};

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    addExperience: (state, action) => {
      state.experience.push(action.payload);
    },
    updateSkills: (state, action) => {
      state.skills = action.payload;
    },
    resetResume: () => initialState,
  },
});

export const { 
  updatePersonalInfo, 
  addEducation, 
  addExperience, 
  updateSkills, 
  resetResume 
} = resumeSlice.actions;

export default resumeSlice.reducer;