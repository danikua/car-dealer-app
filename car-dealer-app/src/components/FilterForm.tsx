import React, { useEffect, useState } from "react";
import { fetchMakes } from "@/utils/apiUtils";

interface FilterFormProps {
  selectedMake: string | null;
  setSelectedMake: (make: string) => void;
  selectedYear: number | null;
  setSelectedYear: (year: number) => void;
}

export default function FilterForm({
  selectedMake,
  setSelectedMake,
  selectedYear,
  setSelectedYear,
}: FilterFormProps) {
  const [makes, setMakes] = useState<{ MakeId: number; MakeName: string }[]>(
    []
  );

  useEffect(() => {
    fetchMakes().then(setMakes);
  }, []);

  const years = Array.from(
    { length: new Date().getFullYear() - 2014 },
    (_, i) => 2015 + i
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <select
        value={selectedMake || ""}
        onChange={(e) => setSelectedMake(e.target.value)}
        className="w-full p-3 border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
      >
        <option value="" disabled>
          Select Make
        </option>
        {makes.map((make) => (
          <option key={make.MakeId} value={make.MakeId}>
            {make.MakeName}
          </option>
        ))}
      </select>
      <select
        value={selectedYear || ""}
        onChange={(e) => setSelectedYear(Number(e.target.value))}
        className="w-full p-3 border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
      >
        <option value="" disabled>
          Select Year
        </option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
