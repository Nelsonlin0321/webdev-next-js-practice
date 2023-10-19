import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // validate it
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  // check the email exits

  const existedUser = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (existedUser) {
    return NextResponse.json(
      { error: `The email ${body.email} already exists` },
      { status: 400 }
    );
  }

  const createdUser = await prisma.user.create({
    data: { name: body.name, email: body.email },
  });

  return NextResponse.json(createdUser, { status: 201 });
}
