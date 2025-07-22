// cryptoHelpers.ts
export async function sha256HashHex(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

export async function aes256CbcDecrypt({
  encryptedData,
  keyHashHex,
}: {
  encryptedData: string;
  keyHashHex: string;
}): Promise<string> {
  const [ivHex, ciphertextHex] = encryptedData.split(":");
  const iv = hexStringToUint8Array(ivHex);
  const ciphertext = hexStringToUint8Array(ciphertextHex);
  const keyBuffer = hexStringToUint8Array(keyHashHex);
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyBuffer,
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
  const decoded = new TextDecoder().decode(decryptedBuffer);
  return decoded;
}

// Helpers
function hexStringToUint8Array(hexString: string): Uint8Array {
  if (hexString.length % 2 !== 0) {
    throw new Error("Invalid hex string");
  }
  const array = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < hexString.length; i += 2) {
    array[i / 2] = parseInt(hexString.substr(i, 2), 16);
  }
  return array;
}

export async function customHash(data: string): Promise<ArrayBuffer> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  return await crypto.subtle.digest("SHA-256", dataBuffer);
}

export function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes;
}
