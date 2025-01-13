import { FC } from "react";
import { CustomForm, IField } from "../../shared/CustomForm.tsx";
import { useDispatch, useSelector } from "react-redux";
import { login, registration } from "../../features/users/usersSlice.ts";
import { useNavigate } from "react-router";
import { Button, Typography } from "@mui/material";

export const Registration: FC = () => {
  const fields: IField[] = [
    {
      id: "username",
      required: true,
      label: "Имя пользователя",
      placeholder: "username",
      errorMessage: "Некорректное имя пользователя",
      type: "text",
    },
    {
      id: "password",
      required: true,
      label: "Пароль",
      placeholder: "password",
      errorMessage: "Введите название компании",
      type: "password",
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, error } = useSelector((state) => state.user.user);

  if (id) {
    navigate(`/`);
  }
  const formSubmit = (data) => {
    dispatch(registration(data));
  };
  return (
    <>
      <Typography
        variant=""
        component="p"
        color="error"
        sx={{ textAlign: "center", pt: 2 }}
      >
        {error}
      </Typography>
      <CustomForm
        fields={fields}
        onSubmit={formSubmit}
        buttonTitle={"зарегистрироваться"}
      />
    </>
  );
};
