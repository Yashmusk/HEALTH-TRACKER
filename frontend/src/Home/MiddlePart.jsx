import React from 'react';
import { motion } from 'framer-motion';

const boxVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.6, type: 'spring' },
  }),
};

const MiddlePart = () => {
  return (
    <>
      {/* Fullscreen Background GIF Section */}
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHE3eTA5bjd1M2c3cGxjOWJsNmYyOWJzdzQwNGZxeDZ2ejE3Y3l0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TqRkzHMGKQ7mg/giphy.gif"
          alt="Background GIF"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            paddingTop: '80px', // offset for header
            textAlign: 'center',
            color: 'white',
          }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
            YOU GOTTA KEEP FIGHTIN’
          </h1>
        </div>
      </div>

      {/* Animated Boxes Section */}
      <div
        style={{
          padding: '4rem 2rem',
           display: 'flex',
    justifyContent: 'space-between',
          flexDirection: 'row',
          gap: '2rem',
          alignItems: 'center',
          background: 'linear-gradient(145deg, #151825, #1f1f2e)',

        }}
      >
        {[0, 1].map((index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={boxVariants}
            style={{
              width: '45%',
              minWidth: '280px',
              height: '150px',
               background: 'linear-gradient(-45deg, #ff9a9e, #fad0c4, #fbc2eb, #a6c1ee)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 8s ease infinite',
    borderRadius: '16px',
    boxShadow: '0 12px 40px rgba(255,255,255,0.08)',
    backdropFilter: 'blur(6px)',
    border: '1px solid rgba(255,255,255,0.2)',
    transition: 'all 0.5s ease-in-out',

              
            }}
          />
        ))}
      </div>
    </>
  );
};

export default MiddlePart;
