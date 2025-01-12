import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { AddReaction } from "@mui/icons-material";

export interface IClient {
  id: number | string;
  name: string;
  company: string;
  contacts: string;
  description: string;
}
export interface ClientsState {
  items: IClient[];
}

const initialState: ClientsState = {
  items: [
    {
      id: 1,
      name: "Alice Smith",
      company: "Tech Innovations",
      contacts: "alice@techinnovations.com",
      description: "Заметки по клиенту",
    },
    {
      id: 2,
      name: "Bob Johnson",
      company: "Creative Solutions",
      contacts: "bob@creativesolutions.com",
      description: "Заметки по клиенту",
    },
    {
      id: 3,
      name: "Charlie Brown",
      company: "Web Services Inc.",
      contacts: "charlie@webservices.com",
      description: "Заметки по клиенту",
    },
    {
      id: 4,
      name: "Diana Prince",
      company: "Marketing Gurus",
      contacts: "diana@marketinggurus.com",
      description: "Заметки по клиенту",
    },
    {
      id: 5,
      name: "Edward Elric",
      company: "Alchemy Corp",
      contacts: "edward@alchemycorp.com",
      description: "Заметки по клиенту",
    },
    {
      id: 6,
      name: "Fiona Glenanne",
      company: "Security Experts",
      contacts: "fiona@securityexperts.com",
      description: "Заметки по клиенту",
    },
    {
      id: 7,
      name: "George Washington",
      company: "Finance Solutions",
      contacts: "george@financesolutions.com",
      description: "Заметки по клиенту",
    },
    {
      id: 8,
      name: "Hannah Montana",
      company: "Entertainment LLC",
      contacts: "hannah@entertainmentllc.com",
      description: "Заметки по клиенту",
    },
    {
      id: 9,
      name: "Isaac Newton",
      company: "Scientific Research",
      contacts: "isaac@scientificresearch.com",
      description: "Заметки по клиенту",
    },
    {
      id: 10,
      name: "Jack Sparrow",
      company: "Pirate Ventures",
      contacts: "jack@pirateventures.com",
      description: "Заметки по клиенту",
    },
    {
      id: 11,
      name: "Katherine Johnson",
      company: "Data Analytics",
      contacts: "katherine@dataanalytics.com",
      description: "Заметки по клиенту",
    },
    {
      id: 12,
      name: "Liam Neeson",
      company: "Film Productions",
      contacts: "liam@filmproductions.com",
      description: "Заметки по клиенту",
    },
    {
      id: 13,
      name: "Mona Lisa",
      company: "Art Gallery",
      contacts: "mona@artgallery.com",
      description: "Заметки по клиенту",
    },
    {
      id: 14,
      name: "Nathan Drake",
      company: "Adventure Co.",
      contacts: "nathan@adventureco.com",
      description: "Заметки по клиенту",
    },
    {
      id: 15,
      name: "Olivia Pope",
      company: "Legal Advisors",
      contacts: "olivia@legaladvisors.com",
      description: "Заметки по клиенту",
    },
    {
      id: 16,
      name: "Peter Parker",
      company: "Photography Studio",
      contacts: "peter@photographystudio.com",
      description: "Заметки по клиенту",
    },
    {
      id: 17,
      name: "Quinn Fabray",
      company: "Fashion House",
      contacts: "quinn@fashionhouse.com",
      description: "Заметки по клиенту",
    },
    {
      id: 18,
      name: "Robert Langdon",
      company: "Mystery Consultants",
      contacts: "robert@mysteryconsultants.com",
      description: "Заметки по клиенту",
    },
    {
      id: 19,
      name: "Sarah Connor",
      company: "Tech Solutions",
      contacts: "sarah@techsolutions.com",
      description: "Заметки по клиенту",
    },
    {
      id: 20,
      name: "Tony Stark",
      company: "Stark Industries",
      contacts: "tony@starkindustries.com",
      description: "Заметки по клиенту",
    },
  ],
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    createClient: (state, action: PayloadAction<IClient>) => {
      const item = action.payload;
      const id = nanoid();
      state.items.push({ ...item, id });
    },
    deleteClient: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      console.log(index);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    updateClient: (state, action: PayloadAction<IClient>) => {
      const index = state.items.findIndex(
        (item) => String(item.id) == String(action.payload.id),
      );
      console.log(index);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { createClient, deleteClient, updateClient } =
  clientsSlice.actions;

export default clientsSlice.reducer;
