import { FC, useState } from "react";
import {
  AddBox,
  ArrowBack,
  Home,
  Adb,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { CLIENTS_URL, CREATE_URL, HOME_URL } from "../app/routing.ts";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Header: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let navigate = useNavigate();

  const buttons = [
    {
      id: "back",
      label: "Назад",
      icon: <ArrowBack />,
      onClick: () => {
        navigate(-1);
      },
    },
    {
      id: "home",
      label: "На главную",
      icon: <Home />,
      onClick: () => {
        navigate(HOME_URL);
      },
    },
    {
      id: "createClient",
      label: "Создать нового клиента",
      icon: <AddBox />,
      onClick: () => {
        navigate(`/${CLIENTS_URL}/${CREATE_URL}`);
      },
    },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Adb sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MY CLIENTS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {buttons.map((button) => (
                <MenuItem key={button.id} onClick={handleCloseNavMenu}>
                  <Button
                    key={button.id}
                    component={button?.href ? Link : "button"}
                    href={button?.href}
                    onClick={button?.onClick}
                    variant="text"
                    aria-label={button.label}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {button.label}
                    </Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Adb sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {buttons.map((button) => (
              <Button
                key={button.id}
                component={"button"}
                onClick={button.onClick}
                variant="text"
                size="small"
                aria-label={button.label}
                sx={{ color: "white" }}
              >
                <Tooltip title={button.label}>{button.icon}</Tooltip>
              </Button>
            ))}
          </Box>
          {/*TODO доделать личный кабинет*/}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
