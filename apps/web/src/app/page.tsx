"use client";

import { useUsers } from "@/features/users/hooks/use-users";
import { useEffect } from "react";
import { showError } from "@/lib/toast";

export default function Home() {
  const { data, isLoading, error } = useUsers();

  useEffect(() => {
    if (error) {
      showError("Failed to load users");
    }
  }, [error]);

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error loading users.</div>;

   return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold text-center sm:text-left">
         Users
        </h1>

        <ul className="mt-2 w-full">
          {data?.map(user => (
            <li key={user.id} className="mb-4 p-4 border rounded">
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
