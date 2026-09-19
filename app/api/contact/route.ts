import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      subject,
      orderNumber,
      message,
    } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Les Cahiers de Ariam" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Site] ${subject}`,
      text: `
Nouveau message depuis le site Les Cahiers de Ariam

Nom : ${name}
Email : ${email}
Numéro de commande : ${orderNumber || "Non renseigné"}

Objet : ${subject}

Message :
${message}
      `,
      html: `
        <h2>Nouveau message depuis le site</h2>

        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Numéro de commande :</strong> ${
          orderNumber || "Non renseigné"
        }</p>

        <p><strong>Objet :</strong> ${subject}</p>

        <hr />

        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Votre message a bien été envoyé.",
    });
  } catch (error) {
    console.error("Erreur formulaire contact :", error);

    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de l’envoi du message.",
      },
      { status: 500 }
    );
  }
}