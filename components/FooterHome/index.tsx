import { VStack } from "@/components/ui/vstack";

import Icons from "../Icons";
import { HStack } from "../ui/hstack";
import { Text } from "../ui/text";

const FooterHome = () => {
  return (
    <VStack className="items-center justify-center">
      <HStack className="items-center">
        <Icons.WhatsAppIcon />
        <Text className="text-red-600 text-2xl ml-1">LIGUE E PARTICIPE</Text>
      </HStack>
      <Text className="text-red-600 text-4xl">(88) 9 9910-5134</Text>
    </VStack>
  );
};

export { FooterHome };
