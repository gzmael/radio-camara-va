import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";

import { menuIcons } from "../../constants/app";
import { IconDrawer } from "../IconDrawer";

interface MenuIconsProps {
  onPressIcon: (page: number) => void;
}

const MenuIcons = ({ onPressIcon }: MenuIconsProps) => {
  return (
    <Box className="flex-col mt-5 w-full">
      <HStack className="gap-8 items-center justify-center">
        {menuIcons.slice(0, 3).map((item) => (
          <IconDrawer
            key={item.pageNumber}
            icon={item.icon}
            body={item.text}
            onPress={() => onPressIcon(item.pageNumber)}
          />
        ))}
      </HStack>
      <HStack className="gap-8 items-center justify-center">
        {menuIcons.slice(3, 6).map((item) => (
          <IconDrawer
            key={item.pageNumber}
            onPress={() => onPressIcon(item.pageNumber)}
            icon={item.icon}
            body={item.text}
          />
        ))}
      </HStack>
    </Box>
  );
};

export { MenuIcons };
