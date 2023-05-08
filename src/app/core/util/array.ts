export function getRange(size: number = 0) {
  return Array(size)
    .fill(0)
    .map((_, i) => i);
}
