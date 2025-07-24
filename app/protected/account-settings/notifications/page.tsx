import { createClient } from "@/utils/supabase/server";

type InstrumentWithCategory = {
  id: string;
  name: string;
  category: {
    name: string;
  } | null;
};

export default async function InstrumentsWithCategoriesPage() {
  const supabase = await createClient();

  const response = await supabase.from("instruments").select(`
      id,
      name,
      category:category_id (
        name
      )
    `);

  if (response.error) {
    return <p>Error: {response.error.message}</p>;
  }

  const instruments = response.data as unknown as InstrumentWithCategory[];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Instrumentos con Categoría</h1>
      <ul>
        {instruments.map((instrument) => (
          <li key={instrument.id}>
            {instrument.name} -{" "}
            <strong>{instrument.category?.name ?? "Sin categoría"}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
