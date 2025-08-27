"use client";
import React from "react";
import {
  useFormContext,
  type FieldPath,
  type FieldValues,
  type ControllerRenderProps,
  type ControllerFieldState,
  type UseFormStateReturn,
} from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from "@/components/ui/form";

export type RenderBag<TFV extends FieldValues, TName extends FieldPath<TFV>> = {
  field: ControllerRenderProps<TFV, TName>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<TFV>;
};

export type FieldProps<
  TFV extends FieldValues,
  TName extends FieldPath<TFV>,
> = {
  controlName: TName;
  title?: string;
  description?: string;
  children:
    | React.ReactElement
    | ((bag: RenderBag<TFV, TName>) => React.ReactNode);
};

export function Field<TFV extends FieldValues, TName extends FieldPath<TFV>>({
  controlName,
  title,
  description,
  children,
}: FieldProps<TFV, TName>) {
  const { control } = useFormContext<TFV>();

  return (
    <FormField
      control={control}
      name={controlName}
      render={({ field, fieldState, formState }) => (
        <FormItem>
          {title && <FormLabel>{title}</FormLabel>}
          <FormControl>
            {typeof children === "function"
              ? children({ field, fieldState, formState })
              : React.cloneElement(children, { ...field })}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
