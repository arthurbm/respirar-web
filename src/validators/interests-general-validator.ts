import { z } from 'zod';

export const InterestsGeneralSchema = z.object({
  activities: z.array(z.string()).nonempty('Selecione ao menos uma atividade'),
  genders: z.array(z.string()).nonempty('Selecione ao menos um gênero'),
});

// infer the type from the schema
export type InterestsGeneralValues = z.infer<typeof InterestsGeneralSchema>;
