import Feather from "@expo/vector-icons/Feather";
import { Pressable, IPressableProps } from "./ui/pressable";
import { Text } from "./ui/text";

type ButtonIconProps = IPressableProps & {
  icon: keyof typeof Feather.glyphMap;
  body: string;
  color?: "green" | "blue";
  size?: "3xl" | "5xl";
};

export function IconDrawer({
  icon,
  body,
  color = "green",
  size = "3xl",
  ...rest
}: ButtonIconProps) {
  return (
    <Pressable {...rest} className="items-center justify-center">
      <Feather
        name={icon}
        size={size === "3xl" ? 44 : 52}
        color={color === "green" ? "#38881B" : "#003980"}
        className={`flex-row items-center justify-center`}
      />

      <Text
        className={`${color === "green" ? "text-green-700" : "text-blue-500"} text-xl font-body`}
      >
        {body}
      </Text>
    </Pressable>
  );
}
