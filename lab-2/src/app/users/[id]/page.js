import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();

  return users.map((user) => ({
    id: user._id.toString(),
  }));
}

export async function getUser(id) {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }) {
  const user = await getUser(params.id);
  console.log(user);

  return {
    title: user ? `${user.email}` : "User Not Found",
    description: user
      ? `Details of ${user.email}`
      : "No user found with this ID",
  };
}

export default async function UserDetail({ params }) {
  const user = await getUser(params.id);
  console.log(params.id);

  if (!user) {
    return (
      <h1 className="text-red-500 text-center text-2xl">User Not Found</h1>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">User Details</h1>
        <div className="text-gray-600 text-lg p-6 border rounded-lg bg-white shadow-md my-6">
          <h2 className="text-2xl font-semibold">{user.email}</h2>
          <p className="text-gray-700 ">{user.password}</p>
        </div>
        <Link
          href="/users"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Back to Users List
        </Link>
      </div>
    </div>
  );
}
