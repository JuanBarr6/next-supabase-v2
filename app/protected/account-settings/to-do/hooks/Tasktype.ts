export interface Task {
  id: number;
  user_id: string;
  descripcion: string;
  estado: string;
  fecha_a_realizar?: Date;
  fotos?: string[];
  inserted_at?: Date;
}
