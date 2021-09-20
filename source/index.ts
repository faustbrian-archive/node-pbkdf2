import StringCrypto from "string-crypto";

export const encrypt = (value: string, password: string): string =>
  new StringCrypto().encryptString(value, password);

export const decrypt = (value: string, password: string): string =>
  new StringCrypto().decryptString(value, password);

export const verify = (value: string, password: string, expected: string): boolean => {
  try {
    return decrypt(value, password) === expected;
  } catch {
    return false;
  }
};
