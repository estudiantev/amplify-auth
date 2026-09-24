import {
  signUp,
  confirmSignUp,
  signIn,
} from 'aws-amplify/auth';

export async function registroUsuario(
  email: string,
  contraseña: string,
  nombre: string,
  apellido: string
) {
  return await signUp({
    username: email,
    password: contraseña,
    options: {
      userAttributes: {
        email,
        given_name: nombre,
        family_name: apellido,
      },
    },
  });
}

export async function confirmarUsuario(
  email: string,
  codigoConfirm: string
) {
  return await confirmSignUp({
    username: email,
    confirmationCode: codigoConfirm,
  });
}

export async function loginUsuario(
  email: string,
  contraseña: string
) {
  return await signIn({
    username: email,
    password: contraseña,
  });
}