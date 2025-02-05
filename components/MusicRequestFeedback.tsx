import { Feather } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Center } from "./ui/center";
import { Text } from "./ui/text";
import { Pressable } from "react-native";

type MusicRequestFeedbackProps = ComponentProps<typeof Pressable> & {
  status: "success" | "error";
};

export const MusicRequestFeedback = ({
  status,
  ...rest
}: MusicRequestFeedbackProps) => {
  const iconSelected: keyof typeof Feather.glyphMap =
    status === "success" ? "check" : "x-circle";
  const textSuccess = "Pedido enviado, agradecemos pela participação!";
  const textError =
    "não foi possível fazer seu pedido, tente novamente em instantes!";
  const text = status === "success" ? textSuccess : textError;
  return (
    <Center>
      <Feather
        as={Feather}
        name={iconSelected}
        className="text-white text-lg"
      />
      <Text className="text-2xl text-center text-white">{text}</Text>

      <Pressable className="items-center p-2 bg-black w-full mt-2" {...rest}>
        <Text className="text-lg text-white">pedir nova música</Text>
      </Pressable>
    </Center>
  );
};
