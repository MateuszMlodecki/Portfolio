import {
  Grid2 as Grid,
  Typography,
  Link,
  Box,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const ContactItem = ({ href, icon: Icon, label, info }) => (
  <Grid
    container
    justifyContent="center"
    alignItems="center"
    direction="column"
    minWidth="220px"
    marginTop="30px"
  >
    <Link href={href} underline="none" color="black" target="_blank">
      <IconButton
        sx={{
          color: "#f2f2f2",
          backgroundColor: "#1E2D24",
          "&:hover": { backgroundColor: "#3c4a40" },
          borderRadius: "20%",
          padding: "10px",
          fontSize: "50px",
        }}
      >
        <Icon fontSize="large" />
      </IconButton>
    </Link>
    <Typography>{label}</Typography>
    {info && (
      <Link href={href} underline="none" color="black">
        {info}
      </Link>
    )}
  </Grid>
);

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
        alignItems={{ xs: "center", sm: "flex-start" }}
        direction={{ xs: "column", sm: "row" }}
        gap="10px"
      >
        <ContactItem
          href="tel:+48790277760"
          icon={PhoneIphoneIcon}
          label="Telefon"
          info="+48 790 277 760"
        />
        <ContactItem
          href="mailto:mateuszmlodecki@icloud.com"
          icon={EmailIcon}
          label="E-mail"
          info="mateuszmlodecki@icloud.com"
        />
        <ContactItem
          href="https://www.linkedin.com/in/mateusz-m%C5%82odecki-621104328/"
          icon={LinkedInIcon}
          label="LinkedIn"
        />
        <ContactItem
          href="https://wa.me/qr/YUFDAGMVQ6GMD1"
          icon={WhatsAppIcon}
          label="WhatsApp"
        />
      </Grid>
      <Box sx={{ paddingBottom: { xs: "140px", md: 0 } }} />
    </Box>
  );
};
