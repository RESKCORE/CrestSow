'use server';

import nodemailer from 'nodemailer';

// ponytail: in-memory rate limiter — resets on cold start, good enough for Vercel serverless
const submissions = new Map();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const entries = submissions.get(ip) || [];
  const recent = entries.filter((t) => now - t < RATE_LIMIT_WINDOW);
  submissions.set(ip, recent);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  return false;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function sendContactEmail(formData, honeypot) {
  if (honeypot) return { success: true, message: 'Message sent successfully!' };

  const { name, email, subject, message } = formData;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return { success: false, message: 'All fields are required.' };
  }
  if (name.length > 100 || message.length > 2000) {
    return { success: false, message: 'Input too long.' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: 'Invalid email address.' };
  }

  // Rate limit by email address
  if (isRateLimited(email)) {
    return { success: false, message: 'Too many requests. Please try again later.' };
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars');
    return { success: false, message: 'Email service is not configured. Please contact us directly.' };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'crestsow@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;padding:20px;border:1px solid #eee;border-radius:10px;">
          <h2 style="color:#333;margin-bottom:20px;">New Message from Website</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr style="border:0;border-top:1px solid #eee;margin:20px 0;" />
          <h3 style="color:#333;">Message:</h3>
          <p style="color:#555;white-space:pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'Failed to send message. Please try again later.' };
  }
}
