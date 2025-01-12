import { FC } from "react";
import { CustomForm, IField } from "../../shared/CustomForm.tsx";
import { Simulate } from "react-dom/test-utils";
import { useDispatch, useSelector } from "react-redux";
import { createClient, IClient } from "../../features/clients/clientsSlice.ts";
import { RootState } from "../../app/store.ts";

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
  ];
  const dispatch = useDispatch();
  const clients: IClient[] = useSelector(
    (state: RootState) => state.clients.items,
  );
  console.log(clients);
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
