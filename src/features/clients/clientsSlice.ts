import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { IUser } from "../users/usersSlice.ts";
import { DBClients } from "../../app/db.ts";

export interface IClient {
  id: string;
  name: string;
  company: string;
  contacts: string;
  description: string;
  userId: string;
}
export interface ClientsState {
  items: IClient[];
}

const initialState: ClientsState = {
  items: [],
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setClients: (state, action: PayloadAction<Pick<IUser, "id"> | string>) => {
      const localClients = localStorage.getItem("clients");
      const clients = localClients ? JSON.parse(localClients) : [...DBClients];
      state.items = clients.filter((item) => item.userId === action.payload);
    },
    createClient: (state, action: PayloadAction<Partial<IClient>>) => {
      const item = action.payload;
      const id = nanoid();
      state.items.push({ ...item, id });
      const localClients = localStorage.getItem("clients");
      const clients = localClients ? JSON.parse(localClients) : [...DBClients];
      localStorage.setItem(
        "clients",
        JSON.stringify([...clients, { ...item, id }]),
      );
    },
    deleteClient: (
      state,
      action: PayloadAction<Pick<IUser, "id"> | string>,
    ) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      console.log(index);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      const localClients = localStorage.getItem("clients");
      const clients = localClients ? JSON.parse(localClients) : [...DBClients];
      localStorage.setItem(
        "clients",
        JSON.stringify(clients.filter((item) => item.id !== action.payload)),
      );
    },
    updateClient: (state, action: PayloadAction<IClient>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
      const localClients = localStorage.getItem("clients");
      const clients = localClients ? JSON.parse(localClients) : [...DBClients];
      const locIndex = clients.findIndex(
        (item: IClient) => item.id == action.payload.id,
      );
      if (locIndex !== -1) {
        clients[locIndex] = { ...clients[locIndex], ...action.payload };
        localStorage.setItem("clients", JSON.stringify(clients));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { createClient, deleteClient, updateClient, setClients } =
  clientsSlice.actions;

export default clientsSlice.reducer;
