export const getRandomNotification = async () => {
  try {
    const wikiData = await fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary');
    const data = await wikiData.json();
    return data;
  } catch (err) {
    throw new Error(err as string);
  }
}
