import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field } from "./field";

interface SelectFieldProps {
  controlName: string;
  title: string;
  placeholder?: string;
  description?: string;
  options: { value: string; label: string }[];
}

export default function SelectField({
  controlName,
  title,
  placeholder = "Seleccione una opción",
  description,
  options,
}: SelectFieldProps) {
  return (
    <Field controlName={controlName} title={title} description={description}>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}
