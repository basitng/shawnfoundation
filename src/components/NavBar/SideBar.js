import * as React from "react";
import {
  Badge,
  Drawer,
  List,
  ListItem,
  Container,
  ListItemText,
  Backdrop,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { indigo, grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&$selected": {
      background: "#ffa726",
      width: "95%",
      borderTopRightRadius: "27rem",
      borderBottomRightRadius: "27rem",
    },
  },
  selected: {},
  sideBar: {
    minWidth: "70%",
    height: "100%",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  ul: {
    lineHeight: "2rem",
  },
  li: {
    marginBottom: theme.spacing(1),
    color: "#555",
    "&:hover": {
      background: "#ffa726",
      color: "#fff",
      width: "95%",
      borderTopRightRadius: "27rem",
      borderBottomRightRadius: "27rem",
    },
  },
  li2: {},
  divider: {
    margin: "10px 0px",
  },
}));
export default function _SideBar({ menuState, setMenuState }) {
  const [Open, setOpen] = React.useState(false);
  const classes = useStyles();
  const location = useLocation();

  const handleClose = () => {
    setOpen(false);
    setMenuState(false);
  };

  const CustomList = ({ to, primary, icon, badge }) => (
    <ListItem
      button
      selected={to === location.pathname}
      className={classes.li}
      onClick={handleClose}
      classes={{ root: classes.root, selected: classes.selected }}
    >
      <a href={to} style={{ textDecoration: "none", color: "#555" }}>
        <ListItemText primary={primary} />
      </a>
    </ListItem>
  );
  React.useEffect(() => {
    if (menuState) {
      setOpen(true);
    } else {
      setOpen(false);
      setMenuState(false);
    }
  }, [menuState]);
  return (
    <>
      <Drawer
        elevation={4}
        open={Open}
        classes={{
          paper: classes.sideBar,
        }}
        variant="temporary"
        hideBackdrop={false}
        onClose={handleClose}
      >
        <List className={classes.ul}>
          <CustomList to="/" primary="Home" />
          <CustomList to="#about" primary="About Us" />
          <CustomList to="#dreams" primary="Dreams" />
          <CustomList to="#gallery" primary="Gallery" />
          <CustomList to="/donate" primary="Donate" />
        </List>
      </Drawer>
    </>
  );
}
