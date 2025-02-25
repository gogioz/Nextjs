// import { dbConnection } from "@app/lib/mongodb";
import Admin from "../../../models/User";
import { dbConnection } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await dbConnection();

    // Extract the ID from the request parameters
    const { id } = params;

    // Validate if ID exists
    if (!id) {
      return NextResponse.json(
        { message: "Admin ID is required" },
        { status: 400 }
      );
    }

    // Find the admin by ID
    const admin = await Admin.findById(id);

    if (!admin) {
      return NextResponse.json({ message: "Admin not found" }, { status: 404 });
    }

    return NextResponse.json(admin, { status: 200 });
  } catch (error) {
    console.error("Error fetching admin:", error);
    return NextResponse.json(
      { message: "Failed to fetch admin" },
      { status: 500 }
    );
  }
}
