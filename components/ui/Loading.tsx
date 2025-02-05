import { Center } from "./center";
import { Spinner } from "./spinner";

export function Loading() {
  return (
    <Center className="flex-1 bg-white">
      <Spinner size={50} color="red.600" />
    </Center>
  );
}
