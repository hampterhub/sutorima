import { z } from 'zod';

export const currencySchema = z.object({
  bits: z.number().positive().optional(),
  subs: z.number().positive().optional()
})
export type Currency = z.infer<typeof currencySchema>;

export const activitySchema = z.object({
  type: z.string(),
  name: z.string(),
  state: z.string(),
  description: z.string(),
  available: z.boolean(),
  startingCost: currencySchema
})
export type Activity = z.infer<typeof activitySchema>;

export const activityResultSchema = z.object({
  name: z.string(),
  rewards: currencySchema,
  newState: z.string()
})
export type ActivityResult = z.infer<typeof activityResultSchema>;

export const gameStateSchema = z.object({
  activities: z.array(activitySchema),
  balance: currencySchema
});
export type GameState = z.infer<typeof gameStateSchema>;

export const v1PostActivityInputSchema = z.object({
  activityName: z.string()
});
export type V1PostActivityInput = z.infer<typeof v1PostActivityInputSchema>;

export const v1PostActivityOutputSchema = gameStateSchema.extend({
  result: activityResultSchema
});
export type V1PostActivityOutput = z.infer<typeof v1PostActivityOutputSchema>;

export const v1GetStateInputSchema = z.object({
});
export type V1PGetStateInput = z.infer<typeof v1GetStateInputSchema>;

export const v1GetStateOutputSchema = gameStateSchema.extend({
});
export type V1GetStateOutput = z.infer<typeof v1GetStateOutputSchema>;

export function schema(): string {
  return 'schema';
}
