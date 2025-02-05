import { ComponentProps, forwardRef } from "react";
import { FormControl } from "./ui/form-control";
import { Text } from "./ui/text";
import { Input, InputField } from "./ui/input";
import { IInputProps } from "@gluestack-ui/input/lib/types";
interface InputProps extends ComponentProps<typeof Input> {
  title: string;
  errorMessage?: string | null;
  placeholder: string;
}

const InputForm = forwardRef<IInputProps, InputProps>(
  ({ title, errorMessage = null, isInvalid, placeholder, ...rest }, ref) => {
    const invalid = !!errorMessage || isInvalid;
    return (
      <FormControl isInvalid={invalid}>
        <Text size="lg" className="text-white">
          {title}
        </Text>
        <Input
          // ts-ignore
          ref={ref as any}
          className="bg-gray-50"
          {...rest}
        >
          <InputField
            className="bg-gray-50 text-gray-600"
            placeholder={placeholder}
          />
        </Input>

        {errorMessage !== null && (
          <Text className="text-black">{errorMessage}</Text>
        )}
      </FormControl>
    );
  },
);

InputForm.displayName = "InputForm";

export { InputForm };
