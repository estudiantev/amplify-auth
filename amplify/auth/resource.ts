import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: "LINK",
      verificationEmailSubject: "Confirma tu cuenta en Fara Collections",
      verificationEmailBody: (createCode) => `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2>¡Bienvenido a Fara Collections!</h2>
          <p>Gracias por registrarte. Para activar tu cuenta, por favor haz clic en el siguiente botón:</p>
          <a href="${createCode()}" style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 15px 0;">
            Confirmar mi cuenta
          </a>
          <p style="font-size: 12px; color: #666;">Si no creaste esta cuenta, puedes ignorar este mensaje.</p>
        </div>
      `,
    },
  },
  userAttributes: {
    // especificar nombre de pila "given_name" como atributo
    givenName: {
      mutable: true,
      required: false,
    },
    // especificar apellido "family_name" como atributo
    familyName: {
      mutable: true,
      required: false,
    },
  },
})