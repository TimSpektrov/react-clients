import { FC, useEffect } from "react";
import { CustomForm, IField } from "../../shared/CustomForm.tsx";
import { useDispatch, useSelector } from "react-redux";
import { IClient, updateClient } from "../../features/clients/clientsSlice.ts";
import { useNavigate, useParams } from "react-router";
import { RootState } from "../../app/store.ts";
import { CLIENTS_URL, NOTFOUND_URL } from "../../app/routing.ts";

export const EditClient: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clients: IClient[] = useSelector(
    (state: RootState) => state.clients.items,
  );

  const item = clients.find((client) => client.id == id);
  useEffect(() => {
    if (!id || !item) {
      navigate("/" + NOTFOUND_URL);
    }
  }, [id, item, navigate]);

  if (!item) return null;
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

  const formSubmit = async (data) => {
    await dispatch(updateClient({ ...data, id }));
    navigate(`/${CLIENTS_URL}/${id}`);
  };
  return (
    <CustomForm
      fields={fields}
      onSubmit={formSubmit}
      title={"Создать клиента"}
      defaultValues={item}
    />
  );
};
