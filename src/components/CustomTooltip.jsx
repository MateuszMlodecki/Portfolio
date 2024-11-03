import React from "react";
import { Tooltip, Zoom, styled } from "@mui/material";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    TransitionComponent={Zoom}
  />
))({
  "& .MuiTooltip-tooltip": {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "1rem",
    borderRadius: "10px",
  },
});

export default CustomTooltip;
