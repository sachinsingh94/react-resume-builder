import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalInfo, addEducation, addExperience, updateSkills } from '../redux/resumeSlice';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Tabs, Tab, Button, TextField, Typography } from '@mui/material';
import WorkExperienceForm from '../components/WorkExperienceForm';
import EducationForm from '../components/EducationForm';
import KeySkillsForm from '../components/KeySkillsForm';

export default function DetailsFilling() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resumeState = useSelector((state) => state.resume);
  const [activeTab, setActiveTab] = useState(0);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      personalInfo: resumeState.personalInfo,
      education: resumeState.education[0] || { degree: '', institution: '', year: '' },
      experience: resumeState.experience[0] || { role: '', company: '', duration: '', description: '' },
      skills: resumeState.skills.join(', ')
    }
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const onSubmitStep = (data) => {
    if (activeTab === 0) {
      dispatch(updatePersonalInfo(data.personalInfo));
      setActiveTab(1);
    } else if (activeTab === 1) {
      dispatch(addExperience(data.experience));
      setActiveTab(2);
    } else if (activeTab === 2) {
      dispatch(addEducation(data.education));
      setActiveTab(3);
    } else if (activeTab === 3) {
      const skillsArray = data.skills.split(',').map(s => s.trim()).filter(Boolean);
      dispatch(updateSkills(skillsArray));
      navigate('/preview');
    }
  };

  return (
    <Box sx={{ maxWidth: 700, margin: '40px auto', padding: '30px', boxShadow: 3, borderRadius: 2, bgcolor: '#fff' }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
        Build Your Resume
      </Typography>

      {/* MUI Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} variant="fullWidth" indicatorColor="primary" textColor="primary">
          <Tab label="Personal Info" />
          <Tab label="Work Experience" />
          <Tab label="Education" />
          <Tab label="Key Skills" />
        </Tabs>
      </Box>

      <form onSubmit={handleSubmit(onSubmitStep)}>
        {/* Tab 0: Personal Info */}
        {activeTab === 0 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">Personal Information</Typography>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              {...register("personalInfo.fullName", { required: "Name is required" })}
              error={!!errors.personalInfo?.fullName}
              helperText={errors.personalInfo?.fullName?.message}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              {...register("personalInfo.email", { required: "Email is required" })}
              error={!!errors.personalInfo?.email}
              helperText={errors.personalInfo?.email?.message}
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              {...register("personalInfo.phone")}
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              {...register("personalInfo.address")}
            />
            <TextField
              label="Professional Summary"
              variant="outlined"
              multiline
              rows={3}
              fullWidth
              {...register("personalInfo.summary")}
            />
          </Box>
        )}

        {/* Tab 1: Work Experience */}
        {activeTab === 1 && (
          <WorkExperienceForm register={register} />
        )}

        {/* Tab 2: Education */}
        {activeTab === 2 && (
          <EducationForm register={register} />
        )}

        {/* Tab 3: Key Skills */}
        {activeTab === 3 && (
          <KeySkillsForm register={register} />
        )}

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          {activeTab > 0 ? (
            <Button variant="outlined" color="secondary" onClick={() => setActiveTab(activeTab - 1)}>
              Back
            </Button>
          ) : <div />}

          <Button variant="contained" color="primary" type="submit">
            {activeTab === 3 ? 'Save & Preview' : 'Next'}
          </Button>
        </Box>
      </form>
    </Box>
  );
}