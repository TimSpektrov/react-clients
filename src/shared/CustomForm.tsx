import { FC, HTMLInputTypeAttribute } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { IClient } from "../features/clients/clientsSlice.ts";
import { useForm } from "react-hook-form";
import { TextareaAutosizeElement, TextFieldElement } from "react-hook-form-mui";

export interface IField {
  id: keyof IClient;
  required?: boolean;
  label: string;
  placeholder?: string;
  errorMessage?: string;
  type: HTMLInputTypeAttribute;
  initialValue: string;
}

type TDataInput = {
  [key: string]: string;
};
export interface ICustomFormProps {
  fields: IField[];
  onSubmit: (data: TDataInput[]) => void;
  title?: string;
  buttonTitle?: string;
}

export const CustomForm: FC<ICustomFormProps> = ({
  title,
  fields,
  onSubmit,
  buttonTitle = "Сохранить",
}) => {
  const defaultValues = {};
  fields.forEach((item) => {
    defaultValues[item.id] = item.initialValue;
  });
  const { handleSubmit, control, reset } = useForm({ defaultValues });
  const formSubmit = (data) => {
    for (let field in data) {
      if (data[field] === undefined) data[field] = "";
    }
    onSubmit(data);
    reset();
  };

  return (
    <Box
      component="section"
      sx={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "16px",
      }}
    >
      {title && (
        <Typography variant="h2" gutterBottom>
          {title}
        </Typography>
      )}
      <form onSubmit={handleSubmit(formSubmit)} noValidate>
        <Stack spacing={2}>
          {fields.map((field) =>
            field.type === "textarea" ? (
              <TextareaAutosizeElement
                name={field.id}
                label={field.label}
                control={control}
                fullWidth
                key={field.id}
                rules={{
                  required: field.required ? field.errorMessage : false,
                }}
              />
            ) : (
              <TextFieldElement
                name={field.id}
                label={field.label}
                control={control}
                required={field.required}
                fullWidth
                key={field.id}
                type={field.type}
                rules={{
                  required: field.required ? field.errorMessage : false,
                }}
              />
            ),
          )}
          <Button type={"submit"} color={"primary"}>
            {buttonTitle}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
