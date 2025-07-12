import React from "react";
import { motion } from "framer-motion";

const boxVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.6, type: "spring" },
  }),
};

const MiddlePart = () => {
  return (
    <>
      {/* Fullscreen Background GIF Section */}
      <div
        style={{
          width: "100%",
          maxWidth: "100vw",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHE3eTA5bjd1M2c3cGxjOWJsNmYyOWJzdzQwNGZxeDZ2ejE3Y3l0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TqRkzHMGKQ7mg/giphy.gif"
          alt="Background GIF"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            maxWidth: "100vw",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: "80px",
            paddingInline: "1rem",
            textAlign: "center",
            color: "white",
            maxWidth: "100vw",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "1rem",
            }}
          >
            PUSH UP YOUR LIMITS
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{
              fontSize: "clamp(1rem, 3vw, 1.3rem)",
              fontWeight: "bold",
              lineHeight: 1.5,
            }}
          >
            Whether you're staying on track or chasing a new goal, we're here to
            fuel your serious progress.
          </motion.h1>
        </motion.div>
      </div>

      {/* Animated Boxes Section */}
      <div
        style={{
          padding: "4rem 1rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          background: "linear-gradient(145deg, #151825, #1f1f2e)",
          overflowX: "hidden",
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
              flex: "1 1 300px",
              maxWidth: "400px",
              height: "350px",
              background:
                "linear-gradient(-45deg, #ff9a9e, #fad0c4, #fbc2eb, #a6c1ee)",
              backgroundSize: "400% 400%",
              animation: "gradientShift 8s ease infinite",
              borderRadius: "16px",
              boxShadow: "0 12px 40px rgba(255,255,255,0.08)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.5s ease-in-out",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default MiddlePart;
