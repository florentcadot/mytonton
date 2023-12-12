"use client";

import { Button } from "@/app/components/button";
import { Input } from "@/app/components/input";
import { useRouter } from "next/navigation";
import { Nibling } from "@/util";
import { useState } from "react";

export function Login({ niblings }: { niblings: Nibling[] }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleContinue = () => {
    const nibling = niblings.find((nibling) => nibling.name === name);
    if (nibling) {
      const isPasswordGood = nibling.password === password;
      if (!isPasswordGood) {
        window.alert("Mauvais mot de passe :)!");
        setPassword("");
      } else {
        localStorage.setItem("amount", `${nibling.amount}`);
        router.push(`/niblings/${nibling.name.toLowerCase()}`);
      }
    }
  };

  const handleChange = (event: React.SyntheticEvent<EventTarget>) => {
    setName((event.target as HTMLInputElement).value);
  };

  return (
    <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-12 sm:p-6 lg:p-12">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            Connexion
          </h3>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <label
            htmlFor="HeadlineAct"
            className="block text-sm font-medium text-gray-900"
          >
            Je suis...
          </label>

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            value={name}
            onChange={handleChange}
          >
            <option value="">Sélectionne toi!</option>
            {niblings &&
              niblings.map((nibling) => (
                <option key={nibling.name} value={nibling.name}>
                  {nibling.name}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <Input
          type="password"
          label="Mot de passe"
          placeholder="Mot de passe"
          onChange={(value) => setPassword(value as string)}
        />
      </div>
      <div className="mt-8 flex">
        <Button label="Continuer" onClick={() => handleContinue()} />
      </div>
    </div>
  );
}
