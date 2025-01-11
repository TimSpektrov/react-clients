import { FC } from "react";
import { CustomForm, IField } from "../../shared/CustomForm.tsx";

export const CreateClient: FC = () => {
  const fields: IField[] = [
    {
      id: "name",
      required: true,
      label: "Имя",
      placeholder: "Евгений",
      errorMessage: "Введите имя",
    },
    {
      id: "company",
      label: "Компания",
      placeholder: "Microsoft",
      errorMessage: "Введите название компании",
    },
    {
      id: "contacts",
      required: true,
      label: "Контакты",
      placeholder: "example@mail.com",
      errorMessage: "Введите контакт",
    },
  ];

  const formSubmit = (data) => {
    console.log(data);
  };
  return (
    <CustomForm
      fields={fields}
      onSubmit={formSubmit}
      title={"Создать клиента"}
    />
  );
};
