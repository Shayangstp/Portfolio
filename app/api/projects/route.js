import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/db/dbConfig";
import Projects from "../../model/projectModel";

dbConnect();

export async function GET(req, res) {
  try {
    const projects = await Projects.find();
    return NextResponse.json({
      code: 200,
      projects: projects,
    });
  } catch (error) {
    console.error("Error fetching projects", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req, res) {
  try {
    const { id, keyword } = await req.json();

    let projects;

    if (id) {
      projects = await Projects.findById(id);
      if (!projects) {
        return NextResponse.json({
          code: 404,
          message: "Project not found",
          success: false,
        });
      }
    } else if (keyword !== undefined) {
      if (keyword === "") {
        projects = await Projects.find(); // Fetch all projects when keyword is empty
      } else {
        projects = await Projects.find({
          $or: [
            { title: { $regex: keyword, $options: "i" } },
            { content: { $regex: keyword, $options: "i" } },
            { desc: { $regex: keyword, $options: "i" } },
            { hashtags: { $regex: keyword, $options: "i" } },
          ],
        });
      }
    } else {
      return NextResponse.json({
        code: 400,
        message: "No ID or keyword provided",
        success: false,
      });
    }

    return NextResponse.json({
      code: 200,
      projects: projects,
    });
  } catch (error) {
    console.error("Error fetching projects", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
