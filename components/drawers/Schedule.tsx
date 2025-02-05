import { DrawerTemplate } from "./Template";
import { scheduleGrid } from "@/constants/app";
import { Box } from "../ui/box";
import { Text } from "../ui/text";

export function Schedule() {
  return (
    <DrawerTemplate title="Programação" className="gap-5 mt-4">
      {scheduleGrid.map((day) => (
        <Box key={day.weekDay} className="gap-1">
          <Text className="text-white text-4xl">{day.weekDay}</Text>
          {day.routine.map((routine) => (
            <Text key={routine} className="text-black text-2xl leading-none">
              {routine}
            </Text>
          ))}
        </Box>
      ))}
    </DrawerTemplate>
  );
}
