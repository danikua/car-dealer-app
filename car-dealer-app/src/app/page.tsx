"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import FilterForm from "../components/FilterForm";

export default function Home() {
  const [selectedMake, setSelectedMake] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Car Dealer App</h1>
        <FilterForm
          selectedMake={selectedMake}
          setSelectedMake={setSelectedMake}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        <Link
          href={`/result/${selectedMake}/${selectedYear}`}
          className={`mt-4 block text-center py-2 px-4 rounded ${
            selectedMake && selectedYear
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
