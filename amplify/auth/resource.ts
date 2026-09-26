import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: "CODE",
      verificationEmailSubject: "Verifica tu cuenta en Fara Collections",
      verificationEmailBody: (createCode) => `Tu código de verificación es: ${createCode()}`,
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