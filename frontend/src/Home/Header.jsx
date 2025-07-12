import React, { useState } from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography,
  Avatar, Button, Tooltip, MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MotionButton = motion(Button);
const pages = ['PRODUCTS', 'PRICING', 'BLOG'];
// const settings = [];

function Header({onAvatarClick}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        zIndex: 10,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo and Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src="https://static.vecteezy.com/system/resources/previews/042/119/339/non_2x/trendy-health-tracker-vector.jpg"
            alt="Health Tracker Logo"
            sx={{
              height: 40,
              width: 40,
              borderRadius: '50%',
              objectFit: 'cover',
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: 'white',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '.1rem',
            }}
          >
            HealthTrack
          </Typography>
        </Box>

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {pages.map((page) => (
            <MotionButton
              key={page}
              whileHover={{ scale: 1.1, color: '#ffeb3b' }}
              transition={{ type: 'spring', stiffness: 300 }}
              sx={{
                color: 'white',
                fontWeight: 700,
                textTransform: 'none',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              {page}
            </MotionButton>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton onClick={() => setMobileMenuOpen((prev) => !prev)} color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Avatar */}
        <Tooltip title="Login">
           <IconButton onClick={onAvatarClick} sx={{ p: 0 }}>
            <Avatar alt="User" src="https://i.pravatar.cc/300" />
          </IconButton>
        </Tooltip>

        {/* User Dropdown */}
        <AnimatePresence>
          {anchorElUser && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                top: 64,
                right: 16,
                backgroundColor: '#2c5364',
                color: 'white',
                borderRadius: 8,
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                zIndex: 1300,
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => setAnchorElUser(null)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
