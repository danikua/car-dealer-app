import React, { Suspense } from "react";
import VehicleList from "@/components/VehicleList";
import { fetchModelsByMakeIdAndYear } from "@/utils/fetchVehicles";

interface Params {
  params: { makeId: string; year: string };
}

export default async function ResultPage({ params }: Params) {
  const { makeId, year } = params;
  const models = await fetchModelsByMakeIdAndYear(makeId, year);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Vehicle Models for {makeId} - {year}
        </h1>
        <Suspense fallback={<div className="text-gray-500">Loading...</div>}>
          <VehicleList models={models} />
        </Suspense>
      </div>
    </div>
  );
}
