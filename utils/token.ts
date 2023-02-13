import jwt from 'jsonwebtoken';
export interface IActivationToken {
  id: string;
}
export const createActivationToken = (payload: IActivationToken) => {
  if (process.env.ACTIVATION_TOKEN_SECRET) {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
      expiresIn: '2d',
    });
  } else {
    throw new Error('ACTIVATION_TOKEN_SECRET must be defined');
  }
};
