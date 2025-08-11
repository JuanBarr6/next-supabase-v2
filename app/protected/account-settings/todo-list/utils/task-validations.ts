export interface TaskValidationResult {
  valid: boolean;
  errors: string[];
}

export function validateNewTask(nombre: string): TaskValidationResult {
  const errors: string[] = [];

  if (!nombre.trim()) {
    errors.push("La tarea no puede estar vacía.");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
