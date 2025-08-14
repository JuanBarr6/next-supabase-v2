import { Input } from "@/components/ui/input";
import Field from "@/feature/shared/components/forms/field";

interface LabelFieldProps extends React.ComponentProps<"input"> {
  controlName: string;
  title: string;
  placeholder?: string;
  description?: string;
}

export default function LabelField({
  controlName,
  title,
  placeholder,
  description,
  ...rest
}: LabelFieldProps) {
  return (
    <Field
      controlName={controlName}
      title={title}
      description={description}
      {...rest}
    >
      <Input placeholder={placeholder} />
    </Field>
  );
}
