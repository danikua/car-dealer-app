export async function fetchMakes() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetMakesForVehicleType/car?format=json`
  );
  const data = await response.json();
  return data.Results || [];
}
