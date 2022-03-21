import { Card, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";

export default function _SimpleCard({ icon, title }) {
  return (
    <Card elevation={0} sx={{ textAlign: "center" }}>
      <CardContent>
        <IconButton>{icon}</IconButton>
        <Typography
          variant="h6"
          sx={{ fontSize: 15, fontWeight: 600, color: "#555" }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
