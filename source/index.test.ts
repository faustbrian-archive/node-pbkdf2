import "jest-extended";

import { decrypt, encrypt, verify } from "./index";

test("#encrypt", () => {
  expect(encrypt("hash", "password")).toBeString();
});

test("#decrypt", () => {
  expect(decrypt(encrypt("hash", "password"), "password")).toStrictEqual("hash");
});

test("#verify", () => {
  expect(verify(encrypt("hash", "password"), "password", "hash")).toBeTrue();
  expect(verify(encrypt("hash", "password"), "password", "nash")).toBeFalse();
});
