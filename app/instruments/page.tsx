"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export default async function InstrumentsPage() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("instruments").select();

  async function insertInstrument(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;

    const supabase = await createClient();
    await supabase.from("instruments").insert({ name });

    revalidatePath("/instruments");
  }

  return (
    <div>
      <h1>Instrumentos</h1>

      <form action={insertInstrument}>
        <input
          type="text"
          name="name"
          placeholder="Agregar instrumento"
          required
        />
        <button type="submit">Confirmar</button>
      </form>

      <pre>{JSON.stringify(instruments, null, 2)}</pre>
    </div>
  );
}
