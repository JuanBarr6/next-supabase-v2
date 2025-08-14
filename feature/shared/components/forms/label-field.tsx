import { Input } from "@/components/ui/input";
import Field from "@/feature/shared/components/forms/field";

interface LabelFieldProps {
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
}: LabelFieldProps) {
  return (
    <Field controlName={controlName} title={title} description={description}>
      <Input placeholder={placeholder} />
    </Field>
  );
}
