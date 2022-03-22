import {
  ArrowForwardIos,
  ArrowForwardIosOutlined,
  BadgeOutlined,
  CardGiftcardOutlined,
  CastForEducationOutlined,
  CodeOutlined,
  EmojiEmotionsOutlined,
  Mood,
  TagFaces,
  HomeOutlined,
  MoneyOutlined,
  PropaneTankOutlined,
  ShoppingBagSharp,
  SportsOutlined,
  ThumbUpOffAlt,
  FacebookOutlined,
  Google,
  Twitter,
} from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  Button,
  Container,
  Grid,
  Typography,
  IconButton,
  ImageList,
  ImageListItem,
  Hidden,
} from "@mui/material";
import React from "react";
import _Banner from "../components/Banner";
import _NavBar from "../components/NavBar";
import _IconCard from "../components/Cards/iconCard";
import Img from "../assets/images/good_man.jpg";
import _SimpleCard from "../components/Cards/SimpleCard";
import { blue, orange, red } from "@mui/material/colors";
import { Box } from "@mui/system";
import img1 from "../assets/images/asian.jpg";
import img2 from "../assets/images/good_man.jpg";
import img3 from "../assets/images/kids.jpg";
import img4 from "../assets/images/asian.jpg";
import img5 from "../assets/images/water.webp";
import img6 from "../assets/images/girls.jpg";
import img7 from "../assets/images/poor_kid.jpg";
import img8 from "../assets/images/food.jpg";
import img9 from "../assets/images/package.jpg";
import img10 from "../assets/images/job.webp";

