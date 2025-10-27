import { Box, Typography, Container, Grid, Card, CardContent, Chip, LinearProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Skills = () => {
  const theme = useTheme()
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 78 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Figma", level: 88 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 72 },
        { name: "Adobe Suite", level: 80 }
      ]
    }
  ];

  const technologies = [
    "Python", "Node.js", "Docker", "AWS", "Express.js", "Git", "Nginx", "Terraform", "React","PostgreSQL", "MongoDB", "InfluxDB", "AWS", "Frappe", "ERPNext", "Freqtrade",
    "Material UI", "Ansible", "Solidity", "Flask", "Django", "Web3"
  ];

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

  const skillCardStyles = {
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(75, 85, 99, 0.3)',
    borderRadius: 2,
    p: 4,
    height: '100%',
  };


  const chipStyles = {
    backgroundColor: '#1f2937',
    color: '#d1d5db',
    border: '1px solid rgba(75, 85, 99, 0.3)',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    m: 0.5,
    '&:hover': {
      borderColor: '#3b82f6',
      color: '#ffffff',
      transform: 'scale(1.05)',
    },
  };

  return (
    <Box id="skills" sx={sectionStyles}>
      <Container maxWidth="lg">
        <Box>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ color: theme.palette.text.primary, mb: 3 }}>
              Skills & <Box component="span" sx={gradientTextStyles}>Technologies</Box>
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
              A comprehensive toolkit for building modern, scalable applications
            </Typography>
          </Box>

          {/* <Grid container spacing={4} sx={{ mb: 8 }}>
            {skillCategories.map((category, categoryIndex) => (
              <Grid item xs={12} md={4} key={categoryIndex}>
                <Card sx={skillCardStyles}>
                  <CardContent>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: 'white', 
                        mb: 3, 
                        textAlign: 'center',
                        fontWeight: 700 
                      }}
                    >
                      {category.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {category.skills.map((skill, skillIndex) => (
                        <Box key={skillIndex}>
                          <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center', 
                            mb: 1 
                          }}>
                            <Typography sx={{ color: '#d1d5db', fontWeight: 500 }}>
                              {skill.name}
                            </Typography>
                            <Typography sx={{ color: '#60a5fa', fontSize: '0.875rem' }}>
                              {skill.level}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 8,
                              borderRadius: '9999px',
                              backgroundColor: '#374151',
                              '& .MuiLinearProgress-bar': {
                                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                                borderRadius: '9999px',
                              },
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid> */}

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ color: 'white', mb: 4, fontWeight: 700 }}>
              Technologies I Work With
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: 1,
              maxWidth: '800px',
              mx: 'auto'
            }}>
              {technologies.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  sx={chipStyles}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;