import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with an environment variable
// In a real application, you'd add RESEND_API_KEY to your .env.local
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (resend) {
      const data = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>", // Should be a verified domain
        to: ["mtheussantosdev@gmail.com"], // Send to personal email
        subject: `[Portfolio] Novo contato: ${subject}`,
        html: `
          <h3>Nova mensagem enviada pelo portfólio</h3>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
          <hr />
          <p><strong>Mensagem:</strong></p>
          <p>${message.replace(/\\n/g, "<br />")}</p>
        `,
      });
      return NextResponse.json({ success: true, data });
    } else {
      // Mock response if API key is not set
      console.log("Sending mock email (no API key configured):", {
        name,
        email,
        subject,
        message,
      });
      return NextResponse.json({
        success: true,
        message: "Mock email sent successfully. Configure RESEND_API_KEY.",
      });
    }
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
