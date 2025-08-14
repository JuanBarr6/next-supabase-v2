import { zodResolver } from "@hookform/resolvers/zod";
import {
  taskFormSchema,
  TaskFormSchemaType,
} from "@/feature/protected/sub-features/account-settings/sub-features/todo/utils/validations/task-form-schema";
import { useForm } from "react-hook-form";

export const useTaskForm = () => {
  return useForm<TaskFormSchemaType>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {},
  });
};
