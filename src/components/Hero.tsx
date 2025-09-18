import React from 'react';
import { Box, Typography, Button, IconButton, Container, Avatar } from '@mui/material';
import { KeyboardArrowDown, Download, GitHub, LinkedIn, Email } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Hero = () => {
  const theme = useTheme();
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroStyles = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(45deg, rgba(29, 78, 216, 0.2) 0%, transparent 50%, rgba(124, 58, 237, 0.2) 100%)',
    },
  };

  const backgroundElement1 = {
    position: 'absolute',
    top: '5rem',
    left: '2.5rem',
    width: '18rem',
    height: '18rem',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '50%',
    filter: 'blur(48px)',
    animation: 'pulse 2s infinite',
  };

  const backgroundElement2 = {
    position: 'absolute',
    bottom: '5rem',
    right: '2.5rem',
    width: '24rem',
    height: '24rem',
    background: 'rgba(168, 85, 247, 0.1)',
    borderRadius: '50%',
    filter: 'blur(48px)',
    animation: 'pulse 2s infinite 1s',
  };

  const profileImageStyles = {
    width: 300,
    height: 300,
    margin: '0 auto 2rem',
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    fontSize: '2.5rem',
    fontWeight: 700,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  };

  const gradientTextStyles = {
    background: 'linear-gradient(to right, #60a5fa, #a78bfa, #60a5fa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'pulse 2s infinite',
  };

  const primaryButtonStyles = {
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    color: 'white',
    px: 4,
    py: 1.5,
    borderRadius: '9999px',
    fontWeight: 600,
    boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.25)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
    },
  };

  const socialIconStyles = {
    color: '#9ca3af',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: '#ffffff',
      transform: 'scale(1.1)',
    },
  };

  const bounceAnimation = {
    animation: 'bounce 1s infinite',
    color: '#9ca3af',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#ffffff',
    },
  };

  return (
    <Box id="home" sx={heroStyles}>
      <Box sx={backgroundElement1} />
      <Box sx={backgroundElement2} />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <Box sx={{ maxWidth: '4xl', mx: 'auto' }}>
          <Avatar sx={profileImageStyles} src='/profile.jpg'>O</Avatar>

          <Typography variant="h1" sx={{ mb: 3, lineHeight: 1.1 }}>
            <Box component="span" sx={{ color: theme.palette.text.primary }}>Hi, I'm </Box>
            <Box component="span" sx={gradientTextStyles}>
              Obaidullah Al-Faruk
            </Box>
          </Typography>

          <Typography 
            variant="h5" 
            sx={{ 
              color: theme.palette.text.secondary, 
              mb: 4, 
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.25rem', md: '1.5rem' }
            }}
          >
            I build things for the web
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: 2, 
            mb: 6 
          }}>
            <Button 
              sx={primaryButtonStyles} 
              startIcon={<Download />}
              href='/obaidullah_al_faruk_resume.pdf' target='_blank'
              >
              Download Resume
            </Button>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton href="https://github.com/obaidullah-faruk" target="_blank" sx={socialIconStyles}>
                <GitHub/>
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/md-obaidullah-al-faruk-788b32a3/" target='_blank' sx={socialIconStyles}>
                <LinkedIn />
              </IconButton>
              {/* <IconButton href="#" sx={socialIconStyles}>
                <Email />
              </IconButton> */}
            </Box>
          </Box>

          <IconButton onClick={scrollToAbout} sx={bounceAnimation}>
            <KeyboardArrowDown sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>
      </Container>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
            40%, 43% { transform: translate3d(0,-30px,0); }
            70% { transform: translate3d(0,-15px,0); }
            90% { transform: translate3d(0,-4px,0); }
          }
        `}
      </style>
    </Box>
  );
};

export default Hero;