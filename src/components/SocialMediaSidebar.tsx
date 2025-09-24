import { Box, IconButton, Tooltip } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Facebook } from '@mui/icons-material';

const SocialMediaSidebar = () => {
  const socialLinks = [
    {
      icon: <GitHub />,
      label: 'GitHub',
      url: 'https://github.com/obaidullah-faruk',
      color: '#333'
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/md-obaidullah-al-faruk-788b32a3/',
      color: '#0077b5'
    },
    {
      icon: <Twitter />,
      label: 'Twitter',
      url: 'https://x.com/AlFaruk75',
      color: '#1da1f2'
    },
    {
      icon: <Facebook />,
      label: 'Facebook',
      url: 'https://www.facebook.com/Obaidullah.alfaruk/',
      color: '#313bceff'
    },
    
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 20,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: { xs: 'none',md: 'flex'},
        flexDirection: 'column',
        gap: 2,
        '&::after': {
          content: '""',
        }
      }}
    >
      {socialLinks.map((social, index) => (
        <Tooltip key={index} title={social.label} placement="right">
          <IconButton
            component="a"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: 48,
              height: 48,
              // backgroundColor: 'rgba(55, 65, 81, 0.8)',
              color: '#9ca3af',
              border: '1px solid rgba(75, 85, 99, 0.5)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: social.color,
                color: 'white',
                transform: 'translateX(5px) scale(1.1)',
                boxShadow: `0 10px 25px ${social.color}40`,
                borderColor: social.color
              }
            }}
          >
            {social.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialMediaSidebar;