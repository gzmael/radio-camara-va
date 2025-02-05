import { Marquee } from "@animatereactnative/marquee";

import { useMemo } from "react";
import { Loading } from "../ui/Loading";
import { Box } from "../ui/box";
import { Text } from "../ui/text";
import { usePlayingNow } from "@/api/tocando";

function extractMusicTitle(htmlString: string): string {
  const regex = /<span class="corfonte">(.|\n)*?<\/span>/gm;
  const matches = htmlString.match(regex);

  if (matches && matches.length > 0) {
    const spanContent = matches[0];

    const textWithoutTags = spanContent.replace(/<[^>]*>/g, "").trim();

    const [, musicTitle] = textWithoutTags.split(": ");

    return musicTitle.trim();
  }

  return "Música não encontrada";
}

export const PlayingNow = () => {
  const { data, isLoading, isError } = usePlayingNow();

  const text = useMemo(() => {
    if (isError || !data) {
      return "Música não encontrada";
    }

    return extractMusicTitle(data);
  }, [data, isError]);

  if (isLoading) return <Loading />;
  return (
    <Box className="mt-5 justify-center items-center w-1/2">
      <Text className="text-blue-500 text-xl font-body">TOCANDO AGORA</Text>
      {!isLoading && (
        <Marquee spacing={50} speed={0.4}>
          <Text className="text-blue-700 text-2xl font-body">{text}</Text>
        </Marquee>
      )}
    </Box>
  );
};
