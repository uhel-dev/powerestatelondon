import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { site } from "../../../../site.config";

const schema = z.object({
	name: z.string().min(2),
	email: z.string().email().optional().or(z.literal("")),
	phone: z.string().min(7),
	message: z.string().min(5),
	consent: z.boolean(),
});

export async function POST(req: Request) {
	try {
		const json = await req.json();
		const parsed = schema.safeParse(json);
		if (!parsed.success) {
			return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
		}
		console.log("Contact form submission:", parsed.data);
		if (process.env.RESEND_API_KEY) {
			try {
				const resend = new Resend(process.env.RESEND_API_KEY);
				await resend.emails.send({
					from: `Website <no-reply@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").hostname}>`,
					to: [site.email],
					subject: `New enquiry from ${parsed.data.name}`,
					html: `<p>${parsed.data.message}</p><p>Phone: ${parsed.data.phone}<br/>Email: ${parsed.data.email || "-"}</p>`,
				});
			} catch (e) {
				console.error("Resend error", e);
			}
		}
		return NextResponse.json({ ok: true });
	} catch (e) {
		return NextResponse.json({ ok: false }, { status: 500 });
	}
} 