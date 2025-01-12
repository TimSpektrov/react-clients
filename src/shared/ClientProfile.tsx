import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient, IClient } from "../features/clients/clientsSlice.ts";
import { RootState } from "../app/store.ts";
import {
  CLIENTS_URL,
  EDIT_URL,
  HOME_URL,
  NOTFOUND_URL,
} from "../app/routing.ts";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Tooltip,
  Typography,
} from "@mui/material";
import { AddBox, ArrowBack, Delete, Edit, Home } from "@mui/icons-material";

export const ClientProfile: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clients: IClient[] = useSelector(
    (state: RootState) => state.clients.items,
  );

  const item = clients.find((client) => client.id == id);

  useEffect(() => {
    if (!id || !item) {
      navigate("/" + NOTFOUND_URL);
    }
  }, [id, item, navigate]);

  if (!item) return null;

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {item.description}
        </Typography>
        <Box
          sx={{
            p: "15px 0",
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {item.company}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {item.contacts}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          key={"delete"}
          component={"button"}
          onClick={async () => {
            const result = confirm("вы уверены?");
            if (result) {
              await dispatch(deleteClient(item.id));
              navigate(HOME_URL);
            }
          }}
          variant="text"
          size="small"
          aria-label={"Удалить"}
          sx={{ color: "red" }}
        >
          <Tooltip title={"Удалить"}>
            <Delete />
          </Tooltip>
        </Button>
        <Button
          key={"edit"}
          component={"button"}
          onClick={() => navigate(`/${CLIENTS_URL}/${id}/${EDIT_URL}`)}
          variant="text"
          size="small"
          aria-label={"Редактировать"}
          sx={{ color: "green" }}
        >
          <Tooltip title={"Редактировать"}>
            <Edit />
          </Tooltip>
        </Button>
      </CardActions>
    </Card>
  );
};
