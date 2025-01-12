import { FC, HTMLInputTypeAttribute } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { IClient } from "../features/clients/clientsSlice.ts";
import { useForm } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";
import { Simulate } from "react-dom/test-utils";
import reset = Simulate.reset;

export interface IField {
  id: keyof IClient;
  required?: boolean;
  label: string;
  placeholder?: string;
  errorMessage?: string;
  type: HTMLInputTypeAttribute;
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
  const { handleSubmit, control, reset } = useForm();
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
          {fields.map((field) => (
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
          ))}
          <Button type={"submit"} color={"primary"}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
