import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Box, IconButton, Drawer,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  useMediaQuery, useTheme
} from '@mui/material';
import {
  Menu as MenuIcon, Close as CloseIcon, Home, Person, Code,
  Work, Email, ArticleOutlined
} from '@mui/icons-material';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Person, label: 'About', href: '#about' },
    { icon: Code, label: 'Skills', href: '#skills' },
    { icon: ArticleOutlined, label: 'Articles', href: '#articles' },
    { icon: Work, label: 'Projects', href: '#projects' },
    { icon: Email, label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScrollY = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScrollY);
    return () => window.removeEventListener('scroll', handleScrollY);
  }, []);

  useEffect(() => {
    const ids = menuItems.map(m => m.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-25% 0px -65% 0px',
        threshold: 0.01,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(href); // optimistic highlight
    setIsMenuOpen(false);
  };

  const headerStyles = {
    backgroundColor: scrolled ? 'rgba(17, 24, 39, 0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(8px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(75, 85, 99, 0.3)' : 'none',
    transition: 'all 0.3s ease',
  };

  const logoStyles = {
    background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontSize: '1.5rem',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  };

  const baseMenuButtonStyles = {
    color: theme.palette.text.primary,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    position: 'relative' as const,
    '&:hover': {
      color: theme.palette.text.primary,
      transform: 'scale(1.05)',
    },
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={headerStyles}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={logoStyles}>
            <img src="/logo.svg" alt="logo" height="35" width="35" />
            Obaidullah
          </Typography>

          {!isMobile ? (
            <Box sx={{ display: 'flex', gap: 4 }}>
              {menuItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <Box
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    sx={{
                      ...baseMenuButtonStyles,
                      color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        bottom: -6,
                        height: 2,
                        width: isActive ? '100%' : 0,
                        background: theme.palette.primary.main,
                        transition: 'width .2s ease',
                        borderRadius: 2,
                      },
                    }}
                  >
                    <item.icon sx={{ fontSize: 30 }} />
                    <Typography variant="body2">{item.label}</Typography>
                  </Box>
                );
              })}
            </Box>
          ) : (
            <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)} sx={{ color: 'white' }}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        PaperProps={{
          sx: { backgroundColor: '#1f2937', width: 250 },
        }}
      >
        <List sx={{ pt: 4 }}>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                selected={activeSection === item.href}
                onClick={() => scrollToSection(item.href)}
                sx={{
                  color: '#d1d5db',
                  '&:hover': {
                    color: '#ffffff',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  },
                  '&.Mui-selected': {
                    color: '#ffffff',
                    backgroundColor: 'rgba(59, 130, 246, 0.18)',
                  },
                  '&.Mui-selected .MuiListItemIcon-root': {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;