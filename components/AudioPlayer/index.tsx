import {
  AVPlaybackStatus,
  Audio,
  InterruptionModeAndroid,
  InterruptionModeIOS,
} from "expo-av";
import { useCallback, useEffect, useMemo, useState } from "react";

import Icons from "../Icons";
import { Box } from "../ui/box";
import { Pressable } from "../ui/pressable";
import { Text } from "../ui/text";

interface AudioPlayerProps {
  uri: string;
}

export const AudioPlayer = ({ uri }: AudioPlayerProps) => {
  const [sound, setSound] = useState<Audio.Sound | undefined>();
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);

  const onPlaybackStatusUpdate = useCallback((status: AVPlaybackStatus) => {
    setStatus(status);
  }, []);

  const statusText = useMemo(() => {
    if (!status) {
      return "Carregando...";
    }

    if (!status.isLoaded && status.error) {
      return "Erro durante a reprodução";
    }

    if (status.isLoaded) {
      return status.shouldPlay ? "Reproduzindo" : "Pausado";
    }

    return "Carregando...";
  }, [status]);

  async function playSound() {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      interruptionModeIOS: InterruptionModeIOS.MixWithOthers,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
      playThroughEarpieceAndroid: false,
    });

    const { sound } = await Audio.Sound.createAsync(
      { uri },
      { shouldPlay: true },
    );
    setSound(sound);
    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    playSound();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pause = async () => {
    await sound?.stopAsync();
  };

  const play = async () => {
    await sound?.playAsync();
  };

  return (
    <Box className="flex-1 gap-1 h-[75px] bg-[#0003] rounded-md overflow-hidden w-full items-center justify-center flex-col">
      <Box className="gap-4 h-[60px] w-full flex-row items-center justify-center">
        <Pressable onPress={play} disabled={statusText === "Reproduzindo"}>
          <Icons.PlayIcon size={60} />
        </Pressable>
        <Pressable onPress={pause} disabled={statusText === "Pausado"}>
          <Icons.PauseIcon size={60} />
        </Pressable>
      </Box>
      <Text>{statusText}</Text>
    </Box>
  );
};
