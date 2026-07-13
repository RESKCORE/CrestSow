'use server';

import nodemailer from 'nodemailer';

export async function sendContactEmail(formData) {
  const { name, email, subject, message } = formData;

  if (!name || !email || !subject || !message) {
    return { success: false, message: 'All fields are required.' };
  }

  try {
    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER, // The sender is the authenticated Gmail account
      to: process.env.GMAIL_USER,   // Send to the same address (company mail)
      replyTo: email,               // Reply-to is the user's email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333; margin-bottom: 20px;">New Message from Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3 style="color: #333;">Message:</h3>
          <p style="color: #555; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'Failed to send message. Please try again later.' };
  }
}
