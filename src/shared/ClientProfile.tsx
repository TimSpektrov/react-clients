import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { IClient } from "../features/clients/clientsSlice.ts";
import { RootState } from "../app/store.ts";
import { HOME_URL, NOTFOUND_URL } from "../app/routing.ts";

export const ClientProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const clients: IClient[] = useSelector(
    (state: RootState) => state.clients.items,
  );

  const item = clients.find((client) => client.id == id);

  useEffect(() => {
    // Если id не найден или item не существует, перенаправляем на NOTFOUND_URL
    if (!id || !item) {
      navigate("/" + NOTFOUND_URL);
    }
  }, [id, item, navigate]);

  if (!item) return null;
  return (
    <>
      {item.id}
      <br />
      {item.name}
      <br />
    </>
  );
};
