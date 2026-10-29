export async function getYear() {
  "use cache";
  return new Date().getFullYear();
}
