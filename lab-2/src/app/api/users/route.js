// import dbConnection from "@/app/lib/mongodb";
import { dbConnection } from "@/app/lib/mongodb";
import Admin from "@/app/models/User";
import { NextResponse } from "next/server";

// GET request to fetch all users
export async function GET() {
  try {
    await dbConnection();

    const admins = await Admin.find({});
    console.log("Admins Data:", admins); // Debugging log

    if (!admins || admins.length === 0) {
      return NextResponse.json({ message: "No admins found" }, { status: 404 });
    }

    return NextResponse.json(admins, { status: 200 });
  } catch (error) {
    console.error("Error fetching admins:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST request to add a new Admin
export async function POST(req) {
  await dbConnection();
  const { email, password } = await req.json();
  const newAdmin = new Admin({ password, email });
  await newAdmin.save();
  return NextResponse.json(newAdmin, { status: 201 });
}
