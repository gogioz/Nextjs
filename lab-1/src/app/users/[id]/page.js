"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import LoadingPage from "../../loading";
import ErrorPage from "../../error";
import NotFoundPage from "../../not-found";

export default function UserDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;
  if (!user) return <NotFoundPage />;

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">User Details</h1>
        <div className="text-gray-600 text-lg p-6 border rounded-lg bg-white shadow-md">
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-700">Username: {user.username}</p>
          <p className="text-gray-700">Email: {user.email}</p>
          <p className="text-gray-700">Phone: {user.phone}</p>
          <p className="text-gray-700">
            Website:{" "}
            <a
              href={`https://${user.website}`}
              className="text-blue-500 hover:underline"
            >
              {user.website}
            </a>
          </p>
          <p className="text-gray-700">
            Address: {user.address.street}, {user.address.city}
          </p>
          <p className="text-gray-700">Company: {user.company.name}</p>
        </div>
        <button
          onClick={() => router.push("/users")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Back to Users List
        </button>
      </div>
    </div>
  );
}
