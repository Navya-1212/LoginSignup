import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} component={Link}
        to="/" >Profile</MenuItem>
      <MenuItem onClick={handleMenuClose} component={Link}
        to="/">Admin</MenuItem>
      <MenuItem onClick={handleMenuClose} component={Link}
        to="/login">LogIn | LogOut</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link}
        to="/">
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge >
            <HomeIcon/>
          </Badge>
        </IconButton>
        <p>Home</p>
      </MenuItem>

      <MenuItem component={Link}
        to="/">
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge >
            <MenuBookIcon />
          </Badge>
        </IconButton>
        <p>Projects</p>
      </MenuItem>

      <MenuItem component={Link}
        to="/">
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge >
            <PersonIcon />
          </Badge>
        </IconButton>
        <p>About us</p>
      </MenuItem>

      <MenuItem component={Link}
        to="/">
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge >
            <PersonIcon />
          </Badge>
        </IconButton>
        <p>Contact us</p>
      </MenuItem>

 
    </Menu>
  );

  const curs = document.getElementById('cursor');
  const cursblur = document.getElementById('cursor-blur');

  if (curs && cursblur) {
    document.addEventListener('mousemove', (m) => {
      curs.style.left = m.x - 10 + "px";
      curs.style.top = m.y - 10 + "px";
      cursblur.style.left = m.x - 60 + "px";
      cursblur.style.top = m.y - 60 + "px";
    });
  } else {
    console.error("Elements with IDs 'cursor' and/or 'cursor-blur' not found in the DOM.");
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <div id="cursor" style={{ background: '#EAE2DF', height: "1vh", width: '1vh', position: 'fixed', borderRadius: "50%", zIndex: '99' }}></div>
      <div id="cursor-blur" style={{ background: '#EAE2DF', height: "20vh", width: '20vh', position: 'fixed', borderRadius: "50%", filter: 'blur(60px)', }}></div>
      <AppBar
        position="static"
        color="inherit"
        style={{ backgroundColor: "#D1D1D1" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Journal
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              style={{
                //   backgroundColor: "#FF0000",
                border: '1px solid black',
                borderRadius: "7px",
                width: "40vw",
              }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>


          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>

            <IconButton
              size="large"
              color="inherit"
              component={Link}
              to="/"
            >
              <Typography>Home</Typography>
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              component={Link}
              to="/projects"
            >
              <Typography>Projects</Typography>
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              component={Link}
              to="/aboutus"
            >
              <Typography>About us</Typography>
            </IconButton>
 


            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
             
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
             
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
