export function objectToArray<T = any>(obj: Record<any, T>) {
  return Object.values(obj);
}
