import { customHash, hexToBytes } from "./config";

const key = process.env.REACT_APP_KEY;
const salt = process.env.REACT_APP_SALT_CHARACTER;

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function customEncrypt(plainText: string): Promise<string> {
  if (!key || !salt) {
    throw new Error("Key or salt is not defined in the environment variables");
  }

  const iv = crypto.getRandomValues(new Uint8Array(16));

  const hashedKey = await customHash(key + salt);

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    hashedKey,
    { name: "AES-CBC" },
    false,
    ["encrypt"]
  );

  const encoder = new TextEncoder();
  const data = encoder.encode(plainText);

  const encryptedBuffer = await crypto.subtle.encrypt(
    {
      name: "AES-CBC",
      iv,
    },
    cryptoKey,
    data
  );

  const ivHex = bytesToHex(iv);
  const ciphertextHex = bytesToHex(new Uint8Array(encryptedBuffer));

  return `${ivHex}:${ciphertextHex}`;
}

export async function customDecrypt(encryptedData: string): Promise<string> {
  const [ivHex, encryptedHex] = encryptedData.split(":");
  if (!ivHex || !encryptedHex) {
    throw new Error("Invalid encrypted data format");
  }
  if (!key || !salt) {
    throw new Error("Key or salt is not defined in the environment variables");
  }

  const iv = hexToBytes(ivHex);
  const ciphertext = hexToBytes(encryptedHex);

  const hashedKey = await customHash(key + salt);

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    hashedKey,
    { name: "AES-CBC" },
    false,
    ["decrypt"]
  );

  const decryptedBuffer = await crypto.subtle.decrypt(
    {
      name: "AES-CBC",
      iv,
    },
    cryptoKey,
    ciphertext
  );

  const decoder = new TextDecoder();
  return decoder.decode(decryptedBuffer);
}
