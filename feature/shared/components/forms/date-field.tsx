import Field from "@/feature/shared/components/forms/field";
import { Calendar } from "@/components/ui/calendar";
import { useController, useFormContext } from "react-hook-form";

interface LabelFieldProps {
  controlName: string;
  title: string;
  placeholder?: string;
  description?: string;
}

export default function DateField({
  controlName,
  title,
  description,
}: LabelFieldProps) {
  const { control } = useFormContext();

  const { field } = useController({
    name: controlName,
    control,
    defaultValue: null,
  });

  return (
    <Field controlName={controlName} title={title} description={description}>
      <Calendar
        mode="single"
        className="rounded-lg border"
        selected={field.value}
        onSelect={field.onChange}
      />
    </Field>
  );
}
