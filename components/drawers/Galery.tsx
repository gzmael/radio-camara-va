import { DrawerTemplate } from "./Template";
import { galery } from "../../constants/app";
import { VStack } from "../ui/vstack";
import { ScrollView } from "react-native";
import { Image } from "../ui/image";

export function Galery() {
  return (
    <DrawerTemplate title="Galeria">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <VStack className="space-y-4">
          {galery.map((img, index) => (
            <Image
              alt="Galeria"
              className="w-full h-32 rounded-md bg-cover"
              key={index}
              source={img}
            />
          ))}
        </VStack>
      </ScrollView>
    </DrawerTemplate>
  );
}
