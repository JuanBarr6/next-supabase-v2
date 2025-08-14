import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cloneElement, ReactElement } from "react";

interface LabelFieldProps {
  controlName: string;
  title: string;
  placeholder?: string;
  description?: string;
  children: ReactElement;
}

export default function Field({
  controlName,
  title,
  description,
  children,
}: LabelFieldProps) {
  return (
    <FormField
      name={controlName}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{title}</FormLabel>
            <FormControl>{cloneElement(children, { ...field })}</FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
