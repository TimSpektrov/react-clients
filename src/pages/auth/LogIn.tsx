import { FC } from "react";
import { CustomForm, IField } from "../../shared/CustomForm.tsx";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/users/usersSlice.ts";
import { useNavigate } from "react-router";
import { Button, Typography } from "@mui/material";
import { AUTH_URL, REGISTRATION_URL } from "../../app/routing.ts";

export const LogIn: FC = () => {
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
    dispatch(login(data));
  };

  const handleRegistrations = () => {
    navigate(`/${AUTH_URL}/${REGISTRATION_URL}`);
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
      <CustomForm fields={fields} onSubmit={formSubmit} buttonTitle={"войти"} />
      <Button
        component={"a"}
        color={"warning"}
        fullWidth
        variant={"outlined"}
        sx={{ mt: 2 }}
        onClick={handleRegistrations}
      >
        зарегистрироваться
      </Button>
    </>
  );
};
