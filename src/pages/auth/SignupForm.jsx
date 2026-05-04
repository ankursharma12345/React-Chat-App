import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import InputFieldWrapper from "../../features/InputFieldWrapper";
import PasswordFieldWrapper from "../../features/PasswordFieldWrapper";

const SignupForm = (props) => {

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Form Submitted");
    // };

    const handleValidate = () => {
        props?.handlePreSubmit();
    }

    return (
        <Grid
            container
            sx={{
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5"
            }}
        >
            <Grid size sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Paper
                    elevation={5}
                    sx={{
                        padding: "2rem",
                        borderRadius: "12px"
                    }}
                >
                    {/* ✅ FORM ADDED HERE */}
                    <form>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "320px" }}>

                            <Typography variant="h5" fontWeight="bold">
                                Create Account
                            </Typography>

                            {/* Name */}
                            <Box>
                                <Typography>Name</Typography>
                                <InputFieldWrapper
                                    autoFocus={true}
                                    id="Name"
                                    value={props.formData["Name"] ?? ""}
                                    onChange={props?.updateFieldValue}
                                    error={props?.error?.["Name"] ? true : false}
                                    helperText={props?.error?.["Name"]}
                                />
                            </Box>

                            {/* Password */}
                            <Box>
                                <Typography>Password</Typography>
                                <PasswordFieldWrapper
                                    id="Password"
                                    value={props.formData["Password"] ?? ""}
                                    onChange={props?.updateFieldValue}
                                    error={props?.error?.["Password"] ? true : false}
                                    helperText={props?.error?.["Password"]}
                                />
                            </Box>

                            {/* Confirm Password */}
                            <Box>
                                <Typography>Confirm Password</Typography>
                                <PasswordFieldWrapper
                                    id="confirmPassword"
                                    value={props.formData["confirmPassword"] ?? ""}
                                    onChange={props?.updateFieldValue}
                                    error={props?.error?.["confirmPassword"] ? true : false}
                                    helperText={props?.error?.["confirmPassword"]}
                                />
                            </Box>

                            <Button variant="contained" onClick={handleValidate}>Sign Up</Button>

                        </Box>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default SignupForm;