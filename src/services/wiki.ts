import type { IRandomWikiArticle } from "@/helpers/interfaces";

export const getRandomWikiArticle = async (): Promise<IRandomWikiArticle> => {
  try {
    const wikiData = await fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary');
    const data: IRandomWikiArticle = await wikiData.json();
    return data;
  } catch (err) {
    throw new Error(err as string);
  }
}
