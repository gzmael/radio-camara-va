import { useNetInfo } from "@react-native-community/netinfo";

import { useEffect } from "react";

import { AudioPlayer } from "./AudioPlayer";
import { Box } from "./ui/box";
import { Text } from "./ui/text";

export function MusicPlay() {
  const netInfo = useNetInfo();

  useEffect(() => {
    if (netInfo.isConnected) {
      console.log("Conectado");
    } else {
      console.log("Desconectado");
    }
  }, [netInfo]);

  return (
    <Box className="h-[112px] w-full justify-center items-center rounded-sm overflow-hidden">
      {netInfo.isConnected ? (
        <AudioPlayer uri="https://stm19.xcast.com.br:10658/stream" />
      ) : (
        <Text className="text-red text-2xl w-full flex-1 text-center mt-8">
          Você não está conectado à Internet
        </Text>
      )}
    </Box>
  );
}
