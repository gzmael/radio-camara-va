import { DrawerTemplate } from "./Template";
import { ScrollView } from "react-native";
import { VStack } from "../ui/vstack";
import { Text } from "../ui/text";

export function About() {
  return (
    <DrawerTemplate title="Quem Somos">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <VStack space="lg">
          <Text className="font-heading text-gray-50 text-2xl">
            Bem-vindo ao aplicativo da nossa Web Rádio da Câmara Municipal de
            Várzea Alegre-CE! Explore esta plataforma única para uma cobertura
            abrangente de eventos, discussões e atualizações cruciais da nossa
            comunidade. Tudo com a qualidade e comprometimento que definem nossa
            Câmara municipal. A voz da democracia nunca soou tão clara.
          </Text>
          <Text className="font-heading text-gray-50 text-2xl">
            Comprometidos em fortalecer os laços com os cidadãos, visamos
            promover a transparência e a participação ativa por meio de uma
            programação diversificada, abrangendo assuntos legislativos,
            culturais e sociais.
          </Text>
          <Text className="font-heading text-gray-50 text-2xl">
            Junte-se a nós enquanto exploramos as vozes e histórias que moldam
            nossa cidade, conectando-se por meio da música, notícias e programas
            interativos. Estamos aqui para servir e celebrar a identidade única
            da nossa comunidade.
          </Text>
        </VStack>
      </ScrollView>
    </DrawerTemplate>
  );
}
