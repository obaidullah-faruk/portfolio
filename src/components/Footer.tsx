import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme()
  const footerStyles = {
    backgroundColor: '#030712',
    py: 2,
    borderTop: '1px solid rgba(75, 85, 99, 0.3)',
  };


  return (
    <Box sx={footerStyles}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: theme.palette.text.primary, fontSize: '0.875rem' }}>
            © Obaidullah Al-Faruk - {(new Date().getFullYear())}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;