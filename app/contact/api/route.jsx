import { NextResponse } from "next/server";
import { RenderEmail } from "../../../components/RenderEmail";
import { mailOpts, transporter } from "../../../config/nodemailer";
import { render } from "@react-email/components";

export async function POST(request) {
    const data = await request.json()
    const { firstName, lastName, email, subject, message } = data;

    const emailHtml = await render(
        <RenderEmail {...{ firstName, lastName, message }} />
    )

    try {
        await transporter.sendMail({
            ...mailOpts,
            subject: `Resume Contact Form | ${subject}`,
            replyTo: email,
            text: message,
            html: emailHtml
        })
        return NextResponse.json({
            response: 'success'
        })
    } catch (error) {
        // console.log(error.message)
        return NextResponse.json({
            response: 'fail'
        })
    }
}