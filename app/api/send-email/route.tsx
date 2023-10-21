import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: NextRequest) {
  const body = await request.json();
  resend.emails.send({
    from: "Acme <onboarding@nelsonds.com>",
    to: "nelsonlin0321@gmail.com",
    subject: "Testing",
    react: <WelcomeTemplate name={body.name!} />,
  });

  return NextResponse.json({});
}
