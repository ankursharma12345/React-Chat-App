import { Box, Grid, Paper, Typography } from "@mui/material";
import InputFieldWrapper from "../../features/InputFieldWrapper";

const SignupForm = (props) => {
    return (
        <Grid
            container
            sx={{
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
            }}
        >
            <Grid size xs={11} sm={6} md={12}>
                <Paper
                    elevation={5}
                    sx={{
                        padding: "2rem",
                        borderRadius: "12px",
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "320px" }}>

                        <Typography variant="h5" textAlign="center" fontWeight="bold">
                            Create Account
                        </Typography>

                        {/* Name */}
                        <Box>
                            <Typography variant="body2">Name</Typography>
                            <InputFieldWrapper
                                id="Name"
                                value={props["Name"] ?? ""}
                                fullWidth
                            />
                        </Box>

                        {/* Password */}
                        <Box>
                            <Typography variant="body2">Password</Typography>
                            <InputFieldWrapper
                                id="Password"
                                value={props["Password"] ?? ""}
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <Typography variant="body2">Confirm Password</Typography>
                            <InputFieldWrapper
                                id="confirmPassword"
                                value={props["confirmPassword"] ?? ""}
                                fullWidth
                            />
                        </Box>

                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default SignupForm;