export default function HomePage() {
  const itemData = [
    {
      img: img1,
      id: Math.random() * 1000,
    },
    { img: img2, id: Math.random() * 1000 },
    { img: img3, id: Math.random() * 1000 },
    { img: img4, id: Math.random() * 1000 },
    { img: img5, id: Math.random() * 1000 },
    { img: img6, id: Math.random() * 1000 },
    { img: img7, id: Math.random() * 1000 },
    { img: img8, id: Math.random() * 1000 },
    { img: img9, id: Math.random() * 1000 },
    { img: img10, id: Math.random() * 1000 },
  ];
  return (
    <div>
      <_NavBar />
      <_Banner />
      <Container className="container" id="about">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <_IconCard
              icon={
                <EmojiEmotionsOutlined
                  color="secondary"
                  sx={{ fontSize: 30 }}
                />
              }
              title={"Instill Happiness"}
              content={
                "Making the poor happy is our ultimate goal as an organization no wonder we are loved so much. "
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <_IconCard
              icon={<ThumbUpOffAlt color="secondary" sx={{ fontSize: 30 }} />}
              title={"Hope & Confident"}
              content={
                "We help instill hope and a brighter future for the poor and helpless people"
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <_IconCard
              icon={<HomeOutlined color="secondary" sx={{ fontSize: 30 }} />}
              title={"Shelter"}
              content={
                "We help the homeless with new homes, which gives them great joy and a bunch of hopes "
              }
            />
          </Grid>
        </Grid>
      </Container>
      <div className={"container--2"}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <header>
              <Typography
                className="header--p"
                variant="body2"
                color="secondary"
              >
                About Us
              </Typography>
              <Typography className={"header--h3"} variant="h3">
                Shawn Edmonson Charity Foundation
              </Typography>
            </header>
            <Typography className="content" variant="body1">
              Our main objective is to archieve the primary objectives of
              philanthropy and social well-being in, Education, Religion,
              Shelter & other activities serving the public interest.
            </Typography>
            <Typography className="content" variant="body1">
              Our organization is concerned with the sole aim of making huge
              impact in lifes of people of different races and tribes. We love
              to help because some of us have been through this unseen hell
              destroying the life of many individuals
            </Typography>
            <Button
              endIcon={<ArrowForwardIosOutlined />}
              size="large"
              variant="outlined"
              color="secondary"
              sx={{ mt: 2 }}
            >
              Continue
            </Button>
          </Grid>
          <Grid item xs={12} md={7}>
            <img src={Img} className="img" />
          </Grid>
        </Grid>
      </div>
      <Container id="dreams" className="container responsive-m">
        <Grid
          container
          justifyContent={"space-between"}
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} md={5}>
            <header>
              <Typography>
                Our <span style={{ color: orange[600] }}>Dreams</span>
              </Typography>
              <Typography className={"header--h3 responsive-h3"} variant="h3">
                See All Our Beautiful{" "}
                <span style={{ color: orange[600] }}>Dreams...</span>
              </Typography>
            </header>
            <Typography
              sx={{ maxWidth: 500, mt: 5, fontSize: 16 }}
              variant="body1"
            >
              For the Past years will have devoted to solve hard and complicated
              problems that people are facing and are getting hard time solving{" "}
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 1, color: "#fff" }}
              size="large"
              color="secondary"
              disableElevation
              endIcon={<ArrowForwardIos />}
            >
              Donate Now
            </Button>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <_SimpleCard
                  title={"Funding"}
                  icon={<MoneyOutlined sx={{ fontSize: 30 }} />}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <_SimpleCard
                  title={"Water Supply"}
                  icon={<PropaneTankOutlined sx={{ fontSize: 30 }} />}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <_SimpleCard
                  title={"Education"}
                  icon={<CastForEducationOutlined sx={{ fontSize: 30 }} />}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <_SimpleCard
                  title={"Employment"}
                  icon={<BadgeOutlined sx={{ fontSize: 30 }} />}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <_SimpleCard
                  title={"IT Training"}
                  icon={<CodeOutlined sx={{ fontSize: 30 }} />}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <_SimpleCard
                  title={"Give Away's"}
                  icon={<CardGiftcardOutlined sx={{ fontSize: 30 }} />}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <_SimpleCard
                  title={"Sport Activities"}
                  icon={<SportsOutlined sx={{ fontSize: 30 }} />}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <_SimpleCard
                  title={"Clothing"}
                  icon={<ShoppingBagSharp sx={{ fontSize: 30 }} />}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box className="hero-center">
        <Grid
          id="gallery"
          container
          justifyContent="center"
          alignItems="center"
        >
          <header>
            <Typography
              sx={{ textAlign: "center" }}
              className={"header--h3 responsive-h3"}
              variant="h3"
            >
              Let's Come Together{" "}
              <span style={{ color: orange[600] }}>As One !</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#fff",
                width: "80%",
                textAlign: "center",
                paddingTop: 1,
              }}
            >
              The stronger we are the better we archieve the situations that
              seems impossible.
            </Typography>
            <center>
              <IconButton>
                <EmojiEmotionsOutlined sx={{ color: "#fff", fontSize: 50 }} />
              </IconButton>
              <IconButton>
                <Mood color={"secondary"} sx={{ fontSize: 50 }} />
              </IconButton>
              <IconButton>
                <TagFaces color="primary" sx={{ fontSize: 50 }} />
              </IconButton>
            </center>
          </header>
        </Grid>
      </Box>

      <Container className="container responsive-m">
        <Grid container spacing={2} justifyContent="center">
          <header>
            <Typography
              sx={{ textAlign: "center", m: 6 }}
              className={"header--h3 responsive-h3"}
              variant="h3"
            >
              Let's Come Together{" "}
              <span style={{ color: orange[600] }}>As One !</span>
            </Typography>
          </header>
          <Hidden smDown>
            <ImageList variant="masonry" cols={3} gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Hidden>
          <Hidden smUp>
            {itemData.map((item) => (
              <Grid item xs={12}>
                <LazyLoadImage
                  effect="blur"
                  src={item.img}
                  className={"gallery"}
                />
              </Grid>
            ))}
          </Hidden>
        </Grid>
      </Container>

      <Box sx={{ width: "100%", background: "#111", pt: 10, pb: 10 }}>
        <Grid container justifyContent={"center"} spacing={2}>
          <header>
            <Typography
              sx={{ textAlign: "center" }}
              className={"header--h3 responsive-h3"}
              variant="h3"
            >
              Get In Touch With Us{" "}
              <span style={{ color: orange[600] }}>Today On!</span>
            </Typography>
            <center>
              <IconButton>
                <FacebookOutlined sx={{ color: blue[400], fontSize: 50 }} />
              </IconButton>
              <IconButton>
                <Google sx={{ fontSize: 50, color: red[500] }} />
              </IconButton>
              <IconButton>
                <Twitter color="primary" sx={{ fontSize: 50 }} />
              </IconButton>
            </center>
          </header>
        </Grid>
      </Box>
      <footer style={{ width: "100%", background: "#111", pt: 10, pb: 10 }}>
        <Typography variant="body1" sx={{ textAlign: "center", p: 3 }}>
          All right reserved.2022 &copy; Basitng
        </Typography>
      </footer>
    </div>
  );
}
