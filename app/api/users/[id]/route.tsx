import { NextRequest, NextResponse } from "next/server";
import schema from "../scheme";
interface Props {
  params: { id: number };
}

// export function GET(request: NextRequest, { params }: Props) {
//   return NextResponse.json({ id: params.id });
// }

export function GET(request: NextRequest, { params }: Props) {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: "Mosh" });
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  // validate the body
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  // check the object exits!
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  return NextResponse.json({ id: body.id, name: body.name });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  // if the user exists
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({});
}
