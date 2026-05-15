import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, email, phone, message, source } = body;

        await resend.emails.send({
            from: "Chaviv Realtors <onboarding@resend.dev>",
            to: ["chavivrealtors@gmail.com"],
            subject: `New Lead - ${source || "Website"}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2>New Website Lead</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Source:</strong> ${source || "Website"}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message || "No message provided"}</p>
                </div>
            `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("Email sending failed:", error);

        return Response.json(
            { success: false, error: "Failed to send email" },
            { status: 500 }
        );
    }
}