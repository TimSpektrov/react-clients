import { FC } from "react";
import { CustomForm, IField } from "../../shared/CustomForm.tsx";
import { useDispatch, useSelector } from "react-redux";
import { createClient } from "../../features/clients/clientsSlice.ts";
import { useNavigate } from "react-router";
import { CLIENTS_URL } from "../../app/routing.ts";

export const CreateClient: FC = () => {
  const fields: IField[] = [
    {
      id: "name",
      required: true,
      label: "Имя",
      placeholder: "Евгений",
      errorMessage: "Введите имя",
      type: "text",
    },
    {
      id: "company",
      label: "Компания",
      placeholder: "Microsoft",
      errorMessage: "Введите название компании",
      type: "text",
    },
    {
      id: "contacts",
      required: true,
      label: "Контакты",
      placeholder: "example@mail.com",
      errorMessage: "Введите контакт",
      type: "text",
    },
    {
      id: "description",
      required: false,
      label: "Заметки",
      placeholder: "Введите заметку",
      errorMessage: "",
      type: "textarea",
    },
  ];
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const formSubmit = (data) => {
    dispatch(createClient({ ...data, userId: id }));
    navigate(`/${CLIENTS_URL}`);
  };
  return (
    <CustomForm
      fields={fields}
      onSubmit={formSubmit}
      title={"Создать клиента"}
    />
  );
};
