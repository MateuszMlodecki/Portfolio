import { Grid2 as Grid, Typography, Link, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";

export const Contact = () => {
  return (
    <Box sx={{ bgcolor: "#DDDDDD", minHeight: "100vh" }}>
      <Typography
        sx={{
          textAlign: "center",
          paddingTop: "120px",
          fontFamily: "Josephine Sans",
          fontSize: "32px",
        }}
      >
        Skontaktuj się ze mną:
      </Typography>
      <Grid
        marginLeft="50px"
        marginRight="50px"
        container
        justifyContent="center"
        alignItems="center"
        direction={{ xs: "column", sm: "row" }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          minWidth="220px"
        >
          <PhoneIphoneIcon
            sx={{
              borderRadius: "20%",
              padding: "10px",
              margin: "10px",
              display: "inline-block",
              color: "#f2f2f2",
              fontSize: "50px",
              background: "#1E2D24",
            }}
          />

          <Typography>Telefon</Typography>
          <Link href="tel:+48790277760" underline="none" color="black">
            +48 790 277 760
          </Link>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          minWidth="220px"
        >
          <EmailIcon
            sx={{
              color: "#f2f2f2",
              borderRadius: "20%",
              margin: "10px",
              padding: "10px",
              display: "inline-block",
              fontSize: "50px",
              background: "#1E2D24",
            }}
          />
          <Typography>E-mail</Typography>
          <Link
            href="mailto:mateuszmlodecki@icloud.com"
            underline="none"
            color="black"
            target="_blank"
          >
            mateuszmlodecki@icloud.com
          </Link>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          minWidth="220px"
        >
          <WhatsAppIcon
            sx={{
              color: "#f2f2f2",
              borderRadius: "20%",
              margin: "10px",
              padding: "10px",
              display: "inline-block",
              fontSize: "50px",
              background: "#1E2D24",
            }}
          />
          <Typography>WhatsApp</Typography>
          <Link
            href="https://wa.me/qr/YUFDAGMVQ6GMD1"
            underline="none"
            color="black"
            target="_blank"
          >
            Link
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
