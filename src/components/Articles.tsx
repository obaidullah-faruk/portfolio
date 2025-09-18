import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent,
  Button,
  Chip
} from '@mui/material';
import { Article, Launch, CalendarToday } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Articles = () => {
  const theme = useTheme()
  const articles = [
    {
      id: 1,
      title: "BFM: a forward backward string matching algorithm with improved shifting for information retrieval",
      description: "In this paper, we’re proposing a new algorithm named Back and Forth Matching (BFM) algorithm that works faster by matching a pattern from both the forward and backward direction.",
      date: "2019-10-31",
      readTime: "30 min read",
      tags: ["research", "journal", "string-matching"],
      link: "https://link.springer.com/article/10.1007/s41870-019-00371-1",
      featured: true
    },
    {
      id: 2,
      title: "Simplify the forward and reverse proxy with it's uses",
      description: "The two most used proxies which are forward proxy and reverse proxy clearly.",
      date: "2023-11-12",
      readTime: "6 min read",
      tags: ["Backend", "proxy"],
      link: "https://dev.to/obaidullahfaruk/simplify-the-forward-and-reverse-proxy-with-its-uses-4h5p",
      featured: false
    },
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

  const articleCardStyles = {
    backgroundColor: '#111827',
    border: '1px solid rgba(75, 85, 99, 0.3)',
    borderRadius: 1.5,
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      borderColor: 'rgba(59, 130, 246, 0.5)',
      transform: 'translateY(-4px)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  };

  const featuredCardStyles = {
    ...articleCardStyles,
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))',
    backdropFilter: 'blur(8px)',
  };

  const chipStyles = {
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    color: '#93c5fd',
    fontSize: '0.75rem',
    height: 24,
    mr: 1,
    mb: 1,
  };

  const readButtonStyles = {
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    color: 'white',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.25)',
    },
  };

  return (
    <Box id="articles" sx={sectionStyles}>
      <Container maxWidth="lg">
        <Box>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ color: theme.palette.text.primary, mb: 3 }}>
              Latest <Box component="span" sx={gradientTextStyles}>Articles</Box>
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
              Articles, tutorials, and thoughts on modern technologies
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {articles.map((article) => (
              <Grid item xs={12} md={6} lg={article.featured ? 12 : 4} key={article.id}>
                <Card sx={article.featured ? featuredCardStyles : articleCardStyles}>
                  <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {article.featured && (
                      <Chip 
                        label="Featured" 
                        sx={{ 
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          fontSize: '0.75rem',
                          mb: 2,
                          alignSelf: 'flex-start'
                        }} 
                      />
                    )}
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Article sx={{ color: '#60a5fa', fontSize: 20 }} />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: '#9ca3af', fontSize: '0.875rem' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <CalendarToday sx={{ fontSize: 16 }} />
                          <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                            {new Date(article.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                          {article.readTime}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography 
                      variant={article.featured ? "h4" : "h6"} 
                      sx={{ 
                        color: 'white', 
                        mb: 2, 
                        fontWeight: 700,
                        lineHeight: 1.3
                      }}
                    >
                      {article.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#d1d5db', 
                        mb: 3, 
                        lineHeight: 1.6,
                        flex: 1
                      }}
                    >
                      {article.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      {article.tags.map((tag, index) => (
                        <Chip key={index} label={tag} sx={chipStyles} />
                      ))}
                    </Box>

                    <Button
                      href={article.link}
                      target='_blank'
                      endIcon={<Launch />}
                      sx={readButtonStyles}
                      fullWidth={!article.featured}
                    >
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#3b82f6',
                color: '#3b82f6',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                '&:hover': {
                  borderColor: '#60a5fa',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  color: '#60a5fa',
                },
              }}
            >
              View All Articles
            </Button>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Articles;