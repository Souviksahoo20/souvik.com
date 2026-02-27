import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const host = process.env.SMTP_HOST
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const secure = process.env.SMTP_SECURE === 'true'

    let transporter
    let to = process.env.CONTACT_RECIPIENT || user
    let usedTestAccount = false

    if (!host || !user || !pass) {
      // In development, fall back to an Ethereal test account so local testing works
      if (process.env.NODE_ENV !== 'production') {
        const testAccount = await nodemailer.createTestAccount()
        transporter = nodemailer.createTransport({
          host: testAccount.smtp.host,
          port: testAccount.smtp.port,
          secure: testAccount.smtp.secure,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        })
        to = testAccount.user
        usedTestAccount = true
      } else {
        return NextResponse.json({ error: 'SMTP not configured on server' }, { status: 500 })
      }
    } else {
      transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user,
          pass,
        },
      })
    }

    const info = await transporter.sendMail({
      from: `"Website Contact" <${user || to}>`,
      to,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    })

    if (usedTestAccount) {
      const previewUrl = nodemailer.getTestMessageUrl(info)
      return NextResponse.json({ ok: true, previewUrl })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error', err)
    // In development, include error message for easier debugging
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const message = (err as any)?.message || 'Failed to send email'
      return NextResponse.json({ error: message }, { status: 500 })
    }
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
