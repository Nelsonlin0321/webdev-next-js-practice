import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
  resend.emails.send({
    from: "...",
    to: "someone@outlook.com",
    subject: "...",
    react: <WelcomeTemplate name="someone" />,
  });
}
