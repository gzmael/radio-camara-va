import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { DrawerTemplate } from "./Template";
import { sendRequestMusic } from "@/api/pedido";
import {
  RequestMusicSchemaType,
  requestMusicSchema,
} from "@/validations/musicRequest";

import { MusicRequestFeedback } from "../MusicRequestFeedback";
import { VStack } from "../ui/vstack";
import { Pressable } from "react-native";
import { Text } from "../ui/text";
import { FormControlErrorText } from "../ui/form-control";
import { FormControlError } from "../ui/form-control";
import { InputField } from "../ui/input";
import { Input } from "../ui/input";
import { FormControlLabelText } from "../ui/form-control";
import { FormControlLabel } from "../ui/form-control";
import { FormControl } from "../ui/form-control";

interface RequestType {
  loading: boolean;
  state: "success" | "error" | null;
}

export function RequestMusic() {
  const initalRequestState = {
    loading: false,
    state: null,
  };
  const [requestState, setRequestState] =
    useState<RequestType>(initalRequestState);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RequestMusicSchemaType>({
    resolver: zodResolver(requestMusicSchema),
  });

  async function handleSendInfo(data: RequestMusicSchemaType) {
    setRequestState({
      loading: true,
      state: null,
    });

    try {
      await sendRequestMusic(data);
      setRequestState({
        loading: false,
        state: "success",
      });
      reset();
    } catch (error) {
      console.error(error);
      setRequestState({
        loading: false,
        state: "error",
      });
    }
  }
  return (
    <DrawerTemplate title="Pedir Música">
      {requestState?.state === null && (
        <VStack className="space-y-0.5">
          <Controller
            control={control}
            name="nome"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
                <FormControl
                  isInvalid={!!error}
                  size="md"
                  isDisabled={false}
                  isReadOnly={false}
                  isRequired={false}
                >
                  <FormControlLabel>
                    <FormControlLabelText>Password</FormControlLabelText>
                  </FormControlLabel>
                  <Input className="my-1">
                    <InputField
                      type="text"
                      placeholder="Seu nome"
                      value={value}
                      onChangeText={onChange}
                      returnKeyType="next"
                    />
                  </Input>
                  <FormControlError>
                    <FormControlErrorText>
                      {errors.nome?.message}
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
              </VStack>
            )}
          />

          <Controller
            control={control}
            name="artista"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
                <FormControl
                  isInvalid={!!error}
                  size="md"
                  isDisabled={false}
                  isReadOnly={false}
                  isRequired={false}
                >
                  <FormControlLabel>
                    <FormControlLabelText>Password</FormControlLabelText>
                  </FormControlLabel>
                  <Input className="my-1">
                    <InputField
                      type="text"
                      placeholder="Nome do Artista ou Banda"
                      value={value}
                      onChangeText={onChange}
                      returnKeyType="next"
                    />
                  </Input>
                  <FormControlError>
                    <FormControlErrorText>
                      {errors.artista?.message}
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
              </VStack>
            )}
          />
          <Controller
            control={control}
            name="musica"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
                <FormControl
                  isInvalid={!!error}
                  size="md"
                  isDisabled={false}
                  isReadOnly={false}
                  isRequired={false}
                >
                  <FormControlLabel>
                    <FormControlLabelText>Password</FormControlLabelText>
                  </FormControlLabel>
                  <Input className="my-1">
                    <InputField
                      type="text"
                      placeholder="Música que deseja ouvir"
                      value={value}
                      onChangeText={onChange}
                      returnKeyType="next"
                    />
                  </Input>
                  <FormControlError>
                    <FormControlErrorText>
                      {errors.musica?.message}
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
              </VStack>
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
                <FormControl
                  isInvalid={!!error}
                  size="md"
                  isDisabled={false}
                  isReadOnly={false}
                  isRequired={false}
                >
                  <FormControlLabel>
                    <FormControlLabelText>Password</FormControlLabelText>
                  </FormControlLabel>
                  <Input className="my-1">
                    <InputField
                      type="text"
                      placeholder="Seu bairro ou cidade"
                      value={value}
                      onChangeText={onChange}
                      returnKeyType="next"
                    />
                  </Input>
                  <FormControlError>
                    <FormControlErrorText>
                      {errors.email?.message}
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
              </VStack>
            )}
          />
          <Pressable
            onPress={handleSubmit(handleSendInfo)}
            className="w-full bg-black p-2"
          >
            <Text className="text-lg text-white">
              {requestState.loading ? "pedindo..." : "pedir"}
            </Text>
          </Pressable>
        </VStack>
      )}
      {requestState.state && (
        <MusicRequestFeedback
          status={requestState?.state}
          onPress={() => setRequestState(initalRequestState)}
        />
      )}
    </DrawerTemplate>
  );
}
