import { DrawerTemplate } from "./Template";
import { teamList } from "../../constants/app";
import { TeamImage } from "../TeamImage";
import { ScrollView } from "react-native";
import { VStack } from "../ui/vstack";

export function Team() {
  return (
    <DrawerTemplate title="Equipe" className="gap-5 mt-4">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <VStack space="md">
          {teamList.map(({ name, rules, image }) => (
            <TeamImage key={name} name={name} post={rules} image={image} />
          ))}
        </VStack>
      </ScrollView>
    </DrawerTemplate>
  );
}
