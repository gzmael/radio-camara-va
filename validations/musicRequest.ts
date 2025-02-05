import { z } from "zod";

export const requestMusicSchema = z.object({
  nome: z.string().min(1, "Informe o nome."),
  email: z.string().default("Sem Localização").optional(),
  artista: z
    .string({ required_error: "Informe o artista." })
    .min(2, "Deve conter no mínimo 2 caracteres"),
  musica: z
    .string({ required_error: "Informe o nome da música." })
    .min(1, "Deve conter no mínimo 1 caractere"),
});

export type RequestMusicSchemaType = z.infer<typeof requestMusicSchema>;
