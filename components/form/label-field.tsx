import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";

interface LabelFieldProps<T extends FieldValues> {
  control: Control<T>;
  controlName: Path<T>;
  title: string;
  placeholder?: string;
  description?: string;
  type?: string;
}

export default function LabelField<T extends FieldValues>({
  control,
  controlName,
  title,
  placeholder,
  description,
  type = "text",
}: LabelFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={controlName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
