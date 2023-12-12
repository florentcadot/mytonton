"use client";

import { Button } from "@/app/components/button";

export default function Page({ params }: { params: { nibling: string } }) {
  const handleBuy = () => {
    console.log("Not implemented");
  };

  return (
    <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-12 sm:p-6 lg:p-12">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />

      <div className="">
        <div>
          <h2 className="text-center text-xl font-bold text-gray-900 sm:text-xl capitalize">
            {params.nibling}
          </h2>
        </div>
      </div>
      <div className="mt-4">
        <div
          className={
            "text-center text-4xl font-extrabold text-blue-600 md:text-5xl capitalize"
          }
        >
          {localStorage.getItem("amount")}€{" "}
        </div>
      </div>
      <div className="mt-8 flex">
        <Button
          label="Acheter quelquechose d'immatériel avec!"
          disabled={true}
          onClick={() => handleBuy()}
        />
      </div>
    </div>
  );
}
