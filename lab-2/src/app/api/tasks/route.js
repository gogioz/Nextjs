import connectToDatabase from "@/app/_lib/dbconnection";
import { User } from "@/app/_lib/models/user";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "GET") {
    const users = await User.find({});
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    return res.status(201).json(newUser);
  }

  res.status(405).end(); // Method Not Allowed
}
