// "use client";
export const metadata = {
  title: "Home Page",
  description: "Learning Next.js",
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center  p-6 my-36">
      <div className=" bg-gray-100 p-8 rounded-lg shadow-lg max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-gray-600 text-lg">
          Discover amazing content, explore new opportunities, and stay
          connected with us.
        </p>
      </div>
    </div>
  );
}
