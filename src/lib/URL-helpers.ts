export function prepareURL(path: string): string {
  return import.meta.env.BASE_URL + path || path;
}