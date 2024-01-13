export const getQueryParameter = (paramName: string) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(paramName);
}

export const sleep = async (time: number) => await new Promise(resolve => setTimeout(resolve, time));
