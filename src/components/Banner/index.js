import { EmojiEmotions } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function _Banner() {
  const banner = useRef();
  useEffect(() => {
    gsap.to(banner.current, { rotation: "+=360", ease: "bounce" });
  });
  return (
    <Grid container spacing={2} className="Banner" id="home">
      <Grid item xs={12} md={6} className="banner--caption">
        <Typography
          className="banner-h2"
          variant="h2"
          sx={{ color: "#FFF !important" }}
          ref={banner}
        >
          Donate To Help The <span>Poor & Helpless</span>
        </Typography>
        <Typography className="banner-p" sx={{ color: "#eee !important" }}>
          Help thousands of homeless, orphans and jobless people to re-gain
          their happiness, while putting smiles on their faces{" "}
        </Typography>

        <Button
          endIcon={<EmojiEmotions />}
          variant="contained"
          color="secondary"
          size="large"
          sx={{ marginTop: 2 }}
          component={Link}
          to="/donate"
        >
          Donate Now
        </Button>
      </Grid>
    </Grid>
  );
}
