import React from "react";

interface VehicleListProps {
  models: { Model_ID: number; Model_Name: string }[];
}

export default function VehicleList({ models }: VehicleListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {models.map((model) => (
        <div
          key={model.Model_ID}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-800">
              {model.Model_Name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
