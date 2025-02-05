import { DrawerTemplate } from "./Template";
import { galery } from "../../constants/app";
import { VStack } from "../ui/vstack";
import { ScrollView } from "react-native";
import { Image } from "../ui/image";

export function Galery() {
  return (
    <DrawerTemplate title="Galeria" className="w-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="2xl">
          {galery.map((img, index) => (
            <Image
              alt="Galeria"
              size="none"
              className="w-full max-h-44 max-w-[320px] rounded-md"
              key={index}
              source={img}
            />
          ))}
        </VStack>
      </ScrollView>
    </DrawerTemplate>
  );
}
