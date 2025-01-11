import { FC } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { IClient } from "../features/clients/clientsSlice.ts";
import { useForm } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";

export interface IField {
  id: keyof IClient;
  required?: boolean;
  label: string;
  placeholder?: string;
  errorMessage?: string;
}

type TDataInput = {
  [key: string]: string;
};
export interface ICustomFormProps {
  fields: IField[];
  onSubmit: (data: TDataInput[]) => void;
  title?: string;
}

export const CustomForm: FC<ICustomFormProps> = ({
  title,
  fields,
  onSubmit,
}) => {
  const { handleSubmit, control } = useForm();
  const formSubmit = (data) => {
    onSubmit(data);
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
          {fields.map((field) => (
            <TextFieldElement
              name={field.id}
              label={field.label}
              control={control}
              required={field.required}
              fullWidth
              key={field.id}
              rules={{
                required: field.required ? field.errorMessage : false,
              }}
            />
          ))}
          <Button type={"submit"} color={"primary"}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
