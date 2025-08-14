import { zodResolver } from "@hookform/resolvers/zod";
import {
  taskFormSchema,
  TaskFormSchemaType,
} from "@/feature/protected/sub-features/account-settings/sub-features/todo/utils/validations/task-form-schema";
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
