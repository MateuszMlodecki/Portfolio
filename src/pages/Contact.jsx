import { Grid2 as Grid, Typography, Link, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
          paddingBottom: "40px",
        }}
      >
        Skontaktuj się ze mną:
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction={{ xs: "column", sm: "row" }}
        gap="10px"
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          minWidth="220px"
          marginY="auto"
        >
          <Link href="tel:+48790277760" underline="none" color="black">
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
          </Link>

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
          marginY="auto"
        >
          <Link
            href="mailto:mateuszmlodecki@icloud.com"
            underline="none"
            color="black"
            target="_blank"
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
          </Link>
          <Typography>E-mail</Typography>
          <Typography
            href="mailto:mateuszmlodecki@icloud.com"
            underline="none"
            color="black"
            target="_blank"
          >
            mateuszmlodecki@icloud.com
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          minWidth="220px"
          marginY="auto"
        >
          <Link
            href="https://www.linkedin.com/in/mateusz-m%C5%82odecki-621104328/"
            underline="none"
            color="black"
            target="_blank"
          >
            <LinkedInIcon
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
            <Typography>LinkedIn</Typography>
          </Link>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          minWidth="220px"
          marginY="auto"
        >
          <Link
            href="https://wa.me/qr/YUFDAGMVQ6GMD1"
            underline="none"
            color="black"
            target="_blank"
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
          </Link>
        </Grid>
      </Grid>
      <Box sx={{ paddingBottom: { xs: "140px", md: 0 } }} />
    </Box>
  );
};
