import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IClient {
  id: number;
  name: string;
  company: string;
  contacts: string;
}
export interface ClientsState {
  items: IClient[]
}

const initialState: ClientsState = {
  items: [
    { id: 1, name: "Alice Smith", company: "Tech Innovations", contacts: "alice@techinnovations.com" },
    { id: 2, name: "Bob Johnson", company: "Creative Solutions", contacts: "bob@creativesolutions.com" },
    { id: 3, name: "Charlie Brown", company: "Web Services Inc.", contacts: "charlie@webservices.com" },
    { id: 4, name: "Diana Prince", company: "Marketing Gurus", contacts: "diana@marketinggurus.com" },
    { id: 5, name: "Edward Elric", company: "Alchemy Corp", contacts: "edward@alchemycorp.com" },
    { id: 6, name: "Fiona Glenanne", company: "Security Experts", contacts: "fiona@securityexperts.com" },
    { id: 7, name: "George Washington", company: "Finance Solutions", contacts: "george@financesolutions.com" },
    { id: 8, name: "Hannah Montana", company: "Entertainment LLC", contacts: "hannah@entertainmentllc.com" },
    { id: 9, name: "Isaac Newton", company: "Scientific Research", contacts: "isaac@scientificresearch.com" },
    { id: 10, name: "Jack Sparrow", company: "Pirate Ventures", contacts: "jack@pirateventures.com" },
    { id: 11, name: "Katherine Johnson", company: "Data Analytics", contacts: "katherine@dataanalytics.com" },
    { id: 12, name: "Liam Neeson", company: "Film Productions", contacts: "liam@filmproductions.com" },
    { id: 13, name: "Mona Lisa", company: "Art Gallery", contacts: "mona@artgallery.com" },
    { id: 14, name: "Nathan Drake", company: "Adventure Co.", contacts: "nathan@adventureco.com" },
    { id: 15, name: "Olivia Pope", company: "Legal Advisors", contacts: "olivia@legaladvisors.com" },
    { id: 16, name: "Peter Parker", company: "Photography Studio", contacts: "peter@photographystudio.com" },
    { id: 17, name: "Quinn Fabray", company: "Fashion House", contacts: "quinn@fashionhouse.com" },
    { id: 18, name: "Robert Langdon", company: "Mystery Consultants", contacts: "robert@mysteryconsultants.com" },
    { id: 19, name: "Sarah Connor", company: "Tech Solutions", contacts: "sarah@techsolutions.com" },
    { id: 20, name: "Tony Stark", company: "Stark Industries", contacts: "tony@starkindustries.com" }
  ],
}

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = clientsSlice.actions

export default clientsSlice.reducer