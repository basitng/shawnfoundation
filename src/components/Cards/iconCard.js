import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { green, yellow } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

export default function _IconCard({ icon, title, content }) {
  return (
    <Card sx={{ textAlign: "center", height: "12rem" }} elevation={0}>
      <CardContent>
        <center>
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: yellow[200],
              display: "grid",
              placeContent: "center",
              mb: 4,
            }}
          >
            <IconButton size="large">{icon}</IconButton>
          </Box>
        </center>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
  );
}
