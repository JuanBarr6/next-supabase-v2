import { Field } from "@/feature/shared/components/forms/field";
import { useController, useFormContext } from "react-hook-form";
import { Calendar22 } from "@/feature/protected/componets/sub-features/account-seetings/components/calendar";

interface LabelFieldProps {
  controlName: string;
  title: string;
  placeholder?: string;
  description?: string;
}

export default function DateField({
  controlName,
  title,
  placeholder,
  description,
}: LabelFieldProps) {
  const { control } = useFormContext();

  const { field } = useController({
    name: controlName,
    control,
    defaultValue: undefined,
  });

  return (
    <Field controlName={controlName} title={title} description={description}>
      {({ field }) => (
        <Calendar22
          placeholderText={placeholder}
          value={field.value}
          onValueChange={field.onChange}
        />
      )}
    </Field>
  );
}
