export const metadata = {
  title: "About Page",
  description: "Learning Next.js",
};

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center  p-6 my-20">
      <div className="bg-gray-100  p-8 rounded-lg shadow-lg max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          Welcome to our platform! We are dedicated to providing the best
          services and experiences to our users. Our mission is to innovate and
          create solutions that make life easier and more enjoyable.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            To be a leader in our industry, constantly evolving and adapting to
            new challenges while staying true to our core values.
          </p>
        </div>
      </div>
    </div>
  );
}
