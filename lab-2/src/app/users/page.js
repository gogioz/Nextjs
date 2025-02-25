"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingPage from "../loading";
import ErrorPage from "../error";
import NotFoundPage from "../not-found";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("api/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;
  if (users.length === 0) return <NotFoundPage />;

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Users List</h1>
        <ul className="text-gray-600 text-lg grid grid-cols-3 gap-6">
          {users.map((user) => (
            <li
              key={user._id}
              className="mb-4 p-6 border rounded-lg bg-white shadow-md"
            >
              <h2 className="text-xl font-semibold">Email: {user.email}</h2>
              <p>{user.password}</p>

              <button
                onClick={() => router.push(`/users/${user._id}`)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                View Profile
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
