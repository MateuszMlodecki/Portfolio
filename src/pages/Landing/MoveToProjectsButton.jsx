import React from 'react';
import { Paper, Button, Tooltip } from '@mui/material';
import AdsClickIcon from '@mui/icons-material/AdsClick';
const glassmorphicPaperStyle = {
  width: { xs: '90%', sm: '80%', md: '60%' },
  borderRadius: 16,
  p: { xs: 2, sm: 3 },
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '40px',
};

const tooltipStyles = {
  tooltip: {
    sx: {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      backdropFilter: 'blur(10px)',
      color: 'black',
      fontWeight: 600,
      borderRadius: 2,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      p: '8px 16px',
      fontSize: '0.875rem',
    },
  },
  arrow: {
    sx: {
      color: 'rgba(255, 255, 255, 0.6)',
    },
  },
};

export const MoveToProjectsButton = ({ targetId }) => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById(targetId);
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Paper elevation={4} sx={glassmorphicPaperStyle}>
      <Tooltip title={'W trakcie budowy'} placement="bottom" arrow componentsProps={tooltipStyles}>
        <Button
          variant="text"
          size="large"
          onClick={handleScrollToProjects}
          endIcon={<AdsClickIcon />}
          sx={{
            borderRadius: 16,
            width: '100%',
            color: '#333',
            fontWeight: 'bold',
            fontFamily: 'Josephine Sans, sans-serif',
            fontSize: 'clamp(18px, 4vw, 22px)',
            py: 1,
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          Zobacz inne moje projekty
        </Button>
      </Tooltip>
    </Paper>
  );
};
