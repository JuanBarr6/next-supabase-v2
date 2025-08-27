import { zodResolver } from "@hookform/resolvers/zod";
import {
  taskFormSchema,
  TaskFormSchemaType,
} from "../utils/validations/form-validation";
import { useForm } from "react-hook-form";

interface UseTaskFormProps {
  defaultValues?: Partial<TaskFormSchemaType>;
}
export const useTaskForm = ({ defaultValues }: UseTaskFormProps) => {
  return useForm<TaskFormSchemaType>({
    resolver: zodResolver(taskFormSchema),
    defaultValues,
  });
};
