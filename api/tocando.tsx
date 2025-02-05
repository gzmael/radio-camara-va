import { useQuery } from "@tanstack/react-query";

import { URL_TOCANDO } from "@/constants/app";

export const getPlayingNow = async () => {
  const response = await fetch(`${URL_TOCANDO}&time=${Date.now()}`, {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "Cache-Control": "max-age=0",
      Connection: "keep-alive",
    },
    referrer: URL_TOCANDO,
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "omit",
  });

  if (response.status === 200) {
    return response.text();
  }

  return null;
};

export const usePlayingNow = () => {
  return useQuery({
    queryKey: ["playingNow"],
    queryFn: getPlayingNow,
    refetchInterval: 20000,
  });
};
