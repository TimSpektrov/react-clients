import { FC } from "react";
import { CustomForm, IField } from "../../shared/CustomForm.tsx";
import { useDispatch } from "react-redux";
import { createClient } from "../../features/clients/clientsSlice.ts";

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

  const formSubmit = (data) => {
    dispatch(createClient(data));
  };
  return (
    <CustomForm
      fields={fields}
      onSubmit={formSubmit}
      title={"Создать клиента"}
    />
  );
};
