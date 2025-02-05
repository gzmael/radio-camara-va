import { ImageSourcePropType } from "react-native";
import { VStack } from "./ui/vstack";
import { Text } from "./ui/text";
import { Image } from "./ui/image";
import { HStack } from "./ui/hstack";

interface TeamImageProps {
  name: string;
  post: string;
  image: ImageSourcePropType;
}

export function TeamImage({ name, post, image }: TeamImageProps) {
  return (
    <HStack space="md" className="items-center">
      <Image alt="Imagem" className="rounded-md" source={image} size="xl" />
      <VStack className="flex-shrink">
        <Text className="mb-[-2px] text-white text-3xl">{name}</Text>
        <Text className="text-black text-2xl">{post}</Text>
      </VStack>
    </HStack>
  );
}
