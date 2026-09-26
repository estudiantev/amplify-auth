import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: "CODE",
      verificationEmailSubject: "Welcome to my app!",
      verificationEmailBody: (createCode) => `Use this code to confirm your account: ${createCode()}`,
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