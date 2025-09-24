import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent,
  TextField,
  Button,
  IconButton
} from '@mui/material';
import { Email, Phone, LocationOn, Send, GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setStatus('sending');
    setErrorMsg(null);
    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData })
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg('Could not send your message. Please try again.');
    }

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sectionStyles = {
    py: 10,
    backgroundColor: '#111827',
  };

  const gradientTextStyles = {
    background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const contactInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    mb: 3,
  };

  const iconBoxStyles = {
    width: 48,
    height: 48,
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const socialIconStyles = {
    width: 40,
    height: 40,
    backgroundColor: '#1f2937',
    color: '#9ca3af',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      transform: 'scale(1.1)',
    },
  };

  const formCardStyles = {
    background: 'rgba(31, 41, 55, 0.5)',
    border: '1px solid rgba(75, 85, 99, 0.3)',
    borderRadius: 1.5,
    p: 4,
  };

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#111827',
      '& fieldset': {
        borderColor: '#4b5563',
      },
      '&:hover fieldset': {
        borderColor: '#3b82f6',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3b82f6',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#d1d5db',
    },
    '& .MuiOutlinedInput-input': {
      color: '#ffffff',
    },
  };

  const submitButtonStyles = {
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    color: 'white',
    py: 1.5,
    fontWeight: 600,
    boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.25)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
    },
  };

  return (
    <Box id="contact" sx={sectionStyles}>
      <Container maxWidth="lg">
        <Box sx={{  mx: 'auto' }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ color: theme.palette.text.primary, mb: 3 }}>
              Get In <Box component="span" sx={gradientTextStyles}>Touch</Box>
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#d1d5db', 
                mx: 'auto',
                lineHeight: 1.6 
              }}
            >
              Let's discuss your next project and bring your ideas to life
            </Typography>
          </Box>

          <Grid container spacing={6} alignItems="flex-start">
            <Grid item size={{ md:6, xl:6, xs:12 }}>
              <Typography variant="h4" sx={{ color: 'white', mb: 4, fontWeight: 700 }}>
                Let's Connect
              </Typography>
              <Typography sx={{ color: '#d1d5db', mb: 4, lineHeight: 1.6 }}>
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Box sx={contactInfoStyles}>
                  <Box sx={iconBoxStyles}>
                    <Email sx={{ color: 'white', fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Email
                    </Typography>
                    <Typography sx={{ color: '#d1d5db' }}>
                      obaidullah.faruk05@gmail.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={contactInfoStyles}>
                  <Box sx={iconBoxStyles}>
                    <Phone sx={{ color: 'white', fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Phone
                    </Typography>
                    <Typography sx={{ color: '#d1d5db' }}>
                      +880-1622283760
                    </Typography>
                  </Box>
                </Box>

                <Box sx={contactInfoStyles}>
                  <Box sx={iconBoxStyles}>
                    <LocationOn sx={{ color: 'white', fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Location
                    </Typography>
                    <Typography sx={{ color: '#d1d5db' }}>
                      Dhaka, Bangladesh. Available for remote work
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                  Follow Me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton href="https://github.com/obaidullah-faruk" target="_blank" sx={socialIconStyles}>
                    <GitHub sx={{ fontSize: 18 }} />
                  </IconButton>
                  <IconButton href="https://www.linkedin.com/in/md-obaidullah-al-faruk-788b32a3/" target='_blank' sx={socialIconStyles}>
                    <LinkedIn sx={{ fontSize: 18 }} />
                  </IconButton>
                  <IconButton href="https://x.com/AlFaruk75" target='_blank' sx={socialIconStyles}>
                    <Twitter sx={{ fontSize: 18 }} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>

            <Grid item size={{ xl:6, md:6, xs:12 }}>
              <Card sx={formCardStyles}>
                <CardContent>
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item size ={{xs:6, md:6}}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          sx={textFieldStyles}
                        />
                      </Grid>
                      <Grid item size ={{xs:6, md:6}}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          sx={textFieldStyles}
                        />
                      </Grid>
                      <Grid item size ={{md:12, xs:12}}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project Inquiry"
                          sx={textFieldStyles}
                        />
                      </Grid>
                      <Grid item size ={{md:12, xs:12}}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          required
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project..."
                          sx={textFieldStyles}
                        />
                      </Grid>
                      <Grid item size={{xs:12}}>
                        <Button
                          type="submit"
                          fullWidth
                          startIcon={<Send />}
                          disabled={status === 'sending'}
                          sx={submitButtonStyles}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;