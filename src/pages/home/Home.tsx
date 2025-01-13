import { FC, useEffect } from "react";
import { useNavigate } from "react-router";
import { CLIENTS_URL } from "../../app/routing.ts";

export const Home: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/${CLIENTS_URL}`);
  }, []);
  return null;
};
