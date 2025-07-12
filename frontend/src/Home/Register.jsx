import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Paper,
} from "@mui/material";

const steps = ["Personal Info", "Account Info", "Review & Submit"];

const Register = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    goal: "",
    workoutFrequency: "",
    currentWeight: "",
    targetWeight: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < steps.length - 1) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    console.log("Form Submitted:", formData);
    alert("Registration Successful!");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper sx={{ p: 4, width: "100%", maxWidth: "600px" }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Multi-Step Registration
        </Typography>

        <Stepper activeStep={step} sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            const ageNum = parseInt(formData.age);
            if (ageNum < 12 || ageNum > 65) {
              alert("Age must be between 12 and 65.");
              return;
            }

            // ✅ Validate password
            const password = formData.password;
            const confirmPassword = formData.confirmPassword;

            // At least 8 chars, one special character, one number
            const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;

            if (step == 1) {
              if (!passwordRegex.test(password)) {
                alert(
                  "Password must be at least 8 characters long and include at least one special character and one number."
                );
                return;
              }

              if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
              }
            }

            if (step === 2) {
              handleSubmit(e);
            } else {
              handleNext();
            }
          }}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {/* Step 1: Personal Info */}
          {step === 0 && (
            <>
              <TextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <TextField
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                required
              />
              <TextField
                select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </>
          )}

          {/* Step 2: Account Info */}
          {step === 1 && (
            <>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <TextField
                select
                label="Your Goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="muscle gain">Muscle Gain</MenuItem>
                <MenuItem value="fat loss">Fat Loss</MenuItem>
                <MenuItem value="lean gain">Lean Gain</MenuItem>
              </TextField>

              <TextField
                label="Workout Frequency (days/week)"
                name="workoutFrequency"
                type="number"
                value={formData.workoutFrequency}
                onChange={handleChange}
                required
              />

              <TextField
                label="Current Weight (kg)"
                name="currentWeight"
                type="number"
                value={formData.currentWeight}
                onChange={handleChange}
                required
              />

              <TextField
                label="Target Weight (kg)"
                name="targetWeight"
                type="number"
                value={formData.targetWeight}
                onChange={handleChange}
                required
              />
            </>
          )}

          {/* Step 3: Review & Submit */}
          {step === 2 && (
            <>
              <Typography variant="subtitle1">
                <strong>Full Name:</strong> {formData.fullName}
              </Typography>
              <Typography variant="subtitle1">
                <strong>Age:</strong> {formData.age}
              </Typography>
              <Typography variant="subtitle1">
                <strong>Gender:</strong> {formData.gender}
              </Typography>
              <Typography variant="subtitle1">
                <strong>Email:</strong> {formData.email}
              </Typography>
              <Typography variant="subtitle1">
                <strong>Goal:</strong> {formData.goal}
              </Typography>
              <Typography variant="subtitle1">
                <strong>Workout Frequency:</strong> {formData.workoutFrequency}{" "}
                days/week
              </Typography>
              <Typography variant="subtitle1">
                <strong>Current Weight:</strong> {formData.currentWeight} kg
              </Typography>
              <Typography variant="subtitle1">
                <strong>Target Weight:</strong> {formData.targetWeight} kg
              </Typography>
            </>
          )}

          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
            <Button disabled={step === 0} onClick={handleBack}>
              Back
            </Button>
            {step === steps.length - 1 ? (
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            ) : (
              <Button type="submit" variant="contained">
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
