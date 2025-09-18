import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { Code, Palette, Smartphone, Storage } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const About = () => {
  const theme = useTheme();
  const highlights = [
    {
      icon: Storage,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB"
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Javascript, React js"
    },
    {
      icon: Smartphone,
      title: "Terminal Application",
      description: "Freqtrade"
    },
    {
      icon: Smartphone,
      title: "Blockchain Application",
      description: "Solidity, Ethereum"
    }
  ];

  const sectionStyles = {
    py: 10,
    background: 'rgba(31, 41, 55, 0.5)',
  };

  const gradientTextStyles = {
    background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const statsCardStyles = {
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(75, 85, 99, 0.3)',
    borderRadius: 2,
    p: 4,
  };

  const highlightCardStyles = {
    background: 'rgba(17, 24, 39, 0.5)',
    border: '1px solid rgba(75, 85, 99, 0.3)',
    borderRadius: 1.5,
    p: 3,
    transition: 'all 0.3s ease',
    '&:hover': {
      borderColor: 'rgba(59, 130, 246, 0.5)',
      transform: 'scale(1.05)',
    },
  };

  const iconBoxStyles = {
    width: 48,
    height: 48,
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 2,
  };

  return (
    <Box id="about" sx={sectionStyles}>
      <Container maxWidth="lg">
        <Box>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ color: theme.palette.text.primary, mb: 3 }}>
              About <Box component="span" sx={gradientTextStyles}>Me</Box>
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#d1d5db', 
                maxWidth: '768px', 
                mx: 'auto',
                lineHeight: 1.6 
              }}
            >
              A Backend focused Web Developer building the Backend of Websites and Web Applications that
              leads to the success of the overall product </Typography>
          </Box>

          <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ color: 'white', mb: 3 }}>
                My Journey
              </Typography>
              <Typography sx={{ color: '#d1d5db', mb: 2, lineHeight: 1.6 }}>
                  I graduated in Computer Science and Engineering from East West University, Bangladesh, 
                  and started my career at Brotecs Technologies Limited as an Intern Software Engineer. 
                  Over nearly five years, I worked on R&D, cloud, and healthcare-related projects, 
                  advancing to the role of Software Engineer II. Afterward, I transitioned into freelancing, 
                  where I continue to develop solutions and explore diverse opportunities.  </Typography>
            </Grid>
            
            {/* <Grid item size={{ xs:12, md:6 }}>
              <Card sx={statsCardStyles}>
                <CardContent>
                  <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                    <Grid item size={{xs:6}}>
                      <Typography variant="h4" sx={{ color: 'white', mb: 1, fontWeight: 700 }}>
                        5+
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#d1d5db' }}>
                        Years Experience
                      </Typography>
                    </Grid>
                    <Grid item size={{xs:6}}>
                      <Typography variant="h4" sx={{ color: 'white', mb: 1, fontWeight: 700 }}>
                        50+
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#d1d5db' }}>
                        Projects Completed
                      </Typography>
                    </Grid>
                    <Grid item size={{xs:6}}>
                      <Typography variant="h4" sx={{ color: 'white', mb: 1, fontWeight: 700 }}>
                        20+
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#d1d5db' }}>
                        Happy Clients
                      </Typography>
                    </Grid>
                    <Grid item size={{xs:6}}>
                      <Typography variant="h4" sx={{ color: 'white', mb: 1, fontWeight: 700 }}>
                        100%
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#d1d5db' }}>
                        Success Rate
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid> */}
          </Grid>

          <Grid container spacing={4}>
            {highlights.map((item, index) => (
              <Grid item size={{xs:12, sm:6, lg:3 }} key={index}>
                <Card sx={highlightCardStyles}>
                  <CardContent>
                    <Box sx={iconBoxStyles}>
                      <item.icon sx={{ color: 'white', fontSize: 24 }} />
                    </Box>
                    <Typography variant="h6" sx={{ color: 'white', mb: 1, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;