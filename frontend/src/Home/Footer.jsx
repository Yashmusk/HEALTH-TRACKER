import React from 'react';
import {
  Box, Typography, Grid, Link, IconButton, TextField, Button, Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);
const MotionLink = motion(Link);
const MotionIconButton = motion(IconButton);

function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <MotionBox
      ref={ref}
      component="footer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      sx={{
        width: '100%', // ensures full width
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        color: 'white',
        mt: 'auto',
        py: 6,
        px: { xs: 3, sm: 8 },
        borderTopLeftRadius: '32px',
        borderTopRightRadius: '32px',
        boxShadow: '0px -3px 12px rgba(0,0,0,0.3)',
      }}
    >
      <Grid container spacing={6}>
        {/* About */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            About Us
          </Typography>
          <Typography variant="body2" color="grey.300">
            We build beautiful, responsive web apps with React, MUI, and Motion.
            Our goal is to simplify frontend experiences for modern developers.
          </Typography>
        </Grid>

        {/* Links */}
        <Grid item xs={6} sm={4} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
            Explore
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {['Home', 'Pricing', 'Services', 'Contact'].map((text) => (
              <MotionLink
                key={text}
                href="#"
                underline="none"
                whileHover={{ x: 6, color: '#ffd700' }}
                transition={{ type: 'spring', stiffness: 300 }}
                sx={{
                  color: 'grey.300',
                  fontSize: '0.95rem',
                  fontWeight: 400,
                  cursor: 'pointer',
                }}
              >
                {text}
              </MotionLink>
            ))}
          </Box>
        </Grid>

        {/* Newsletter */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
            Newsletter
          </Typography>
          <Typography variant="body2" color="grey.300">
            Subscribe for the latest updates & design trends:
          </Typography>
          <Box
            component="form"
            sx={{
              mt: 2,
              display: 'flex',
              gap: 1,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <TextField
              size="small"
              placeholder="Your Email"
              variant="filled"
              sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                flex: 1,
                input: { padding: '10px 12px' },
              }}
            />
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #ffcc33, #ff9900)',
                color: '#000',
                fontWeight: 600,
                borderRadius: '16px',
                px: 3,
                '&:hover': {
                  background: 'linear-gradient(45deg, #ffb300, #ff6f00)',
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>

        {/* Socials */}
        <Grid item xs={12} sm={4} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
            Connect
          </Typography>
          <Box>
            {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon].map((Icon, i) => (
              <MotionIconButton
                key={i}
                whileHover={{ scale: 1.3, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                href="#"
                sx={{ color: 'grey.100', mr: 1 }}
              >
                <Icon />
              </MotionIconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

      <Typography variant="body2" align="center" sx={{ color: 'grey.400' }}>
        © {new Date().getFullYear()} MyReactSite. All rights reserved.
      </Typography>
    </MotionBox>
  );
}

export default Footer;
