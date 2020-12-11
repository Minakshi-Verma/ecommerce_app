import Commerce from '@chec/commerce.js';

//creating instance of commerce that is going to be our store
// public key = pk_****************************=====>>>Retrieved from commerce.js and saved in .env file for safety sake( since .env will not be pushed to github)
// Boolean value of "true" indicates we are creating the new store
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
