export function formatString(str: string): string {
  return str.toLowerCase().replace(/\s/g, "_");
}
