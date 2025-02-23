"use client";

export default function Cantact() {
  return (
    <div className="flex flex-col items-center justify-center   py-2">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          Have any questions or inquiries? Feel free to reach out to us!
        </p>
        <form className="mt-6 space-y-4">
          <div className="flex flex-col items-start">
            <label className="block text-gray-600 font-bold">Name:</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="block text-gray-600 font-bold">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="block text-gray-600 font-bold">Message</label>
            <textarea
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              rows="3"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
