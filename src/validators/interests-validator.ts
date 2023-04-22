import { z } from 'zod';

export const InterestsGeneralSchema = z.object({
  activities: z.array(z.string()).nonempty('Selecione ao menos uma atividade'),
  genres: z.array(z.string()).nonempty('Selecione ao menos um gênero'),
});

// infer the type from the schema
export type InterestsGeneralValues = z.infer<typeof InterestsGeneralSchema>;

export const InterestsSeriesSchema = z.object({
  confort_shows: z.string().nonempty('Selecione uma série'),
})

// infer the type from the schema
export type InterestsSeriesValues = z.infer<typeof InterestsSeriesSchema>;