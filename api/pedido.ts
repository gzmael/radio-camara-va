import { URL_PEDIDO } from "@/constants/app";
import { RequestMusicSchemaType } from "../validations/musicRequest";

export const sendRequestMusic = async (data: RequestMusicSchemaType) => {
  // eslint-disable-next-line no-undef
  const bodyParsed = new URLSearchParams(data).toString();

  return fetch(URL_PEDIDO, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "Cache-Control": "max-age=0",
      Connection: "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      Origin: "https://player.xcast.com.br",
      Referer: "https://player.xcast.com.br/pedido/10658",
    },
    body: bodyParsed,
  });
};
