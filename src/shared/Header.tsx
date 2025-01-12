import { FC } from "react";
import { AddBox, ArrowBack, Home } from "@mui/icons-material";
import { CLIENTS_URL, CREATE_URL, HOME_URL } from "../app/routing.ts";
import { Box, Button, Link, Stack, Tooltip } from "@mui/material";
import { useNavigate } from "react-router";

export const Header: FC = () => {
  let navigate = useNavigate();

  const buttons = [
    {
      label: "Назад",
      icon: <ArrowBack />,
      onClick: () => {
        navigate(-1);
      },
    },
    {
      label: "На главную",
      icon: <Home />,
      href: HOME_URL,
    },
    {
      label: "Создать нового клиента",
      icon: <AddBox />,
      href: `/${CLIENTS_URL}/${CREATE_URL}`,
    },
  ];

  return (
    <header>
      <Box
        component="nav"
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "8px 16px",
        }}
      >
        <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
          {buttons.map((button, index) => (
            <Button
              key={index}
              component={button.href ? Link : "button"}
              href={button.href}
              onClick={button.onClick}
              variant="contained"
              aria-label={button.ariaLabel}
            >
              <Tooltip title={button.label}>{button.icon}</Tooltip>
            </Button>
          ))}
        </Stack>
      </Box>
    </header>
  );
};
