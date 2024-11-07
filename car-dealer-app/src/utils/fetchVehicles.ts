// Updated fetchModelsByMakeIdAndYear function
export async function fetchModelsByMakeIdAndYear(makeId: string, year: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  const data = await res.json();
  return data.Results || [];
}
