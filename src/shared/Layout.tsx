import { FC, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Header } from "./Header.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_URL } from "../app/routing.ts";
import { Box } from "@mui/material";
import { clearError } from "../features/users/usersSlice.ts";
import { setClients } from "../features/clients/clientsSlice.ts";
import { RootState } from "../app/store.ts";

export const Layout: FC = () => {
  const { id, error } = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (!id && pathname.split("/")[1] !== AUTH_URL) {
      navigate(`/${AUTH_URL}`);
    }
  }, [id, pathname]);

  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
  }, [pathname]);

  useEffect(() => {
    if (id) {
      dispatch(setClients(id));
    }
  }, [id]);
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "16px",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};
