import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Grid,
  Hidden,
  Typography,
} from "@mui/material";
import { green, orange } from "@mui/material/colors";
import {
  MessageOutlined,
  PersonAddOutlined,
  MoneyOutlined,
  ArrowForwardIosOutlined,
  EmailOutlined,
} from "@mui/icons-material";
import { usePaystackPayment } from "react-paystack";
import { useNavigate } from "react-router-dom";

export default function DonatePage() {
  const [values, setValues] = React.useState({
    name: "",
    amt: "",
    message: "",
    email: "",
  });
  const config = {
    reference: new Date().getTime().toString(),
    publicKey: "pk_test_08ad0a44541e185a197e01703b54581e95f973f6",
    email: values.email,
    amount: values.amt * 100,
    name: values.name,
    message: values.message,
  };

  const initializePayment = usePaystackPayment(config);
  const [Submitted, setSubmitted] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const location = useNavigate();
  const onSuccess = (e) => {
    console.log(">", e);
    setSubmitted(true);
    setSuccess(true);
    setValues({
      email: "",
      amt: "",
      name: "",
      message: "",
    });
    setTimeout(() => {
      location("/");
      setSuccess(false);
      setSubmitted(false);
    }, 1000);
  };
  const onClose = () => {
    console.log(">", "Closed");
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    initializePayment(onSuccess, onClose);
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <Grid
      container
      className="donation--container"
      spacing={2}
      justifyContent="space-between"
      alignItems={"center"}
    >
      {Submitted && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress size={50} color="secondary" />
        </Backdrop>
      )}

      <Grid item xs={12} md={6}>
        <Grid container spacing={2} sx={{ p: 2 }} className="form">
          <header style={{ width: "70%", paddingLeft: "2rem" }}>
            <Typography>Hi Dear</Typography>
            <Typography className={"header--h3 responsive-h3"} variant="h3">
              Donate To{" "}
              <span style={{ color: orange[600] }}>Shawn Foundation Today</span>
            </Typography>
          </header>
          <Grid item xs={12} md={6}>
            <TextField
              label="Name"
              required
              id="outlined-start-adornment"
              fullWidth
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonAddOutlined />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email Address"
              required
              type="email"
              id="outlined-start-adornment"
              fullWidth
              value={values.email}
              helperText="This is for safe donation"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Amount To Donate"
              required
              id="outlined-start-adornment"
              fullWidth
              value={values.amt}
              type="number"
              onChange={(e) => setValues({ ...values, amt: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MoneyOutlined />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Message"
              required
              id="outlined-start-adornment"
              fullWidth
              value={values.message}
              multiline
              type="text"
              onChange={(e) =>
                setValues({ ...values, message: e.target.value })
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MessageOutlined />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ color: "#fff" }}
              endIcon={<ArrowForwardIosOutlined />}
              onClick={handleSubmit}
            >
              Donate
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid item className="donation--container-banner" xs={12} md={6}></Grid>
      </Hidden>
    </Grid>
  );
}
