export default async function convertURLtoFile(url, name) {
  const response = await fetch(url);
  const data = await response.blob();
  const filename = name;
  const metadata = { type: `image/jpeg` };
  return new File([data], filename, metadata);
}
