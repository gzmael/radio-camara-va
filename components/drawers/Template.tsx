import { VStack } from "@/components/ui/vstack";
import { ComponentProps, ReactNode } from "react";

import { Text } from "../ui/text";
import { LinearGradient } from "../ui/LinearGradient";
import { StyleSheet } from "react-native";

type DrawerTemplateProps = ComponentProps<typeof VStack> & {
  children: ReactNode;
  title: string;
};

export const DrawerTemplate = ({
  title,
  children,
  ...props
}: DrawerTemplateProps) => {
  return (
    <LinearGradient
      colors={["#D94049", "#D95C40"]}
      end={[0, 1]}
      start={[0, 0]}
      style={styles.button}
    >
      <VStack style={styles.container} {...props}>
        <Text className="text-black text-6xl opacity-50">{title}</Text>
        {children}
      </VStack>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
  },
});
