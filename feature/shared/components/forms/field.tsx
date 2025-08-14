import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cloneElement, ReactElement } from "react";

interface LabelFieldProps extends React.ComponentProps<"input"> {
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
  ...rest
}: LabelFieldProps) {
  return (
    <FormField
      name={controlName}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{title}</FormLabel>
            <FormControl>
              {cloneElement(children, { ...field, ...rest })}
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
