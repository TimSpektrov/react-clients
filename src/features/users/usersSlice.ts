import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export interface IUser {
  id: number | string;
  username: string;
  password: string;
}

export interface UserState {
  users: IUser[];
  user: {
    id: string | null;
    error: string | null;
  };
}

const initialState: UserState = {
  users: [],
  user: {
    id: null,
    error: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registration: (
      state,
      action: PayloadAction<Pick<IUser, "username" | "password">>,
    ) => {
      const item = state.users.find(
        (user) => user.username === action.payload.username,
      );
      if (item || !action.payload.password) {
        state.user.id = null;
        state.user.error =
          "Такой пользователь существует или некорректный пароль";
      } else {
        const id = nanoid();
        state.users.push({ ...action.payload, id });
        state.user.id = id;
        state.user.error = null;
      }
    },
    login: (
      state,
      action: PayloadAction<Pick<IUser, "username" | "password">>,
    ) => {
      const item = state.users.find(
        (user) => user.username === action.payload.username,
      );
      if (!item || action.payload.password !== item.password) {
        state.user.id = null;
        state.user.error = "Неверные имя пользователя или пароль";
      } else {
        state.user.id = item.id;
        state.user.error = null;
      }
    },
    logout: (state) => {
      state.user.id = null;
      state.user.error = null;
    },
    clearError: (state) => {
      state.user.error = null;
    },
  },
});

export const { login, registration, logout, clearError } = userSlice.actions;

export default userSlice.reducer;
