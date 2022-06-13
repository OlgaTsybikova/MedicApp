export function genericSearch<T>(
  object: T,
  medications: Array<keyof T>,
  query: string
): boolean {
  if (query === "") {
    return true;
  }
  return medications.some((medication) => {
    const value = object[medication];
    if (typeof value === "string" || typeof value === "number") {
      return value.toString().toLowerCase().includes(query.toLowerCase());
    }
    return false;
  });
}
