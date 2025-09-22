import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { Launch, GitHub, Close } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Projects = () => {
  const theme = useTheme()
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Education Gap Analyzer",
      description: "Using a new string matching algorithm for analyzing university curriculum with respect to current job circular.",
      image: "/uca.png",
      technologies: ["Django", "SQLite", "Jinja v2", "NLTK 3.2.5"],
      github: "https://github.com/obaidullah-faruk/Education-Gap-Analyzer",
      live: "#",
      longDescription: "A curriculum analyzer with respect to market demand of various departments. Finds the gap and suggest what to include in the curriculum",
      features: ["Curriculum analyzer", "Figure out lackings" ,"Admin Dashboard"]
    },
    {
      id: 2,
      title: "Scrape Otomoto Portal",
      description: "This is a web scraping app built with Node.js and Puppeteer to extract data from the Otomoto portal.",
      image: "/otomoto.png",
      technologies: ["Node js", "Puppeteer"],
      github: "https://github.com/obaidullah-faruk/scrape-otomoto-portal",
      live: "#",
      longDescription: "Scrape web data from otomoto portal and store in a excel file for data analysis",
      features: ["Iterate over pages", "Scrapes the actual ads and parses into the format: item id, title, price, registration date, production date, mileage, power", "Scrapes all pages, all ads", "Stores data in an excel file"]
    },
    {
      id: 3,
      title: "Futures Trading Bot",
      description: "A future trading bot for binance trading platform",
      image: "/bot.png",
      technologies: ["python3.11", "Freqtrade", "Hyperopt"],
      github: "https://github.com/obaidullah-faruk/freqtrade",
      live: "#",
      longDescription: "A trading bot run on a cloud server and detect proper setup for open a position. Maximum 3 positon at a time. Backtest showed 100% gain over 1 year",
      features: ["Open positions (long & short)", "Backtest" , "customized stoploss", "Customized partial profit booking"]
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

  const projectCardStyles = {
    backgroundColor: '#111827',
    border: '1px solid rgba(75, 85, 99, 0.3)',
    borderRadius: 1.5,
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'rgba(59, 130, 246, 0.5)',
      transform: 'scale(1.05)',
    },
  };

  const chipStyles = {
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    color: '#93c5fd',
    fontSize: '0.75rem',
    height: 24,
  };

  const iconButtonStyles = {
    color: '#9ca3af',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#ffffff',
    },
  };

  return (
    <Box id="projects" sx={sectionStyles}>
      <Container maxWidth="lg">
        <Box>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ color: theme.palette.text.primary, mb: 3 }}>
              Featured <Box component="span" sx={gradientTextStyles}>Projects</Box>
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
              A showcase of my work
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item size={{xs:12, md:6, lg:6}} key={project.id}>
                <Card 
                  sx={projectCardStyles}
                  onClick={() => setSelectedProject(project)}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="192"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(17, 24, 39, 0.8), transparent)',
                        opacity: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'opacity 0.3s ease',
                        '&:hover': {
                          opacity: 1,
                        },
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(8px)',
                          color: 'white',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                        }}
                      >
                        View Details
                      </Button>
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ p: 3, height: 'calc(100% - 192px)', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" sx={{ color: 'white', mb: 1.5, fontWeight: 700 }}>
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#d1d5db', 
                        mb: 2, 
                        lineHeight: 1.6,
                        fontSize: '0.875rem',
                        flex: 1
                      }}
                    >
                      {project.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Chip key={index} label={tech} sx={chipStyles} />
                      ))}
                      {project.technologies.length > 3 && (
                        <Typography sx={{ color: '#9ca3af', fontSize: '0.75rem', alignSelf: 'center' }}>
                          +{project.technologies.length - 3} more
                        </Typography>
                      )}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <IconButton 
                        href={project.github} 
                        sx={iconButtonStyles}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GitHub sx={{ fontSize: 18 }} />
                      </IconButton>
                      {/* <IconButton 
                        href={project.live} 
                        sx={iconButtonStyles}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Launch sx={{ fontSize: 18 }} />
                      </IconButton> */}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Project Modal */}
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: '#111827',
            color: 'white',
            maxHeight: '90vh',
          },
        }}
      >
        {selectedProject && (
          <>
            <Box sx={{ position: 'relative' }}>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                style={{ width: '100%', height: '256px', objectFit: 'cover' }}
              />
              <IconButton
                onClick={() => setSelectedProject(null)}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <Close />
              </IconButton>
            </Box>
            
            <DialogContent sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
                {selectedProject.title}
              </Typography>
              <Typography sx={{ color: '#d1d5db', mb: 3, lineHeight: 1.6 }}>
                {selectedProject.longDescription}
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ color: 'white', mb: 1.5, fontWeight: 600 }}>
                  Key Features
                </Typography>
                <List>
                  {selectedProject.features.map((feature: string, index: number) => (
                    <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          backgroundColor: '#3b82f6',
                          borderRadius: '50%',
                          mr: 1.5,
                        }}
                      />
                      <ListItemText 
                        primary={feature} 
                        primaryTypographyProps={{ 
                          sx: { color: '#d1d5db', fontSize: '0.875rem' } 
                        }} 
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ color: 'white', mb: 1.5, fontWeight: 600 }}>
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedProject.technologies.map((tech: string, index: number) => (
                    <Chip
                      key={index}
                      label={tech}
                      sx={{
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        color: '#93c5fd',
                        fontSize: '0.875rem',
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  href={selectedProject.github}
                  target='_blank'
                  startIcon={<GitHub />}
                  sx={{
                    backgroundColor: '#1f2937',
                    color: 'white',
                    px: 3,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: '#374151',
                    },
                  }}
                >
                  View Code
                </Button>
                {/* <Button
                  href={selectedProject.live}
                  startIcon={<Launch />}
                  sx={{
                    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                    color: 'white',
                    px: 3,
                    py: 1.5,
                    '&:hover': {
                      boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.25)',
                    },
                  }}
                >
                  Live Demo
                </Button> */}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;