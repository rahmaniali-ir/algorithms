export const alphabet = `abcdefghijklmnopqrstuvwxyz`;
export const upperAlphabet = alphabet.toUpperCase();

export function getAlphabetLetter(nth: number = 0) {
  const i = nth % alphabet.length;
  return upperAlphabet[i];
}
