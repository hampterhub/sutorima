import {
  V1GetStateOutputSchema,
  V1PostActivityInputSchema,
  V1PostActivityOutputSchema,
} from '@sutorima/schema';

export type SutorimaService = {
  getState: () => Promise<V1GetStateOutputSchema>
  postActivity: (input: V1PostActivityInputSchema) => Promise<V1PostActivityOutputSchema>
}
// TODO update store on these service methods
export const sutorimaService: SutorimaService = {
  async getState(): Promise<V1GetStateOutputSchema> {
    const object: V1GetStateOutputSchema = {
      activities: [
        {
          type: '',
          name: 'gooning',
          state: '',
          description: 'lolwot',
          available: true,
          startingCost: {
            bits: 69,
            subs: 0,
          },
        },
      ],
      balance: {
        bits: 42069,
        subs: 69,
      },
    };
    return object;
  },
  async postActivity(input): Promise<V1PostActivityOutputSchema> {
    const object: V1PostActivityOutputSchema = {
      activities: [
        {
          type: '',
          name: 'gooning',
          state: 'newState',
          description: 'lolwot',
          available: true,
          startingCost: {
            bits: 69,
            subs: 0,
          },
        },
      ],
      balance: {
        bits: 42069,
        subs: 69,
      },
      result: {
        name: input.activityName,
        rewards: {

        },
        newState: 'newState',
      },
    };
    return object;
  }
}