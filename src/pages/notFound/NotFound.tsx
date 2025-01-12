import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { HOME_URL } from "../../app/routing.ts";

export const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(HOME_URL);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" component="h2" color="error">
        404
      </Typography>
      <Typography variant="h5">Страница не найдена</Typography>
      <Typography variant="body1">
        Извините, но страница, которую вы ищете, не существует.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleHomeClick}
        sx={{ marginTop: 2 }}
      >
        На главную
      </Button>
    </Box>
  );
};
