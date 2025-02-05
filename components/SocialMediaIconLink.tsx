import Feather from "@expo/vector-icons/Feather";
import { VStack } from "./ui/vstack";
import { IPressableProps, Pressable } from "./ui/pressable";
import { Linking } from "react-native";
import { Text } from "./ui/text";

interface IconLinkProps extends IPressableProps {
  icon: keyof typeof Feather.glyphMap;
  title: string;
  body: string;
  url: string;
}

export function SocialMediaIconLink({
  icon,
  url,
  body,
  title,
  ...rest
}: IconLinkProps) {
  return (
    <Pressable
      className="items-center flex-row"
      onPress={() => Linking.openURL(url)}
      {...rest}
    >
      <Feather name={icon} size={38} color="white" opacity={0.7} />
      <VStack className="ml-3">
        <Text className="mb-[-2.5px] text-white text-3xl">{title}</Text>
        <Text className="text-black text-xl">{body}</Text>
      </VStack>
    </Pressable>
  );
}
